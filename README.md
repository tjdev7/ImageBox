
<div class="READMEstyle" text-aling="center">

    ![App logo](./public/img/ImageBox_logo.svg)

</div>

# ImageBox

An image search engine web app created in React. Uses the Unsplash API to search for pictures and React for its Front End framework. Also uses TravisCI and CircleCI for CD/CI tests

## App in action / example:

![App splashpage](./public/img/Imagebox_GIF_example.gif)

## Git Repo guide

- [How to use](#how-to-use)
- [Resources used](#resources-used)
- [Testing tools used for the app](#testing-tools-used-for-the-app)
- [Running automated tests](#running-automated-tests)
- [Project resources](#project-resources)
- [Completed tasks](#completed-tasks)
- [Future app tasks](#future-app-tasks)

## How to use:

1. Clone repo into desired directory `git clone https://github.com/tjdev7/ImageBox.git` or `gh repo clone tjdev7/ImageBox`
2. Run `npm install` in your terminal to install all app node modules, yarn packages and dependencies
3. Sign up to Unsplash's API service, register your application and get your API key for the app
4. Add your personal API key to ```const APIkey``` inside the ```/src/components/SearchBar.js``` file
5. Run `yarn start` in your preferred terminal app to run the app on a local server

## Resources used: 

- Unsplash's API for pictures
- React as the Front End Framework
- Prettier and ESLint for code formatting
- Cypress and Lighthouse for testing

## Testing tools used for the app:

-   React Testing library and Jest for testing components
-   TravisCI and CircleCI for CI/CD development
-   Prettier and ESlint for keeping all code formatted and organized

### Running automated tests:

- ```npm run linterclean``` to run Prettier tests
- ```npm run jesttests``` to run Jest tests
- ```npm run test``` to run local React testing library tests
- ```npm run litereport``` to run local Lighthouse tests
- ```npm run fullaudits``` to update local components and review if any packages are outdated

### Completed app tasks:

- [x] Update UI design for app
- [x] Complete Unsplash picture API intergration 
- [x] Make all UI components align responsively to any device (Desktop, smart phones, tablets)

### Future app tasks:

- [ ] Add a preloader svg to the search engine app
- [ ] Make all UI elements inside the app act responsively to any device (Desktop, smart phones, tablets)
- [ ] Add a 404 error / search results not found page 
- [ ] Increase current app's API request limit per hour from 50 hits to 5,000 hits