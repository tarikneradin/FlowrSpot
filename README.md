This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project requirements:

#### Requirements for the project: https://docs.google.com/document/d/1xlTPRl-sDb-MbB_oeT9m3XIVbmHVOgM6trUfwM-uzP8/edit

## Project implementation:

### Application parts below are flagged like this:

- 📒 Folders
- 📑 Files

### Project arhitecture:

- 📒 src
  - 📒api
  - 📑flowers-api.js
  - 📑users-api.js
  - 📒features
    - 📒 login
      - 📒 components
        - 📑 login.jsx
      - 📒 actions
        - 📑 login-actions.js
      - 📒 reducers
        - 📑 login-reducers.js
      - 📒 constants
        - 📑 login-constants.js
      - 📒 tests
        - 📑 login.test.js
      - 📒 styles
        - 📑 login.scss
  - 📒config
    - 📑constants.js
    - 📑axios-config.js
- 📒 core
  - 📒helpers
  - 📒res
  - 📑 root-reducer.js
  - 📑 routes.js
  - 📑 store.js
  - 📑 route-with-subroutes.jsx
- 📑 package.json
- 📑 README.md

## Setting up project:

- Install dependencies:
  `npm install`

- Start project:
  `npm run start`

- Run tests:
  `npm test`

- Create a deployable build
  `npm run build`
