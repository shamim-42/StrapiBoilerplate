# Strapi application

## Demo .env

```
NODE_ENV=production
PORT=5555
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_NAME=strapi_database
DATABASE_USERNAME=root
DATABASE_PASSWORD=password
DATABASE_SSL=false
```

## How to start

1. Clone the project in your local directory
2. Create an `.env` file in the root directory and write the variables as mentioned above
3. Create a database in your database server with the same name you wrote in .env
4. Now time to run the project:

|Development mode  |Production mode  |
|---------|---------|
| 1. Set `NODE_ENV=development` in `.env`| 1. Set `NODE_ENV=production` in `.env` |
| 2. Run `sudo npm run develop`     | 2. Run `sudo npm run start`         |
| 3. If you want to keep the app running in background as process then start it with this command instead following point number 2.  <br> Run `sudo pm2 start npm --name "GIVE_A_NAME_YOU_LIKE" -- run develop` <br> (`pm2` must have to be installed) | 3. If you want to keep the app running in background as process then start it with this command instead following point number 2.  <br> Run `sudo pm2 start npm --name "GIVE_A_NAME_YOU_LIKE" -- run start` <br> (`pm2` must have to be installed)    |
