# notes
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


## HTML Notes/>
- Sync CSS stylesheet with `<link rel="stylesheet" type="text/css" href="styles.css" />`
- Sync Javascript file with `<script src="java.js"></script>`
(both only need to be in the `<head>` section, and you can change the file names)
- An important thing I learned is that really the purpose of different html tags is to communicate the purpose of the paragraph/title/etc. The font, size, layout, and more can be changed with CSS. So use `<h1>` if I'm writing an important heading, even if I want it to be a smaller font than `<h1>` defaults to. 
- Use the class and id attributes a lot, because they let me refer to specific sections with CSS or Javascript. 

## CSS Notes;
- When specifying the width of a container, padding, margins, etc., you can use percentages. This could be really useful when displaying on different screen sizes. 
- The parameters `max-width` and `max-height` can also be very useful with screen sizes. I'll probably use a fixed width/height, with a percentage max-width/max-height.
- When specifying margins, padding, borders the order is top, right, bottom, left. 
- Use the `float:right;` parameter (and left) to place object next to each other. Use `clear:both;` on the next item down so it won't float. 
- `text-transform` is very useful. You can use `:capitalize;`, `:uppercase;`, and `:lowercase;`, as well as some others. 
- Another cool thing I learned is `cursor: pointer;`. You could use this on a button, so the cursor changes when you hover over it. 
- You can change styles for an element with a specific class by typing `h2.top_left`, or change the styles of all tags with the same class by typing `*top_right`. You can change every element on the page by using `*`. 

## Javascript Notes{}
- Very useful to use the `onclick` attribute of a button to run a Javascript function. 
- Use `document.getElementById('chaser').innerHTML = 'new heading'` to change what the heading used to say. This could trigger off a pushed button. 
- Arrays are like Python lists. Can use `.length` for array length, `.push('new info')` to add something to the array, and more. 
- Javascript objects are like Python dictionaries. Arrays can contain objects. `let array-1 = [{'name':'John', 'age':'15'}, {'name':'George', 'age':'24'}]`
- Use `let` `const` and `var` to define variables.
- ``console.log('important info here')`` can be a very useful command for storing and accessing information like what the user input, or how the webpage is running. Use ctrl+shift+j to access the console on Chrome. 
- For and If loops are of the format ```if (condition) {do this} // for (define variable; condition; increment variable) {do this}```
- Define functions by typing `function function_name(parameters) {function code}`
