# ECommerce325
#### Table of contents

1. [Project Task](#project-task)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
4. [Installation Instructions](#installation-instruction)
5. [Test Instructions](#test-instruction)
6. [Usage Information](#usage-information)
7. [Contributor Guidelines](#contributor-guidelines)
8. [Mock Up](#mock-up)
9. [Video Link](#video-link)
10. [License](#license)
11. [Questions](#questions)

## Project Task

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria being met. You’ll need to submit a link to the video and add it to the readme of your project.
## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```


## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Installation Instructions

To install necessary dependencies, run the following command:

    * npm i

This app comes with a .env file which you should edit to reflect your personal/local database credentials and save. 
Then, to recreate the sample database on your local instance of mysql, run ./db/schema.sql which will create the necessary ecommerce_db in mysql for you. 
Finally, to seed the database with sample data, run:

    * node seeds/index.js

## Test Instructions

    * node server

## Usage Information

* N/A
    
## Contributor Guidlines

* Contributions are always welcome! (Please fork and pull request only.)

## Mock-Up

 ![image](https://user-images.githubusercontent.com/40922162/116176791-60ac8d80-a6d8-11eb-9e57-17698894a28e.png)

## Video-Link


## License 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.
    
## Questions
Email me at cesarorlandocampos@gmail.com
Find me on GitHub [CesarOCampos](http://github.com/CesarOCampos)
