import React from 'react';

function Cart({ cartItems, onRemove, onBack, onUpdateQuantity }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * parseInt(item.price, 10), 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Корзина</h2>
      <button onClick={onBack} className="btn btn-primary mb-3">
        Назад
      </button>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <span>{item.name}</span> - <span>{item.price}</span>
                </div>
                <div className="d-flex align-items-center">
                  <button onClick={() => onUpdateQuantity(index, item.quantity - 1)} className="btn btn-outline-secondary btn-sm me-2">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(index, item.quantity + 1)} className="btn btn-outline-secondary btn-sm ms-2">+</button>
                </div>
                <button onClick={() => onRemove(index)} className="btn btn-danger btn-sm">
                  Удалить
                </button>
              </li>
            ))}
          </ul>
          <div className="text-end">
            <h3>Общая сумма: {totalPrice}₽</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;