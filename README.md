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
2. Form Schemas
3. {...all other helper functions}

## App State Management
I am using React's context api capabilities to manage app state. I created a context and a provider. The provider provides an object that holds the "state store" and a dispatch function. The dispatch function feeds an action object to a reducer function and updates state with what the reducer returns. The state store is then accessible by all child components with the custom hook "useStore" that is the same as the useContext(StoreContext) function. The store holds 4 slices of state. 
1. folders {object with 2 arrays}
2. reply null or {message object}
3. error (bool)
4. error_message 'string'

The Provider makes a 1 time GET request to the API server and sets the returned data to state in th "folders" slice of state which holds 2 arrays(inbox and sent) that hold message objects. The "reply" slice of state is initialized null and is used when the user hits the reply button: it sets the given message to state, reroutes the user to the compose-new-message route, and auto-fills the title and recipient fields. The error slice of state is a boolean used to error handle server requests and render them to the UI. When there is a faulty request: the error value will be set to 'true' and an ERROR component will render an error message. 

As stated earlier the Provider makes a 1 time GET request to the API to collect all the messages. The app then uses conditional routing to render individual messages by cross checking the url :id params with the message id and filters the correct message out of the messages array.  This is all done in order to minimize server traffic and needless GET requests to the api.



    



