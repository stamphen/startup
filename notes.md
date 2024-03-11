# notes
***Startup Application URL -->*** <url>https://familyjournal.click</url><br/>
***Startup URL -->*** <url>https://startup.familyjournal.click</url><br />
***Simon URL -->*** <url>https://simon.familyjournal.click</url><br />

## List of helpful Git functions:
- `git init` (create git repository in the directory you're in)
- `git clone` url (copy url from github, creates a repository in the directory that is linked to the one on github)
- `git pull` (pulls changes from github, can us `git fetch` to link github without changing anything)
+ `git push` (pushes local changes up to the github repository)
- `git add` (stages a change, ready to be committed)
- `git add .` (stages all changes)
- `git commit` ([-m] to write a message [-am] to write message and not have to stage changes)
- `git status` (checks how everything is going, and gives you info)
- `git checkout` [branch] (lets you work on different branches -- this has been really confusing to me, and I need to work on it)

## EC2/Route 53
Public (elastic) IP address: *http://54.81.112.52/*<br>
To enter the server from PowerShell, run `ssh -i [key pair file] ubuntu@[ip address]` (key pair is essentially a password to let me access the server, and it is stored in a file.)
- Started an instance with AWS (Amazon Web Services) and its service EC2, which is where I got the elastic IP. I should eventually be able to store the code I write on the server. 
- I registered a domain name for my web page (familyjournal.click) on AWS's service Route 53. Then I created a record to map the domain name to my public IP address. It works with familyjournal.click and *.familyjournal.click (anything before the familyjournal still works.)<br><p>
I also wanted to include a graphic from the class notes that illustrated how the different parts of the web work together in what is called a 'Technology Stack.' I need to become more familiar with how this all works. </p>
![tech_stack](https://github.com/stamphen/startup/assets/156570548/defc73e8-378c-4608-9ef5-73689f1ad19f)

## Caddy and web certificates
-  Caddy is like an intermediary between the user and the website. When a user tries to access your site, Caddy is what provides the files I've created (html, css, javascript) and shows them to the user. 
- Web certificates make sure that connections are secure. Without a secure connection, someone else could pick up all of the data transmitted in either direction. A web certificate certifies that the connection is secure. Caddy does this automatically, but I did need to change one of the caddy files to add in my domain name.
- Console command to 'shell into' my server: `ssh -i [key pair file] ubuntu@familyjournal.click`. I then entered 
```
➜  cd ~
➜  vi Caddyfile
```
to edit the file. I changed the :80 and [yourdomainnamehere] portions to my domain name, then entered `:wq` in the bottom to save the file. 
- I then had to restart the Caddy file by entering `sudo service caddy restart`. I am quite unfamiliar with all of these commands and web programming jargon, but I know that `sudo` essentially tells the console that you are operating as an administrator. 
- HTTP stands for HyperText Transport Protocol. 
- HTTPS stands for Secure HyperText Transport Protocol. 

## Console
- `CTRL-C` - kills the currently running command. (this could be super useful if a command is taking a really long time or I changed my mind about something)
### Commands:
- `sudo` - tells the console I'm an administrator
- `pwd` (**p**resent **w**orking **d**irectory) - tells me where I am right now, the full file path
- `ls` - will list all the files in the current directory (will list all files-even hidden ones-in a long format is you type `ls -la`)
- `echo` - outputs the parameters of the command. So `echo hello` should output `hello`
- `cd` - change directory. (I already know this one, can use `cd ..` to move up a directory)
- `mkdir` - make a directory
- `rmdir` - remove directory
- `rm` - remove file(s)
- `mv` - move file(s)
- `cp` - copy file(s)
- `ls` - list files
- `find` - find files
- `top` - view currently running processes with CPU and memory usage. (this sounds like it could be useful)
- `cat` - output the contents of a file. (so if a text file says 'byu programming' you could type `cat text.txt` and it would output `byu programming`)
- `wc` - count words in a file
- `ps` - view currently running processes
- `kill` - kill a currently running process
- `sudo` - execute a command as an administrator
- `ssh` - create a secure shell on a remote computer
- `history` - show the history of commands
- `ping` - Check is a website is up
- `tracert` - Trace connections to a website
- `dig` - show DNS info for a domain
- `man` - look up a command in the manual
### Special Characters:
- `|` - Links the output of command on left to input of command on right
- `>` - Redirect output to a file. If there is no such file, it creates it. If there is a file, it replaces whatever was there before with the new data.
- `>>` - Redirects output to a file, but does not overwrite the file, but adds to it. 

## Uploading files to my webpage:
- I just uploaded the HTML for the simon application to <url>https://simon.familyjournal.click</url>. I did this by running `./deployFiles.sh -k [key pair file] -h familyjournal.click -s simon`. The deployFiles.sh file essentially tells the console what to do. It deletes any previous simon files, then creates a new directory and copies all of the simon files. I also copied the deployFiles.sh file to my startup repository, so I can use it when I start uploading my own files. 
- I was able to also upload my startup repository using essentially the same command: `./deployFiles.sh -k [key pair file] -h familyjournal.click -s startup`.  

## <startup html="notes" />
- Sync CSS stylesheet with `<link rel="stylesheet" type="text/css" href="styles.css" />`
- Sync Javascript file with `<script src="java.js"></script>`
(both only need to be in the `<head>` section, and you can change the file names)
- An important thing I learned is that really the purpose of different html tags is to communicate the purpose of the paragraph/title/etc. The font, size, layout, and more can be changed with CSS. So use `<h1>` if I'm writing an important heading, even if I want it to be a smaller font than `<h1>` defaults to. 
- Use the class and id attributes a lot, because they let me refer to specific sections with CSS or Javascript. 
- To get a link to a file (audio, video, etc.), I can upload it to my GitHub repository, go to the file, copy the permalink, and then add `?raw=true` to the end. 
- `<body>` is divided into three sections: `<header>` `<main>`, and `<footer>`. Within these sections we can have smaller `<section>` groups or use `<nav>` to go to different places. Within sections we can use smaller blocks `<div>` to organize the webpage. Also use `<aside>` for comments that do not match the flow of information. 
- Use `<form>` for all user input. It's very helpful to organize the webpage into what is happening where. 

## HTML Deliverable />
- This is super exciting!! I have mostly finished the HTML pages for my HTML deliverable.
- I will have five HTML pages, four of which will be in the navigation bar. These are index.html (login), main.html (where each event and its comments are displayed), pics.html (where you can upload pictures to the event), events.html (where you can see, change between, and add events), and event_create.html (not visible, is the page where you actually create the events.) 
- I will use javascript for the login/creating account, and for creating new events, making comments, etc.
- I'm going to need to store users credentials (will need to check whether their credentials are stored, or if they're creating an account, will need to check that the same name is not already being used)
- Will need to store the name, pic, dates, and members of each event, as well as all of the comments made, who made each comment, and in what order.
- Will need to store the list of events that each person has access to, so they can always access their events and no one else's.
- I need to store the person's name (username) so that I can automatically add it to each of their comments and image uploads. 
- Everytime someone submits a comment or uploads an image or creates a new event, the comment and picture lists will update. 

## startup {notes:css;}
- When specifying the width of a container, padding, margins, etc., you can use percentages. This could be really useful when displaying on different screen sizes. 
- The parameters `max-width` and `max-height` can also be very useful with screen sizes. I'll probably use a fixed width/height, with a percentage max-width/max-height.
- When specifying margins, padding, borders the order is top, right, bottom, left. 
- Use the `float:right;` parameter (and left) to place object next to each other. Use `clear:both;` on the next item down so it won't float. 
- `text-transform` is very useful. You can use `:capitalize;`, `:uppercase;`, and `:lowercase;`, as well as some others. 
- Another cool thing I learned is `cursor: pointer;`. You could use this on a button, so the cursor changes when you hover over it. 
- You can change styles for an element with a specific class by typing `h2.top_left`, or change the styles of all tags with the same class by typing `*top_right`. You can change every element on the page by using `*`.
- Using classes to shorter the CSS code can be very helpful, then refer to the classes in the html code. This way you don't have to specify every CSS property for every element. It makes CSS shorter and more organized.

## CSS Deliverable ;
- I added pretty styling to all of my html pages, including rounded corners for the header, main, and footer. Headers and footers are blue, main is a light creamish color, and the background of all the elements is a gray.
- On the main and pictures pages, I have a "header" with the event name, dates, and picture. I formatted it so the picture is to the left of the event name and dates, but it will switch to have the picture on top if the screen width is small enough.
- I used @font-face to upload a font named Bentham to use throughout my website.
- Used button:hover to change button color when hovered over. Also used a:hover to change the background color of links.

## startup.javascript(notes)
- Very useful to use the `onclick` attribute of a button to run a Javascript function. 
- Use `document.getElementById('chaser').innerHTML = 'new heading'` to change what the heading used to say. This could trigger off a pushed button. 
- Arrays are like Python lists. Can use `.length` for array length, `.push('new info')` to add something to the array, and more. 
- Javascript objects are like Python dictionaries. Arrays can contain objects. `let array-1 = [{'name':'John', 'age':'15'}, {'name':'George', 'age':'24'}]`
- Use `let` `const` and `var` to define variables.
- ``console.log('important info here')`` can be a very useful command for storing and accessing information like what the user input, or how the webpage is running. Use ctrl+shift+j to access the console on Chrome. 
- For and If loops are of the format ```if (condition) {do this} // for (define variable; condition; increment variable) {do this}```
- Define functions by typing `function function_name(parameters) {function code}`
- You can create if/else if loops. Of form
```
if (condition) {
  do this
} else if (condition) {
  do this
}
```
- You can shorten the if/else loops by typing: `condition ? action-if-true : action-if-not-true;`
- Boolean operators for if/for loops include `&&`(and), `||`(or), and `!`(not)
- Can use different kinds of loops, such as while, do/while, for a in _, for b of _, as well as use continue/break to interrupt the loop if a certain condition is met.
- There are several ways to manipulate strings in JavaScript, including: `length`- returns the number of characters in the string, `indexOf()`- returns the starting index of the substring inside the parenthesis (if the string h is 'hello', then the function `h.indexOf('lo')` will return 3, the index of the l), `split()`- splits the string into an array (python list) divided along the the given index (so `h.split(2)` would return `['he','lo']`, `startsWith()`- return True if the string does start with what you claim, False if it doesn't (`h.startsWith('he')` would return True), `endsWith()`- does the same thing but for the ending of the string, `toLowerCase()`- converts all characters to lowercase.
- You can use the arrow function (`=>`) instead of `function`. For example, `(parameters) => output`. You can also use curly brackets and it will act like a normal function. (`(parameters) => {do this}`).
- You can listen for many different web events. For example:
```
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
  });
```
- This will search the document for the element which has the id of submitData, then listen for when that element is 'clicked', then log the event name (click in this case) in the console.
- The events you can listen for include: click, keypress, scroll, text selection, clipboard events (copy, paste, etc.), and many more. A full list is shown [here](https://developer.mozilla.org/en-US/docs/Web/Events)
- You can create HTML elements and add them as child elements of existing HTML. This will be super useful if I need to create a new element to store additional comments made on my familyjournal page. You can then add it to `<main id="mainthing">`:
```
const divElement = document.createElement("div");
const main = document.getElementById("mainthing");
main.appendChild(divElement);
```
- You can also add classes to elements, so they're affected by CSS. For example: `main.classList.add("flexrowcent")`
- Delete children of an element by using: `div.removeChild(div.firstChild)` (presumably you could also just type in the name or id of the child)
- Using `div.innerHTML` you can replace whatever was contained in the div with whatever you want. This can potentially leave your website open to hackers though, so it should probably be minimized.
- Can use `new Promise((resolve,reject) => {})` and `async function func_name() {}` to execute things asynchronously. So you can run the function alongside everything else running on the server.

## JavaScript Deliverable {}
- Added functions to add comments and pictures on main.html and pics.html
- Used LocalStorage to store name of the user and display it on the page
- Used LocalStorage to check if a user is logged in, and hide or display the Events tab and the logout button
- Used a `SetInterval` function to replicate WebSocket data coming from other users on the server.

## require('Service Notes')
- Use to handle HTTP/HTTPS requests to your server, and provide responses.
- Use `fetch` to make requests from a web server. This can be a public API (Application Programming Interface), a call to a web server you created, or eventually, a call to a database (to retrieve or upload information.)
- Fetch calls are of the format: `fetch('https://fakeurl.com', {method:"POST"})`. The method object is optional, and I believe without the method specified it defaults to GET. 
- Fetch always returns a Promise, so can use `async function func_name() {await fetch('url')}`, or `.then( (response) => {do_something} )`. Usually we want to call the `.json()` method on what fetch returns to let us deal with the data better.
- Allow Node.js to serve up my code by running `npm init -y` and then `npm install express` in the console. We can then use a JavaScript file (index.js) to serve up the rest of our files. It should contain the following:
```
// Make sure express module is loaded
const express = require('express')
const app = express()

// We put our web files in a folder name public, so this serves up our static files. use() is similar to POST, GET, etc., and you can also call post(), get(), delete().
app.use(express.json()); 
app.use(express.static('public'));

// Find the port and serve up the web server (can also use a function or something else to change the port)
port = 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
```
- To actually run the code, enter `node index.js` in the console, while in the right pwd. Then navigate to <url>http://localhost:3000</url>. Using https:// doesn't work.
- I'm changing the `setInterval(() => {}, time)` function so that it will fetch a public joke API, and paste that text into the comment box. Eventually this will be realtime content from other users. 
