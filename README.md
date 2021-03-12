## Run Project

### Setup a Demo Backend

if you already have Cube.js Backend up and running you can skip this step.

Let's start by setting up a database with some sample data. We'll use PostgresQL and our example  dataset for this tutorial. You can download and import it by running the following commands.

```
download file demo-small-en.zip from  https://postgrespro.com/education/demodb
$ createdb demo
$ psql demo > demo-small-en-20170815.sql
```

Cube.js uses environment variables for configuration. It uses environment variables starting with `CUBEJS_`. To configure the connection to our database, we need to specify the DB type and name. In the Cube.js project folder create the .env file with the following:

```
CUBEJS_DB_NAME=demo
CUBEJS_DB_TYPE=postgres
CUBEJS_API_SECRET=SECRET
```

### Backend run

To start frontend application use this commands

```
$ yarn
$ yarn dev
```

### Frontend run

To start frontend application use this commands

```
$ cd dashboard-app
$ yarn
$ yarn start
```
