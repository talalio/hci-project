
# Installation

##### Create an empty directory (Optional)   
`mkdir project && cd project`   
##### Clone this repository   
`git clone https://github.com/talalOfficial/hci-project.git`   
##### Create a virtual environment and activate it   
`python3 -m virtualenv venv && source venv/bin/activate`   
##### Change to the project directory and install requirements   
`cd hci-project && pip install -r requirements.txt`   
##### Generate a new django SECRET_KEY using   
`python manage.py shell -c 'from django.core.management import utils; print(utils.get_random_secret_key())'`   
##### Create a file called .env and store the secret in it (add it with out quotes)   
`touch .env && echo "SECRET_KEY=YOUR_NEW_SECRET" > .env`   
##### Sign up for an account in [RapidAPI](https://rapidapi.com/) and get your key, append that key to .env file (again without using quotes)   
`echo "rapidapi_key=YOUR_API_KEY" >> .env`   
##### Collect the static files to serv   
`python manage.py collectstatic`   
##### Migrate and run the server   
`python manage.py migrate`   
`python manage.py runserver`   

# Credits
- `<main>` content [@ib-bib](https://github.com/ib-bib)
- icons & svgs 
  - [![icons8](https://icons8.com/vue-static/landings/primary-landings/favs/icons8_fav_32×32.png) icons8](https://icons8.com) 
  - [![icofont](https://icofont.com/images/favicon.png) icofont](https://icofont.com/)
- dark mode [@forevolve](https://github.com/ForEvolve/bootstrap-dark)
- API [RapidAPI](https://rapidapi.com/)

# TODO
- [x] Add TTS (Text To Speech)
- [ ] Add search
- [ ] Improve code quality
