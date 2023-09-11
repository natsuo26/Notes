# Table of contents
- Installing Dependencies
- Setting up the environment variable
- Setting up the project
- Starting the web app

## Installing Dependencies
First you need to download & install [NodeJS](https://github.com/nodejs/node#download) and verify the version using `npm -v` in your terminal.
## Setting up the environment variable
First, you need to create a ".env" file with following contents:
1. MONGODB_URI= ``mongodb+srv://username123:<password>@cluster0.ktizgno.mongodb.net/``
2. GOOGLE_CLIENT_ID=``<Client ID>``
3. GOOGLE_CLIENT_SECRET=``<Client secret>``
4. GOOGLE_CALLBACK_URL=``http://localhost:5000/google/callback``

## Setting up the project
1) **To create MongoDB URI to store your credentials**
	1. create a MongoDB account and go to the dashboard screen
	2. you see project folder on top left maybe named as Project 0
	3. click on it and create a new project name it whatever you wish to create set yourself as project owner, on top it might say that your IP is not added so add it.
	4. click on build a database and it goes to a setup page select free option and keep everything to default and create
	5. set username and password and copy the password store it somewhere and click on create user.
	6. you will be redirected to dashboard and now click on connect then click on MongoDB for VS code
	7. copy your link provided under Connect to your MongoDB deployment.
	8. for example: `mongodb+srv://username123:<password>@cluster0.ktizgno.mongodb.net
	9. replace password with the password you stored while creating the user and then copy this whole URI to the MONGODB_URI in ".env" file.
	10. if you do get any error in console like MongoNetworkError its most likely that your IP address is not added as a authorised party to access the database.

2) **to set up google 0auth**
	1. go to [Google Cloud Console](https://console.cloud.google.com)
	2. click on 'select a project' drop down menu and create a new project
	3. name the project what ever you like and then keep everything default and create it.
	4. once done select the project from project selection drop down.
	5. on the left you will have a hamburger slider with multiple options select API & services.
	6. go to 0Auth consent screen and select use type External, write any app name add your email as a user support email if you have a logo you can add it, add dev contact information(your email) and then save and continue, press save and continue again, press save and continue again.
	7. press back to dashboard.
	8. then go to credential then create credentials by clicking on "+Create Credentials" click on 0auth client ID.
	9. application type- Web App
	10. name the app whatever your like or leave it as it is
	11. in JavaScript origins add "http://localhost:5000"
	12. then in Authorized redirect URIs
	    add "http://localhost:5000/google/callback"
	    it can take 5 or more mins to update.
	13. click create, you will get a pop up with "0Auth client created"
	14. copy Client ID and paste it in the ``<Client ID> in .env``, also copy the client secret and paste it in the ``<Client secret> in .env``
	
	and you are good to go.

## Starting the web app
1. navigate to your project folder and then run in the terminal:
	``$npm install``
	this will install all the dependencies.
2. once all dependencies installed then you need to run: 
	``$npm start``
	this will start the web app.
3. in browser go to "http://localhost:5000" and your app should work.
