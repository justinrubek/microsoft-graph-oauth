# Express-ADFS-OAuth
This is a basic example of how to use OAuth to connect
to the Microsoft Graph API

## Usage
First, register with Microsoft to get an API key/password
through the [Azure Portal](https://aad.portal.azure.com/).
Then modify the contents of `server/.env` to contain
have the proper APP_ID and APP_PASSWORD.

Install the dependencies, build the app, and run the server.
Using yarn (from the server directory):

```
yarn install
yarn build
yarn start
```
