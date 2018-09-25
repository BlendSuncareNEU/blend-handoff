# blend

This is the repository for the UI of the Blend project. This project includes the source for the frontend of the Prismic CMS hosting the Blend marketing site. With a physical product not being in development yet, the ecommerce functionality can be added using links to 3rd party suppliers (Amazon, etc.) - as needed and as able.

## Development

To get started, simply clone the repository to your local machine, run `npm install`, and then `npm start` to start the local development server. Navigating to `localhost:3000` in your browser should load the local version of Prismic.

Because Prismic only has one environment (no concept of staging), if you're making changes to an existing template, clone a page and give it a new UID before editing content so the live site is not affected.

## Project Structure

```
 blend
 |
 +--public          # static assets (images, HTML, etc)
    |  index.html
    |  favicon.ico
 +--src             # main folder for all JS in the app
 |  assets          # directory for any static assets for the site that won't be updated by the client and used for JS
 |  containers      # Scout's default prettier config
 |  styles          # self explanatory - you can use SCSS here!
 |  prismic         # files dealing with prismic connection
```
