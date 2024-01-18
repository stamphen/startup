# A Journal for the Whole Family!

[Link to notes.md](notes.md)

## startup specification
### Elevator Pitch
```Journaling has always been hard for me, mostly because it takes so much time. Plus I doubt anyone else is every going to read what I write. What if I could solve both of those problems at once? I want to create a website where families or friends can journal together. There will be different pages for different events (say a family vacation) where people can add stories and memories. Since everyone is sharing, you don't have to write very much, and it's super easy to share with others! Both of the problems solved!```

### Webpage Design
[Description of event.pdf](https://github.com/stamphen/startup/files/13973098/Desuiption.of.event.pdf)

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
