
      _   _           _           _  _____            ______                              
     | \ | |         | |         | |/ ____|   ___    |  ____|                             
     |  \| | ___   __| | ___     | | (___    ( _ )   | |__  __  ___ __  _ __ ___  ___ ___ 
     | . ` |/ _ \ / _` |/ _ \_   | |\___ \   / _ \/\ |  __| \ \/ / '_ \| '__/ _ \/ __/ __|
     | |\  | (_) | (_| |  __/ |__| |____) | | (_>  < | |____ >  <| |_) | | |  __/\__ \__ \
     |_| \_|\___/ \__,_|\___|\____/|_____/   \___/\/ |______/_/\_\ .__/|_|  \___||___/___/
                                                                 | |                      
                                                                 |_|                      

---------------------------------
Reference application as part of the Bergler Competence Center NodeJs and Express webinar. The application is divided into two parts:

- **client** application -> written in Angular
- web **API** -> written in NodeJs and uses the express package

## Getting started

1. Open a command window in an empty folder of choice
2. Run the command: git clone https://github.com/bergler-ict/AngularNodeJsExpress.git
2. Move into the new application folder *'AngularNodeJsExpress'*
3. Change into the folder *'api'*
4. Run the command: *npm install*
5. Move into the *'AngularNodeJsExpress'* folder
6. Move into the client folder 
7. Run the command npm install

All source code and required npm packages are now installed. In the api folder there is also a folder named *sqlscripts*. Within this folder you will find two SQL scripts. The first script is to create the F1Manager database and its tables (*create_f1manager_database.sql*). The second script (*insert_data.sql*) is a data insert script which will provide a starter set of data.

9. Run the create database script on a MSSQL Server instance
10. Run the insert data script on the F1Manager database

Now you are ready to start the application. The application parts (api and frontend) needs to be started separately.

11. Move into the *api* folder
12. Run the command *start-dev.cmd* (this will build and start the NodeJs API)
13. Move into the *client* folder 
14. Run the command *start-dev.cmd* (this will build and start the Angular client)

If using Visual Studio Code you can install the 'REST Client' extension (https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

After installing this extension you can test your api with the .http files within the api\.api-test folder. See the documentation of the extension on how to create test files.

Now you are all set to go and explore NodeJs and Express. Have fun :-)

©2020 Bergler Competence Center

