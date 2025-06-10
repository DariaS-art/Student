let purchases = JSON.parse(localStorage.getItem('purchases')) || [];
let myChart = null;

// Цвета для категорий
const categoryColors = {
    'одежда': '#cb11ab',
    'электроника': '#6f2da8',
    'продукты': '#2ecc71',
    'красота': '#e84393',
    'дом': '#00cec9',
    'развлечения': '#fdcb6e'
};

document.getElementById('purchaseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const purchase = {
        id: Date.now(),
        name: document.getElementById('itemName').value,
        price: parseFloat(document.getElementById('itemPrice').value.replace(/\s/g, '')),
        category: document.getElementById('itemCategory').value,
        date: new Date().toISOString()
    };
    
    purchases.push(purchase);
    savePurchases();
    updateUI();
    this.reset();

});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function savePurchases() {
    localStorage.setItem('purchases', JSON.stringify(purchases));
}

function updateUI() {
    updatePurchasesList();
    updateStatistics();
    updateTotalAmount();
}

function updatePurchasesList() {
    const purchasesList = document.getElementById('purchasesList');
    purchasesList.innerHTML = '';
    
    const sortedPurchases = [...purchases].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedPurchases.forEach(purchase => {
        const item = document.createElement('div');
        item.className = 'purchase-item';
        item.innerHTML = `
            <div class="purchase-info">
                <span class="purchase-name">${purchase.name}</span>
                <span class="purchase-category">${purchase.category}</span>
            </div>
            <div class="purchase-actions">
                <span class="purchase-price">${purchase.price.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₽</span>
                <button class="edit-btn" onclick="editPurchase(${purchase.id})" style="background-color: #4CAF50; color: white; border: none; padding: 10px 15px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 5px;">Редактировать</button>
                <button class="delete-btn" onclick="deletePurchase(${purchase.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        purchasesList.appendChild(item);
    });
}

function editPurchase(id) {
    const purchase = purchases.find(p => p.id === id);
    if (purchase) {
        document.getElementById('itemName').value = purchase.name;
        document.getElementById('itemPrice').value = purchase.price;
        document.getElementById('itemCategory').value = purchase.category;
        
        // Удалите товар из списка, чтобы избежать дублирования
        deletePurchase(id);
    }
}

function deletePurchase(id) {
    purchases = purchases.filter(purchase => purchase.id !== id);
    savePurchases();
    updateUI();
}

function updateStatistics() {
    const stats = {};
    let total = 0;
    
    purchases.forEach(purchase => {
        if (!stats[purchase.category]) {
            stats[purchase.category] = 0;
        }
        stats[purchase.category] += purchase.price;
        total += purchase.price;
    });

    updateChart(stats, total);
    updateCategoryStats(stats, total);
}

function updateChart(stats, total) {
    const ctx = document.getElementById('statsChart').getContext('2d');
    
    if (myChart) {
        myChart.destroy();
    }
    
    const data = {
        labels: Object.keys(stats),
        datasets: [{
            data: Object.values(stats),
            backgroundColor: Object.keys(stats).map(category => categoryColors[category] || '#999'),
            borderWidth: 0
        }]
    };

    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function updateCategoryStats(stats, total) {
    const categoryStats = document.getElementById('categoryStats');
    categoryStats.innerHTML = '';
    
    Object.entries(stats)
        .sort((a, b) => b[1] - a[1])
        .forEach(([category, sum]) => {
            const percentage = ((sum / total) * 100).toFixed(1);
            const statItem = document.createElement('div');
            statItem.className = 'stat-item';
            statItem.innerHTML = `
                <span>${category}</span>
                <span>${sum.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₽ (${percentage}%)</span>
            `;
            categoryStats.appendChild(statItem);
        });
}

function updateTotalAmount() {
    const total = purchases.reduce((sum, purchase) => sum + purchase.price, 0);
    document.getElementById('totalAmount').textContent = total.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Инициализация при загрузке страницы
updateUI();