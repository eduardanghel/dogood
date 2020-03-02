# dogood
SEG Major Group Project - DoGood App

To do any work on this repo - clone it and use the appropriate directory (backend/frontend)

## backend - setup and development
The backend runs on Django in Google Cloud Services. It uses a series of services.

### Setup Google Cloud Services
**(1)** Follow the instructions provided by [Google](https://cloud.google.com/sdk/docs/quickstart-macos).

Use the credentials setup in the email sent from Google. 

You should have received this from an address of the form `karma-zomp.co.uk`

**(2)** Setup Google Cloud SQL Proxy. Instructions provided by [Google](https://cloud.google.com/sql/docs/mysql/sql-proxy)

**(3)** Connect to the database locally:
```sh
./cloud_sql_proxy -instances="karma-backend-268618:europe-west1:karma-sql"=tcp:3306
```

### Setup the backend

**(1)** Setup the environment the activate it. Do this in the directory `backend/karmabackend/`
```sh
python3.6 -m venv venv
source venv/bin/activate
```
**(2)** Install the requirements 
```sh
python -m pip install -r requirements.txt
```

**(3)** Connect to the Google Cloud SQL Database:

```sh
./cloud_sql_proxy -instances="karma-backend-268618:europe-west1:karma-sql"=tcp:3306
```

Without doing this, you can't test the app, see any changes or make migrations/migrate.

**(4)** Run the tests:

```sh
python manage.py test
```

**(5)** Create a super user:

```sh
python manage.py createsuperuser
```

You can use this to log in when developing. Choose a sensible e-mail and an
easy password like "password".

**(6)** Start the development server:

```sh
python manage.py runserver
```

**[x]** If there are any changes to the requirements, update the `requirements.in` file and then run 
```sh
pip-compile
``` 
in order to update the `requirements.txt` file


### Deploying the app to Google Cloud Services
**(0)** Ensure you have made all the migrations and migrated by running:
``` sh
python manage.py makemgirations
python manage.py migrate
```
**(1)** Collect all static files
``` sh
python manage.py collect static
```
**(2)** Deploy 
```sh 
gcloud app deploy
``` 