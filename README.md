# Powerpuff RTL

## Objective

The goal on this project is to consume the [TV Maze](http://www.tvmaze.com/api) to display the TV Show "Powerpuff Girls" and an episode detail page with information about specific episodes.

The TV show page should at least display the following information (you're free to add more):
• Show title
• Show Description
• Show cover image
• Episode list. Every episode in the list should link to a details page for that specific episode
The episode detail page should contain at least:
• Episode title
• Episode Summary
• Episode cover image

## Setup

After cloning the repository you have to run `yarn` for the installation of the dependencies.

## Start

The project can be started by running `yarn start`

## Test

Since I focus in the goal my intention is to add testing to the next iteration

## Decisions made

For a quick setup of the project I decided to go for the boilerplate recommended by `Facebook`, [`create-react-app`](https://create-react-app.dev/) - as was recommended in the assignment. I think that is a good way to have a project up and running without having to stay busy with the webpack configuration (Typescript, babel, etc.).

To manage the state of the application I used what was suggested by the assessment wich was Redux.
After the hooks [`introduction in React 16.8`](https://reactjs.org/docs/hooks-intro.html) Redux has changed the way to implement and interact with React by the introduction of [`Redux toolkit`](https://redux-toolkit.js.org/) which brings some changes on how reducers are now being created and configured.

As a personal preference I would have rather use React Context for the state management.

As an improvement to save some request I would have been better to consume this resource `https://api.tvmaze.com/shows/1?embed=episodes` which includes also the episodes saving the need to make two API calls.
