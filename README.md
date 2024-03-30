# A Journal for the Whole Family!

[Link to notes.md](notes.md)

## startup specification
### Elevator Pitch
Journaling has always been hard for me, mostly because it takes so much time. Plus I doubt anyone else is every going to read what I write. What if I could solve both of those problems at once? I want to create a website where families or friends can journal together. There will be different pages for different events (say a family vacation) where people can add stories and memories. Since everyone is sharing, you don't have to write very much, and it's super easy to share with others! Both of the problems solved!

### Webpage Design
![Application Drawing](https://github.com/stamphen/startup/assets/156570548/24789051-8b40-4c53-ae4a-9e0fb66abc76)

### Key Features:
- Secure login over HTTPS
- The ability to add comments and stories to the page. 
- Displays the comments and stories others add in realtime.
- Displays who made each comment.
- Displays how many people are on the page at once. 
- Ability to change title of page and add new pages.

### Technologies:

- **HTML** - I will use HTML for the structure of the application. Will have one page for logging in and one page for adding comments. 
- **CSS** - For generally styling the application, especially separating the different comments with enough space in-between. Also to help with different screen sizes. 
- **JavaScript** - Allows users to login, displays comments. 
- **Service** - Endpoints for login, retrieving new submitted comments, retrieving past comments.
- **DB/Login** - Will store users, comments made, and titles of different pages. Credentials securey stored. 
- **WebSocket** - Whenever someone submits a comment, it will be broadcast to everyone else on the page, allowing people to have conversations and reply to each other. 
- **React** - Will use the react web framework. 


## HTML Deliverable:
I finished the structure of my web application using HTML. 
- **Pages**: I have five HTML pages, four of which can be accessed from the navigation bar. There's a login/create account page, a events page that lists all of the events (vacations, trips, get-togethers, etc.) you're a part of, a main page that lists basic info about the event and lets you make comments as well as see the comments of others, and a pictures page that lets you upload pictures and see the pictures uploaded by others. The fifth page is the event creation page and can be accessed by the button 'create new event' on the events page.
- **Links**: The login and create account buttons link to the events page. Each event listed will also be a hyperlink to the main page for that event. The create new event button on the events page links to the event_create page. After submitting the event info, the button to submit and create a new event will redirect to the main page for that new event. From the main page there is a link to the pictures page, and vice versa. The login, events, main, and pictures pages can be accessed through links in the navigation.
- **Text**: Text can be found in the event name and comments. 
- **Images**: Images will be able to be uploaded by the user when 1.) they create a new event, and 2.) when they upload an image to the pictures page of an event. 
- **Database**: (I need to recall some data stored in a database and display it.) I will store the name and password of each person, and display the name on every page except the login page. Also, the web application will automatically display the name beneath each comment submitted and picture uploaded by the user. The server will also store event info, comments made, and pictures uploaded. This data will need to be accessed and displayed repeatedly. 
- **WebSocket**: (Realtime data from the server.) This will be the comments that others make. Whenever anyone submits a comment, uploads a picture, or creates an event, the server will send that data to everyone else in realtime. This will allow conversations and quick communication to occur. 


## CSS Deliverable:
I finished applying CSS styles to my HTML web application. I think the website looks neat and pretty, and I'm happy with the result. 
- **Header/Footer/Main**- I chose to put rounded edges on all three of these elements. The header and footer and both the same blue color, and the main element is a creamish color. I think this makes the website look nicer and cleaner. Behind them all is a gray background to help the elements pop out. 
- **Fonts**- I imported a new font called Bentham in my CSS stylesheet, and I used it for all of my elements except the buttons. This is because on the buttons the Bentham font looks too small on the buttons. Any user input is also automatically in the Bentham font. I also had all the words appear in the same color.
- **Responsive Design**- I did several things to help the website work on different screen sizes. On the main.html and pics.html pages, there is a header with the event name, dates, and picture. By default, the picture floats left and the name and dates float right. I made it so if the screen size gets small enough the name and dates will appear beneath the picture. For the comments on the main.html page, I included a maximum width, so if the screen gets smaller the comments will automatically shrink. For the pictures on the pics.html page, I used a grid design, so it will display as many pictures in a row as it can, but will automatically display less if the screen size is smaller. 
- **Application elements**- I added padding and margins and flex so each element is clearly seen and looks good on the page. To have more control over this, I started by setting the default padding and margins to 0 for every element. I also worked on spacing so the login screen looks nicer, and the elements are closer together.
- **Buttons/Links**- I did some special styling for buttons and links. Both of them will change to a different color when hovered over. This makes it clear to the user that clicking the button or link will do something. For the navigation links up top, I removed the underline and spaced them out evenly.
- **Images**- I added a border to the event picture, so it stands out, and used grid styling for the pictures on the pics.html page. 

## JavaScript Deliverable:
- I have added JavaScript functionality to my startup web application.
- **Login**- I added Local Storage functions to the login, so it won't let you login or proceed to the other pages on the website unless you have a valid username and password. You need to create an account first, then your credentials will be stored. Later I will store user's credentials in a database so they can sign in on multiple computers and at different times. I also made it so the Events tab will only show if you are logged in, and the same is true of the logout button. 
- **WebSocket**- I added a JS function that regularly submits a comment, to imitate what it will be like when other users are submitting comments on their devices. It will update automatically on your device.
- **Database**- I will store user's credentials, as well as the data for each event and the comments and pictures uploaded.
- I created JavaScript functions that allow a user to upload comments and pictures, and have them immediately posted on the webpage.
- I spent a lot of time trying to get the webpage to automatically display the user's name in the top right corner, but had a lot of trouble. I was especially trying `window.onload = important_function()` but it wasn't working, so I actually have not completed that part yet, but I will do so in the next couple of days.

## Service Deliverable:
- I have successfully implemented a web server, used fetch requests, and deployed using Node.js. 
- I replaced most of the LocalStorage I was previously using with storing data on the server (i.e. variables in my index.js file.) Once we add the database I will store everything there.
- **NODE.JS/Express** - I successfully implemented node.js to deploy my server, including using express and listening on a web port. 
- **Third Party Endpoints** - There isn't really a place for third-party endpoints in my web application. I'm not sure if they're required for the final product, I might need to find a place for them. For this deliverable I used fetch calls to third-party endpoints to bring in random jokes, pictures, and names. I used this data in my function that imitates future WebSocket data (regularly adding a comment or picture.)
- **Backend Endpoints/Calling Backend Endpoints** - I created many backend endpoints by using an express Router. These include calls to receive information about login, comments, pictures, events, etc., or to post information about any of those. My frontend regularly calls the backend endpoints I created, through user input, buttons, pages loading, etc. All of these calls are made using fetch.
- **Middleware** - All of my middleware is called directly using fetch from my frontend code. I do have two class definitions in my index.js file, though. 

## Login Deliverable:
- I don't feel like I've finished all the login/database work, but I have made a ton of progress. A big reason why I haven't been able to finish yet is because I've been having issues actually getting data into the database. I will continue to work and get the needed work done within the week. 
- **MongoDB Atlas** - I have successfully created an mongodb account and a database, in which my application will store data.
- **Stores data in mongo** - My application has the code to do this, but doesn't actually do it yet due to problems with my code. I successfully added a user one time but have been unable to repeat it. 
- **Mongo Data: Credentials/Events** - I have two mongodb collections: users and events. The credentials of all users will be stored (with the passwords hashed), and all event data will also be stored. Under each users credentials it will list the names of the events they are privy to.
- **Restricts functionality** - My application successfully prevents a user from accessing any page other than the login screen unless they are logged in. My code will redirect the user back to the login screen if they happen to be on another screen. The status of whether someone is logged in or not I am storing in localStorage. Only the username will be stored there, and I will run fetch calls to the DB to retrieve more data about the user. 
- **Improving old features** - I also created two new JavaScript files and moved the `<script>` calls to different places in the html. This solved some problems I was having with JavaScript functions being called before the DOM was loaded. 

## WebSocket Deliverable:
- I implemented WebSocket in my web application. However, it did not really do anything, so I think I will need to spend more time studying web socket so I can understand it and apply it better in my web application. 
- **Completed Login/DB work** - There was a bit of login and database work I did not complete for the last deliverable. I completed that here, including successfully opening a connection with the database and fixing login problems my previous deployment had.
- **Frontend WebSocket** - When a user makes a comment, my code sends a web socket comment. 
- **Backend WebSocket Listening** - My code listens for websocket comments. 
- **Display WebSocket data** - I have not yet been able to implement this, but will do so soon. 