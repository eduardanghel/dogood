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

## frontend - DoGood Mobile App – Development Setup Guide
The mobile app is written in React Native to facilitate cross-platform distribution. This guide explains configuring the development environment.

### Nix machines
**(1)**.	Install Homebrew for software management: https://brew.sh
**(2)**.	Install React Native development tools:
(a).	Node: `$ brew install node` 
(b).	Watchman: `$ brew install watchman` 
(c).	Expo Cli: `$ npm install -g expo-cli`

Project dependencies
The app relies on a series of packages which need to be installed and maintained. Once in the root directory, run the command:
```
$ npm install
```
To install these dependencies.


iOS specifics
Install XCode, run it and accept the terms and conditions

On iOS we use Cocoapods to manage dependencies. Cocoapods relies on ruby, and we use ruby version 2.4.
You can install the correct version of ruby with rvm. Follow the installation instructions on the website then:
` ``
$ rvm install 2.4  # installs ruby 2.4
$ rvm use 2.4
$ sudo gem install cocoapods
```

Cocoapods is now installed, so we can ask Cocoapods to get the dependencies for our iOS project like this...
```
$ cd ios
$ pod install
```
If `glog` fails to install, make sure you run ` sudo xcode-select --switch /Applications/Xcode.app`

To run the app:
```
$ npx react-native start
```
On iOS: 
```
$ npx react-native run-ios 
````

