from django.shortcuts import render, redirect
from .forms import ContactForm

def home(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success')
    else:
        form = ContactForm()

    return render(request, 'main/home.html', {'form': form})

def success(request):
    return render(request, 'main/success.html')
