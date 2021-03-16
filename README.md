Desc:  Mongo, Express, React CRUD App
A project bootstrapped with Create React App.  
A separate react frontend running on 3000.  Code is in root/src and root/build
A separate express backend  running on 8080.  Code is in root/server
Basic CRUD methods against a Mongo DB

GUI Desc: In header shows Mongo, Express, React CRUD App.  In nav, can click  on "Project List" which shows a list of projects. Can add a new project, delete a project and edit a project

To spin up: Open up two terminals.  In right terminal type npm run server.  In left terminal type npm start.  Interact with localhost:3000 which is the react app.  In the background it will make CRUD api calls to the server running on 8080.  There's a proxy set in package.json the api calls get automatically sent to 8080.  

DB: Mongo DB titled projectsminidb.  Contains only one Mongo table

Origin:  The readme contains a full log of how to build it.  Created from scratch with npx create-react-app my-app, added express, 

# react_helloworld

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

--------------------------------

BUILD LOG
A lot of this build process is from: https://dev.to/loujaybee/using-create-react-app-with-express

1) Create an empty github repo  react_helloworld

2) Following directions at https://reactjs.org/docs/create-a-new-react-app.html:
    >npx create-react-app my-app
    >cd my-app
    >npm start
    In browser go to localhost:3000

    A note on how it works:
        server.js 's static folder is static/build/index.html
            which is built from public/index.html
                which has <div id="root"></div>
                    which is associated with src/index.j
                        which has: ReactDOM.render( <React.StrictMode> <App /> </React.StrictMode>,document.getElementById('root'));
                            which maps to src/App.js
                            
3) Create an environment variable
    a) Create an .env file inside of which is:
    REACT_APP_SERVER_URL=http://localhost:8080
    b) Modify App.js by adding {process.env.REACT_APP_SERVER_URL}
    c) >npm start
    d) In browser go to localhost:3000 and see the enviroment var in the main page

4) Added src/component/Main.js
   Modified App.css

5) Added Some Simple Routing
   a) >npm install react-router-dom

6) Installed express
  a) >npm install express --save (look at package.json)
  b) add server.js file 
  c) >node server.js  (while no index page loads, you can test the ping route)
  d) In a browser notice what is returned from 8080/ping

7) Create a build folder of the front end
  a) > npm run build (note how a build folder is created)
  b) Restart node with
     >node server.js
  c)Note how the front end index page is now served up on 8080

8) Install nodemon
    a) npm install nodemon --save
    b)  Add the following to package.json:
        (see: https://stackoverflow.com/questions/40359590/nodemon-command-is-not-recognized-in-terminal-for-node-js-server )
        "scripts": {
            "serve": "nodemon server.js"
        },
    c) Test the server by running
        >npm run serve
    d) In server.js change pong to PONG and w/o stopping server observe
       change by requesting 8080/ping (returns "PONG")

9) Open up two terminals
    a) In the left terminal >npm start
    b) In the right >npm run serve

10) Test API call
    a)Add button and API call to 'api/test' in App.js
    b) In localhost:3000 try button
    c) In Dev Tools Network tab notice that request goes to :3000
    and returns wrong info
    d) add "proxy": "http://localhost:8080", to package.json
    e) >npm start
    f) Try Test API button again in GUI at localhost:3000
    g) Notice that while api request still goes to :3000, the response
    {"sender":"Joe","writing":"Roses are red...."} is returned from server

11) Now I can develop front end on 3000 while still making API calls to
server running on 8080
    Note that there's an alternative way to do this:
    a)>npm install CORS
    b)In server.js uncomment CORS lines
    c)In App.js change fetch so that instead of:
        fetch('api/test', {
            have:
        let reqURL = {process.env.REACT_APP_SERVER_URL} + 'api/test'
        fetch(reqURL, {




12) Install Mongo and create a db and a collection
a)Use the shell to create a db called "projectsdb"
b)Create a collection called "projects" (plural)
c)Insert some records into the collection  (here's one):
 db.projects.insertOne(   
    {
      "id": 70,
      "title": "Amet consectetur adipisicing elit",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa error maxime alias id quisquam, quos commodi! Ex minus, molestias explicabo exercitationem ea voluptatum, itaque ipsum quos doloribus id quae?",
      "creator": "Mark Smith",
      "type": "static",
      "status": "in-progress",
      "progress": 85,
      "beginDate": new Date("2009-05-07"),
      "finishDate": new Date("2010-05-07"),
      "added_at": new Date("1990-05-07"),
      "updated_at": new Date("2020-05-07"),
      "create_by": ""
    }
     )

13) Install Mongoose
>npm install mongoose

14) Allow node.js to run ES6 syntax like import(we are going to
use import and export in node.js so we need to use babel to do the
translation)
a)npm install @babel/node --save
b)create .babelrc file
c)in package.json modify 
    "serve": "nodemon server.js"
    to:
    "server": "nodemon server.js --exec babel-node"
d) so now when you do > npm run server it will run the bable translator too
   allowing ES6 syntax like import to work.

15) Modify server.js
a)import Mongoose 
b)import connect.js
c)connect to db
d)import routes
e)Create these folders files:
/src/server/config/db/connect.js
/src/server/config/routes.js
/src/server/controllers/projects.js
/src/server/models/project.js
f)All of the above create a new api route called http://localhost:8080/api/projects

16) Test API call
a)Spin up server again.  Since in step 13 I modified package.json the new command is:
>npm run server
b) Request http://localhost:8080/api/projects
c) The browser will return some json

17) Test it temporarily by changing test API call to
api/projects
a) in projects.js change findOne to find to return an
array

Commit name: Testing api/projects

18) Refactoring
a) Reverted api/projects to api/test
b) Moved folder src/server to root/server
c) Edited paths in server.js

19) Add state and render testAPI in GUI
a)imported useState and createContext to App.js and
added associated code to display projects
b)Changed objects sent back from server from testAPI
c)Test the changes by clicking on testAPI.  Notice
that the data is displayed in the GUI

Display testAPI data in Gui using useState

20) Demo useEffect.  
a) take out testapi button
b) just allow fetch to load when component loads
c) Notice that the fetch works and the data is displayed.
But the fetch is called over and over again.  To stop that loop
wrap the fetch in the useeffect code.
d) See also: https://stackoverflow.com/questions/62050966/how-to-fetch-data-without-useeffect-hooks-in-react-function-component
e) restart the client side code (npm start) becuz i noticed
a proxy error unless I did so
f) now go to localhost:3000 and observe that server data is
rendered but the fetch isn't called over and over again

21) Render projects in app.js two ways and also pass it down
to main.js
a) Render using map in app.js
b) Render using call to function in app.js
c) Render in main.js

22) Added client side delete using useContext and filter
a) Show how it works.  But how it doesn't persist when client is refreshed.

23) Add delete api on backend.  Test it client side
a) Add route server side in server/config/routes.js
b) Add controller
c) Add test fetch in client to test it
d) test the call (notice that when u refresh 3000 one less proj shows up 
in list)

24) Added other CRUD methods that update backend.  But they are crude:
They don't update the front end.
POST and PUT info isn't sent yet to server 

25) Interlude (can be done earlier)
a) Notice that when you go to localhost:8080 it's serving up old
content.  This is because npm run build hasn't been executed in a while.  So rerun it.
b) Look again at localhost:8080 and confirm its now up to date.

26) Added form for updating and adding project
a) added components/ProjectForm
b) to link to new form from ProjectList used useHistory from ReactRouter
c) in new componment used useParams to get id
d) using id can either populate form or leave it blank
d) based on whether id is present or not changed url of fetch
e) fetch would not compose url correctly until <base href="/"> added
to public/index.html
f) had to change routing order in App.js for update form to display
(originally only new project would display) 
g) made adjustments server side so that controllers could get post
and put data (had to add  app.use(express.json()); ).

27) Updating backend also updates frontend / new db
a) Added onChange event to update project obj anytime form is changed
b) Changed controllers in backend to return proj _id
c) Using a and b updated state in fetch promise
d) used history to go from form back to project list 
e) created new db in mongo called "projectsminidb"
e) Switched front end to projectsminidb.  this involved changes in
model, and change in server.js to point to new db.  
f) Note that there's no need to use mongo to create initial records.
they can all be created client side.