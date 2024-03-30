// Function to list the events the current user is a member of
async function event_list() {
    try {
        cur_uz = localStorage.getItem("user");
        console.log("local storage ok")
        const response = await fetch('/narcissism/listEv', {
            method:'POST', 
            headers: {'content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({user: cur_uz})
        }); 
        console.log("fetch ok")
        console.log(response)
        const data = await response.json();
        
    
        console.log("event_list is: ",data);    
    } catch {
        console.log('not logd')
    }
}

// These functions will only be called in the web console to help with debugging
function clear() {
    localStorage.clear()
}
function del() {
    fetch('/narcissism/dl', {
        method: 'DELETE'
    })
}


// Event interaction functions
function comment(comm=12,aut=14,rep="ut") {
    
    // Create new element, get value of input, append elem to existing <div>
    const neww_commment = document.getElementById("new_comment");
    const nw_cmnt = document.createElement("div");    
    const parag = document.createElement("p");
    const name_span = document.createElement("span");
    parag.append(document.createElement("br"));
    nw_cmnt.appendChild(parag);
    const user_name = document.getElementById("user_name");
    const old_comments = document.getElementById("comments_old");
    old_comments.appendChild(nw_cmnt);
    old_comments.appendChild(document.createElement('hr'));

    // Find if the function was called with parameters
    if (comm!=12 && aut!=14) {
        com_val = comm;
        aut_val = aut;
    } else {
        com_val = neww_commment.value;
        aut_val = user_name.innerText;
    }

    const comment_input = document.createTextNode(com_val);
    parag.appendChild(comment_input);
    const span_txt = document.createTextNode("-"+aut_val);
    name_span.appendChild(span_txt);
    nw_cmnt.appendChild(name_span);

    // Create comment object
    const new_comm = {
        text: com_val,
        author: aut_val
    }

    // Find if the function was called from page loading. If so,
    // do not submit post requests
    if (rep!="repeated") {
        // POST comment object with fetch
        fetch('/narcissism/comment', {
            method:'POST', 
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(new_comm)
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }   
}
function main_comments() {
    fetch('/narcissism/comments')
        .then((response) => response.json())
        .then((data) => {
            for (let i=0; i<data.length; i++) {
                comment(data[i]['text'], data[i]['author'], "repeated");
            }
        });        
}
function submit_pic(file=12345,aut=15,rep="ut") {
    
    // Create new element, get value of img file, append elem to existing <div>
    const new_pic = document.getElementById("picture");
    const old_pics = document.getElementById("pictures_old");
    const pic_div = document.createElement("div");
    const pic_img = document.createElement("img");
    const pic_name = document.createElement("span");
    old_pics.appendChild(pic_div);
    pic_div.appendChild(pic_img);
    pic_div.appendChild(pic_name);
    pic_div.classList.add("flexcolumncent");
    const user_name = document.getElementById("user_name");
    
    // Create new URL if file, otherwise don't
    if (file != 12345) {
        pic_url = file;
    } else {
        pic_file = new_pic.files[0];
        pic_url = URL.createObjectURL(pic_file);
    }

    // If called with parameters
    if (file!=12345 && aut!=15) {
        urlpic = file;
        autpic = aut;
    } else {
        urlpic = pic_url
        autpic = user_name.innerText
    }

    // Create picture object
    const new_picc = {
        url: urlpic,
        author: autpic
    }
    
    // If called by main_photography(), don't POST
    if (rep!="repeated") {
        // POST picture object with fetch
        fetch('/narcissism/photograph', {
            method:'POST', 
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(new_picc) 
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }

    const span_txt = document.createTextNode("-"+autpic);
    pic_name.appendChild(span_txt);
    pic_img.src = urlpic;
}
function main_photography() {
    fetch('/narcissism/pictures')
        .then((response) => response.json())
        .then((data) => {
            for (let i=0; i<data.length; i++) {
                submit_pic(data[i]['url'], data[i]['author'], "repeated");
            }
        });       
}


// Login functions
async function login() {
    // fetch DB call
    const username = document.getElementById("username").value;
    const pswrd = document.getElementById("password").value;
    const response = await fetch('/narcissism/login', {
        method:'POST', 
        headers: {'content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({username: username, password: pswrd})
    });
    if (response.ok) {
        localStorage.setItem("user",`${username}`);
        console.log("Login Success!");
        window.location.href = "events.html";
    } else {
        const js = await response.json();
        console.error(js);
        alert("Incorrect Credentials!");
    }        
}
async function create_account() {
    // db fetch request
    const username = document.getElementById("username").value;
    const pswrd = document.getElementById("password").value;
    const response = await fetch('/narcissism/account_new', {
        method:'POST', 
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({username: username, password: pswrd})
    });
    if (response.ok) {
        localStorage.setItem("user",`${username}`);
        console.log("Login Success!");
        window.location.href = "events.html";
    } else {
        const js = await response.json();
        console.error(js);
        alert("Account Already Exists");
    }        
}
async function logout() {
    localStorage.removeItem("user");
}


// Create Event functions
async function add_person() { 
    const new_perp = document.getElementById("members").value;
    const perp_list = document.getElementById("people_list");

    // Fetch list of users
    const response = await fetch('/narcissism/finduze', {
        method:'POST', 
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({username: new_perp})
    });
    if (response.ok) {
        console.log("Person Successfully Added!");
        const new_person = document.createElement("li");
        const person_text = document.createTextNode(new_perp);
        new_person.appendChild(person_text);
        perp_list.appendChild(new_person);
        document.querySelector('#members').value = ""
    } else {
        console.log("No person with this username!");
        alert('No person with this username!');
    }
}
async function new_event() {
    // Find input elems
    const event_name = document.getElementById("event_name").value;
    const event_pic = document.getElementById("event_pic").value;
    const event_date_1 = document.getElementById("event_dates1").value;
    const event_date_2 = document.getElementById("event_dates2").value;
    const new_peeps = document.getElementById("people_list");
    let add_members = [];
    for (chil of new_peeps.children) {
        add_members.push(chil.innerText);
    }
    const event_data = {username:localStorage.getItem("user"), name:event_name, url:event_pic, d1:event_date_1, d2:event_date_2, members:add_members}
    // Send a post request to create a new event
    await fetch('/narcissism/newEv', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(event_data)
    });
    localStorage.setItem("event", event_name);
    console.log("New Event Created:",JSON.stringify(event_name)); 
    window.location.href = 'main.html';
}



////////////////////////////////
// Potential files for WebSocket pics.html
function never_use() {
    let list = new DataTransfer();
    let file = new File([0], "C:\\Users\\adamj\\Pictures\\120757.png");
    list.items.add(file);
    let camera = list.files;
    if (document.querySelector("#picture")) {
        console.log(document.querySelector("#picture").value);
        const prev_file = document.querySelector("#picture").value;
        console.log(prev_file);
        console.log(camera)
        document.querySelector("#picture").value = "C:\\Users\\adamj\\Pictures\\120757.png"
        console.log(camera)
        setTimeout(() => {
            submit_pic()
        }, 2000);
        document.querySelector("#picture").files = prev_file
    }
}
// Maybe helpful for storing image files
async function createFile(){
    let response = await fetch('http://127.0.0.1:8080/test.jpg');
    let data = await response.blob();
    let metadata = {
        type: 'image/jpeg'
    };
    let file = new File([data], "test.jpg", metadata);
    // ... do something with the file or return it
}