# Langalore
 
[Deployed Project Link](https://langalore.herokuapp.com/)
 
Langalore was a personal project and a proof of concept for an online learning hub, with a focus on languages.
 
<b>Note</b>: This application is very far from complete. There is barely any content, there are plenty of bugs and some pages go nowhere. The purpose of this project was predominantly to test myself and create something that I think is cool.
 
## Goals
 
* **Build a full-stack application**
* **Use an Django and Python for the back end**
* **Use PostgreSQL for databasing**
* **Implement thoughtful user stories**
* **Be deployed online**
 
## Technologies Used
 
* JavaScript (ES6)
* HTML5
* CSS3
* React.js
* Python
* Django
* PostgreSQL
* Axios
* Git
* GitHub
* Insomnia
* Sketch
 
## Installation
 
<b>The project is deployed at [https://langalore.herokuapp.com/](https://langalore.herokuapp.com/)</b>
 
If you want to test it locally follow the following instructions:
 
* Clone or download the repo
* In the frontend directory install all of project the dependencies with `yarn`
* In the project root run the commands
 * `pip install pipenv`
 * `pipenv install django==2.2.9`
 * `pipenv shell`
 * `pipenv install psycopg2-binary`
 * `createdb languages`
 * `python manage.py migrate`
 * `python manage.py runserver`
 * `python manage.py loaddata subjects/seeds.json`
 * `python manage.py loaddata modules/seeds.json`
 * `python manage.py loaddata chapters/seeds.json`
 * `python manage.py loaddata chunks/seeds.json`
 * `python manage.py loaddata pages/seeds.json`
 * `python manage.py loaddata questions/seeds.json`
 * `python manage.py loaddata jp_alphabet/seeds.json`
 * `python manage.py loaddata vocab/seeds.json`
 * Open your chosen browser and navigate to `http://localhost:8000/`
 
## Login/Register
 
There is no email verification or password limitations so you can create a new user with any fake inputs as long as the email follows the email format.

Alternativly you can use the following test login:

```
email: test@email.com 
password: pass
```
 
## Overview
 
This project came out of my desire to see more textbook-like language learning services, as I found traditional textbooks far more effective than most digital language tools. The idea was to create an interactive textbook, with a focus on grammar and structure over memorisation. I worked alone on this project, creating the wireframes, front-end and back-end.
 
## Process
 
1. First I wireframed and prototyped some designs for the front-end in sketch.
2. I planned out the PostgreSQL database and started building the back-end with Python/Django. I also built out the models, views, serializers. I built only a handful of endpoints that I knew I'd need off the bat.
4. Using my wireframes as a guide I attached a react front-end and started to build it out.
5. A lot of the back-end functionality was dictated by my front-end, as I'd go back and build out more endpoints or extra functionality to suit the client side of the site.
 
## Reflections
 
One of the most challenging aspects of this project was the manipulation of data from the back-end into an appealing experience on the client side. I do believe I achieved this to an extent, with a classroom dashboard and interactive lessons. Thinking about how to store visual data for page layouts in the back-end was also an interesting hurdle. After inspecting some other websites for inspiration I landed on storing long strings of markdown for each of the pages that I then parsed into JSX and various custom and reusable components on the front end.
