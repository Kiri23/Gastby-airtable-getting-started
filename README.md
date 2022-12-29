<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's Airtable starter
</h1>
This project uses Gatsby and the Airtable API to create a dynamic website that displays data stored in an Airtable database. The application connects to Airtable via a Personal Acces Token (pat) and uses GraphQL to retrieve and display the data on the page.

The project includes a home page that displays a list of records from the database, and a detail page to show detailed information for each record.

This project is a good option for those who want to create a dynamic website that quickly and easily displays Airtable data. I hope you enjoy using it!

To make a request to Airtable use this curl 
```
 curl https://api.airtable.com/v0/appfKQVIhN77yudQ5/Table%201 \
-H "Authorization: Bearer apikey"
```
This will only work for a specific airtable database 

_Have another more specific idea? Send me a email at christian_nogueras94@hotmail.com_

## Requirements 
To make this project work properly, you need to include an environment file (`.env`). This file should be located in the root of the project and should contain your Airtable API key, which will be used to connect to the database.

To create the `.env` file, simply create a new file in the root of the project with the name `.env` and add your Airtable API key like this:

```
API_KEY=my-api-key
```

Make sure to keep the `.env` file secret and do not include it in your version control. This way, you can use this project without worrying about sharing your API keys with others.

This project uses the `dotenv` [package](https://www.npmjs.com/package/dotenv) to load the environment variables from the .env file. To use it, you need to install dotenv as a dependency of your project:

```
npm install dotenv
```

Then, in your Gatsby configuration file (usually `gatsby-config.js`), you can import the `dotenv` module and call the `config()` function to load the environment variables from the `.env` file:

```
require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-some-api`,
      options: {
        apiKey: process.env.API_KEY,
      },
    },
  ],
}
```
I hope this helps you understand how to use the `.env` file and the `dotenv` package in this project. If you have any questions or need more information, please don't hesitate to ask. Good luck with your project!


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a typical Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/products/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

<!-- AUTO-GENERATED-CONTENT:END -->
