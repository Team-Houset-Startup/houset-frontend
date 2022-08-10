# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Installed Library

React-router-dom (https://www.npmjs.com/package/react-router-dom)
### `npm i react-router-dom`

React-bootstrap (https://www.npmjs.com/package/react-bootstrap)
### `npm i react-bootstrap`

React-three-fiber (https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
### `npm install three @react-three/fiber`
to avoid error, install it using `--legacy-peer-deps`
full command below
### `npm install three @react-three/fiber --legacy-peer-deps`

React-cors 
### `npm install cors --save`

React-number-format (https://bestofreactjs.com/repo/s-yadav-react-number-format--react-miscellaneous)
### `npm install react-number-format --save`

## One feature in one folder

Main feature in this project is:
1. Login-register
2. Homepage
3. Canvas
4. Product
5. Transaction

The rest is sub route for each feature. `Component` and `context` is complementary for the feature and not includes feature.