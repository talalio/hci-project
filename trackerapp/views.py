from django.http import HttpResponse
from django.template import loader
from decouple import config
from . import api

api = api.RapidCovidApi(config("rapidapi_key"))

def home_page(request):
    return HttpResponse(loader.get_template('home.html').render())

def stats_page(request):
    data = api.get_total()
    countries_data = api.get_all_countries()
    context = {'data': data, 'countries': countries_data}
    return HttpResponse(loader.get_template('stats.html').render(context, request))