from django.urls import path
from . import views

app_name = 'shop'

urlpatterns = [
    path('', views.book_list, name='book_list'),
    path('cart/', views.cart_detail, name='cart_detail'),
    path('cart/add/<int:book_id>/', views.cart_add, name='cart_add'),
    path('cart/remove/<int:book_id>/', views.cart_remove, name='cart_remove'),
    path('order/create/', views.order_create, name='order_create'),
    path('<slug:category_slug>/', views.book_list, name='book_list_by_category'),
    path('<int:id>/<slug:slug>/', views.book_detail, name='book_detail'),
] 