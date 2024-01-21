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


### EC2 Web Server
>Public (elastic) IP address: *http://54.81.112.52/*<br>>
To enter the server from PowerShell, run `ssh -i [key pair file] ubuntu@[ip address]` (key pair is essentially a password to let me access the server, and it is stored in a file.)
- Started an instance with AWS (Amazon Web Services) and its service EC2, which is where I got the elastic IP. I should eventually be able to store the code I write on the server. 
- I purchased a domain name for my web page (familyjournal.click) on AWS's service Route 53. Currently working on connecting it with the IP I have. Then it should be able to be used to access the webpage.
I also wanted to include a graphic from the class notes that illustrated how the different parts of the web work together in what is called a 'Technology Stack.' I need to become more familiar with how this all works. 
![tech_stack](https://github.com/stamphen/startup/assets/156570548/defc73e8-378c-4608-9ef5-73689f1ad19f)


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
