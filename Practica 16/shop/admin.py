from django.contrib import admin
from .models import Category, Book, Order, OrderItem

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}
    verbose_name = 'Категория'
    verbose_name_plural = 'Категории'

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'slug', 'price', 'stock', 'available', 'created', 'updated']
    list_filter = ['available', 'created', 'updated', 'category']
    list_editable = ['price', 'stock', 'available']
    prepopulated_fields = {'slug': ('title',)}
    verbose_name = 'Книга'
    verbose_name_plural = 'Книги'

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    raw_id_fields = ['book']
    verbose_name = 'Товар заказа'
    verbose_name_plural = 'Товары заказа'

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'first_name', 'last_name', 'email', 'status', 'created', 'updated']
    list_filter = ['status', 'created', 'updated']
    inlines = [OrderItemInline]
    verbose_name = 'Заказ'
    verbose_name_plural = 'Заказы'
