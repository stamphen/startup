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
I finished applying CSS styles to my HTML web application
- **Pages**: I only have one CSS page, which is linked in each of my HTML pages.
- 
