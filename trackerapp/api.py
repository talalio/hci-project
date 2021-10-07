import requests
import time
from decouple import config


class RapidCovidApi :
	
	def __init__(self, api_key):
		self.totals_endpoint = "https://covid-19-data.p.rapidapi.com/totals"
		self.country_name_endpoint = "https://covid-19-data.p.rapidapi.com/country"
		self.country_code_endpoint = "https://covid-19-data.p.rapidapi.com/country/code"
		self.all_endpoint = "https://covid-19-data.p.rapidapi.com/country/all"
		self.key = api_key
		self.headers = {
		    'x-rapidapi-host': "covid-19-data.p.rapidapi.com",
		    'x-rapidapi-key': self.key
		} 

	def get_total(self) -> dict:
		try:
			querystring = {"format":"json"}
			response = requests.get(self.totals_endpoint, headers=self.headers, params=querystring)
			if response.status_code == 200 and len(response.json()) != 0:
				return response.json()[0]
		except Exception as e:
			return None

	def get_country_by_name(self, country: str) -> dict:
		try:
			querystring = {"name": country,"format":"json"}
			response = requests.get(self.country_name_endpoint, headers=self.headers, params=querystring)
			if response.status_code == 200 and len(response.json()) != 0:
				return response.json()[0]
		except Exception as e:
			return None

	def get_country_by_code(self, code: str) -> dict:
		try:
			querystring = {"code": code,"format":"json"}
			response = requests.get(self.country_code_endpoint, headers=self.headers, params=querystring)
			if response.status_code == 200 and len(response.json()) != 0:
				return response.json()[0]
		except Exception as e:
			return None

	def get_all_countries(self):
		countries_list = [  
		  {"name": 'Algeria', "code": 'DZ'},
		  {"name": 'Australia', "code": 'AU'}, 
		  {"name": 'France', "code": 'FR'},
		  {"name": 'Sudan', "code": 'SD'},
		  {"name": 'Turkey', "code": 'TR'},  
		  {"name": 'United Kingdom', "code": 'GB'}, 
		  {"name": 'United States', "code": 'US'}, 
		]
		all_data = []
		for country in countries_list:
			try:
				querystring = {"name": country['name'],"format":"json"}
				response = requests.get(self.country_name_endpoint, headers=self.headers, params=querystring)
				if response.status_code == 200 and len(response.json()) != 0:
					all_data.append(response.json()[0])
			except Exception as e:
				pass
			time.sleep(1)
		return all_data