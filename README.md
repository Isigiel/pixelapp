# A pixel a day

A simple webapp to track your mood during the year, one pixel per day. [Check it out](https://pixelday.app/)  
The idea is based on the popular [_Year in pixels_](https://bulletjournal.com/blogs/bulletjournalist/deep-dive-year-in-pixels) conept you can read about

**The following is mainly interesting for developers, if you just want to use the app go [here](https://pixelday.app/)**


## Tech Stack

This app is an angular 7+ app with angular material. Currently it only uses the localstorage to save data but more ideas are under consideration. It is deliberately simple to achive the minimal functiojnality first.

## Running locally

Clone this repo and run `yarn install` in the repository.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Building the production version

To build the project use `npm run build`, this will build the project in both german and english and will place the compiled output in `dist/pixelday/de` and `dist/pixelday/en` respectively.

## Running tests

**Tests are currently not implemented but are a priority**
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Contribute

I always appreciate ideas for new features/visualizations and bug reports, just open an issue and write about it.

## Roadmap

Things I want ot have:
+ Tests
+ A widescreen layout
+ Notifications to remeber the user about adding the day
+ Other ways of displaying the data
+ More ways to keep infos about the day

Stuff I'm thinking about:
+ Add special events to certain days
+ Allow the a free text to be added to every day
+ Add online synchronistaion between multiple devices
