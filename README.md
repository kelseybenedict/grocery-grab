# Grocery Grab Application

## Table of Contents

- [Description](#description)
- [Badges](#badges)
- [Installation](#installation)
- [Usage](#usage)
- [Built](#built)
- [Authors](#authors)
- [License](#license)

## Description

Grocery Grab is an app that allows the user to create lists and have those lists texted to their phone.

Grocery Grab is available at the following link: [Grocery Grab](https://tranquil-bastion-55254.herokuapp.com/)

The app will ask you to either log in or create an account:

[Landing Page](./public/readme-images/landing-page.PNG)

Once the user has logged in they are able to view the lists that they have created:

[Profile page](./public/readme-images/profile-page.PNG)

At the bootom of the page is a drop down that allows the user to enter their phone number:

[Send Text Dropdown](./public/readme-images/send-text-dropdown.PNG)

Submitting a phone number sends a message to the user's phone. Also, an alert pops up alerts the user that a text has been sent:

[Text Sent Confirmation](./public/readme-images/text-sent-image.PNG)

## Badges

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Installation

Usage requires that the user simply access the application through their browser. No installation is required.

However, contributers to the ap would need to install node modules by running the command 'npm i' in the terminal and creating their own .env file to hold log in information for their chosen database and their Twilio account.

## Usage

The usage of this app is limited to people who have accounts and log into them. Creating an account is easy and free and allows the user to save their list. Although the concept centers around groceries, the app allows for any kind of list.

## Built with

We used [Handlebars](https://handlebarsjs.com/) and [Bootstrap](https://getbootstrap.com/) for the layout and design elements of this application.

We used [Node](https://nodejs.org/en/) and [Express](https://expressjs.com/) for backend developement.

We used [Twilio](https://www.twilio.com/go/twilio-brand-sales-1?utm_source=google&utm_medium=cpc&utm_term=twilio&utm_campaign=G_S_NAMER_Brand_Twilio&gclid=CjwKCAjwjuqDBhAGEiwAdX2cj-lnr5hrfRhdiC0N6zuE2csF8DCWEv1DInQo2HeoGrAwoudIlwdzgRoCjP0QAvD_BwE) for the texing feature

## Authors

This application was written/developed by [Jeff G Cameron](https://github.com/jeffgcameron), [Kelsey Benedict](https://github.com/kelseybenedict), [Lauren Penenburgh](https://github.com/lpenenburgh), and [Lasette Brown](https://github.com/LasetteBrown).

## License

Copyright 2021 LasetteBrown

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
