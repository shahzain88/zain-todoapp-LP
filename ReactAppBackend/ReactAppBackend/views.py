from django.shortcuts import render


def frontend(res):
    return render(res, 'index.html')


def uri_hendler(res, slug):
    return render(res, 'index.html', {'slug': slug})
