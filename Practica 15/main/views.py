from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def user(request):
    context = {
        'username': 'Дарья',
        'is_authenticated': True
    }
    return render(request, 'user.html', context)

def fruits(request):
    fruits_list = ['Яблоки', 'Груши', 'Апельсины', 'Бананы']
    return render(request, 'fruits.html', {'fruits': fruits_list})

def table(request):
    developers = [
        {'name': 'Андрей', 'age': 23, 'specialization': 'Python'},
        {'name': 'Борис', 'age': 27, 'specialization': 'PHP'},
        {'name': 'Владимир', 'age': 21, 'specialization': 'C++'}
    ]
    return render(request, 'table.html', {'developers': developers})
