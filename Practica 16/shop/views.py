from django.shortcuts import render, get_object_or_404, redirect
from django.views.decorators.http import require_POST
from .models import Category, Book, Order, OrderItem
from .cart import Cart
from .forms import OrderCreateForm

def book_list(request, category_slug=None):
    category = None
    categories = Category.objects.all()
    books = Book.objects.filter(available=True)
    filter_params = {}
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        books = books.filter(category=category)
    # Фильтр по цене (если переданы параметры price_min и price_max)
    price_min = request.GET.get("price_min")
    price_max = request.GET.get("price_max")
    if price_min is not None and price_min != "":
        books = books.filter(price__gte=price_min)
        filter_params["price_min"] = price_min
    if price_max is not None and price_max != "":
        books = books.filter(price__lte=price_max)
        filter_params["price_max"] = price_max
    # Фильтр по размерам (если переданы параметры size)
    # (Примечание: в модели Book нет поля size, поэтому фильтр не применяется, но код добавлен для дальнейшего расширения)
    size_list = request.GET.getlist("size")
    if size_list:
        # Если в модели Book появится поле size (или связь с моделью размеров), то здесь можно будет применить фильтр, например:
        # books = books.filter(size__in=size_list)
        filter_params["size"] = size_list
    return render(request, 'shop/book/list.html', {'category': category, 'categories': categories, 'books': books, 'filter_params': filter_params})

def book_detail(request, id, slug):
    book = get_object_or_404(Book, id=id, slug=slug, available=True)
    return render(request, 'shop/book/detail.html', {'book': book})

@require_POST
def cart_add(request, book_id):
    cart = Cart(request)
    book = get_object_or_404(Book, id=book_id)
    quantity = int(request.POST.get('quantity', 1))
    cart.add(book=book, quantity=quantity)
    return redirect('shop:cart_detail')

def cart_remove(request, book_id):
    cart = Cart(request)
    book = get_object_or_404(Book, id=book_id)
    cart.remove(book)
    return redirect('shop:cart_detail')

def cart_detail(request):
    cart = Cart(request)
    return render(request, 'shop/cart/detail.html', {'cart': cart})

def order_create(request):
    cart = Cart(request)
    if request.method == 'POST':
        form = OrderCreateForm(request.POST)
        if form.is_valid():
            order = form.save(commit=False)
            if request.user.is_authenticated:
                order.user = request.user
            order.save()
            for item in cart:
                OrderItem.objects.create(order=order,
                                       book=item['book'],
                                       price=item['price'],
                                       quantity=item['quantity'])
            # clear the cart
            cart.clear()
            return render(request, 'shop/order/created.html', {'order': order})
    else:
        form = OrderCreateForm()
    return render(request, 'shop/order/create.html', {'cart': cart, 'form': form})
