# Simple Messaging App

## Libraries
run "npm i" then "npm start". Below is the list of library dependencies I used for this project.
1. React Router
2. Axios
3. Styled Components
4. Yup

## Folders System
in source there is :

### 1. Components
1. Route Components
2. Styled Components
3. All other smaller child components that are fed to larger components

### 2. Design Assets

### 3. Utils
1. Context
2. Schemas
3. {...all other helper functions}

## App State Management
I am using React's context api capabilities to manage app state. I created a context and a provider. The provider provides an object that holds the "state store" and a dispatch function. The dispatch function feeds an action object to a reducer function and updates state with what the reducer returns. The state store is then accessible by all child components with the custom hook "useStore" that is the same as the useContext(StoreContext) function.



    



