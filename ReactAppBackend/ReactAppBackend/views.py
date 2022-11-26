from django.shortcuts import render


def frontend(res, slug="false"):
    return render(res, 'index.html')
