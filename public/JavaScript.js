
// Adding onload event listeners to check if a user is logged in, and display data
window.addEventListener("DOMContentLoaded",logged_in_data());
window.addEventListener("DOMContentLoaded",names());

function logged_in_data() {
    add_com()
    if ("logged-in" in localStorage) {
        const current_user = localStorage.getItem("logged-in");
        console.log("User","'",current_user,"'","Logged in!");
        try {
            if (document.querySelector("#logout_btn")) {
                document.getElementById("hidden_nav1").removeAttribute("hidden");
                document.querySelector("#logout_btn").removeAttribute("hidden");
            } else {
                throw new Error("problem!");
            }
        } catch {
        setTimeout(() => {
            if (document.querySelector("#logout_btn")) {
                document.getElementById("hidden_nav1").removeAttribute("hidden");
                document.querySelector("#logout_btn").removeAttribute("hidden");
            }
        }, 100);
        }
    } else {
        console.log("Not logged in!");
        try {
            if (document.querySelector("#logout_btn")) {
                document.getElementById("hidden_nav1").setAttribute("hidden",true);
                document.querySelector("#logout_btn").setAttribute("hidden",true);
            }
        } catch {
            setTimeout(() => {
                if (document.querySelector("#logout_btn")) {
                    document.getElementById("hidden_nav1").setAttribute("hidden",true);
                    document.querySelector("#logout_btn").setAttribute("hidden",true);
                }
            }, 100);
        }
    }
}

function names() {
    setTimeout(() => {
        if (document.querySelector("#login_btn")) {
        } else {
            if ("logged-in" in localStorage) {
                const user = localStorage.getItem("logged-in");
                const nem = document.createTextNode(`${user}`);
                try {
                    if (document.querySelector("#user_name")=null) {;
                        throw new Error("nullloo");
                    }
                } catch {
                    setTimeout(() => {
                        const user_name = document.querySelector("#user_name");
                        user_name.appendChild(nem);
                    }, 100);
                }
            }
        }
    }, 100);
}


// Function called to change main/pics subheader
function ev_pc() {
    const event_pic = document.querySelector("#main_pic");
    if (event_pic.dataset.changed) {
        return;
    }
    event_pic.dataset.changed = true;
    
    //const event = localStorage.getItem("current_event");
    //const event_data = JSON.parse(localStorage.getItem(JSON.stringify(event)));
    //console.log(event_data)
    
    //const tru = event_data.pic
    //console.log(tru,typeof(tru))
    //const yu = new File([event_data.pic],"filename")
    //console.log(yu)
    //new_ur = URL.createObjectURL(yu);
    //console.log(new_ur)
    new_url = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H4SF9uJKJbNRYqnN37t9UAHaE8%26pid%3DApi&f=1&ipt=f1f906cb2c17b3dcdbe62a0ff646a467c6f46c7db0c24b4b7312fbe793a1fbbc&ipo=images"
    console.log(new_url,typeof(new_url))
    event_pic.src = new_url;
}
    

// These functions will only be called in the web console to help with debugging
function clear() {
    localStorage.clear()
}
function del() {
    fetch('/self/dl', {
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

    if (rep!="repeated") {
        // POST comment object with fetch
        fetch('/self/comment', {
            method:'POST', 
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(new_comm)
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }   
}

function main_comments() {
    console.log('working')
    fetch('/self/comments')
        .then((response) => response.json())
        .then((data) => {
            for (let i=0; i<data.length; i++) {
                comment(data[i]['text'], data[i]['author'], "repeated");
            }
        });        
}


function submit_pic(file=12345,aut=15) {
    
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
    const span_txt = document.createTextNode("-"+user_name.innerText);
    pic_name.appendChild(span_txt);
    
    // Create new URL if file, otherwise don't
    if (file != 12345) {
        pic_url = file;
    } else {
        pic_file = new_pic.files[0];
        pic_url = URL.createObjectURL(pic_file);
    }

    // Create picture object
    const new_picc = {
        url: pic_url,
        author: user_name.innerText
    }
    
    // POST picture object with fetch
    fetch('/self/photograph', {
        method:'POST', 
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(new_picc) 
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
    
    pic_img.src = pic_url;
}


// Login functions
function login() {
    const btn = document.getElementById("login_btn");
    if (btn.hasAttribute("formaction")) {
        btn.removeAttribute("formaction");
    }
    const username = document.getElementById("username").value;
    const pswrd = document.getElementById("password").value;
    if (username in localStorage) {
        if (localStorage.getItem(username) === pswrd) {
            console.log("Login Success!");
            localStorage.setItem("logged-in", username);
            btn.setAttribute("formaction", "events.html");
        } else {
            console.log("Incorrect Credentials!");
            alert("Incorrect Credentials!");
        }
    } else {
        console.log("Username not Found!");
        alert("Username not Found!");
    }
}

function create_account() {
    const btn = document.getElementById("create_btn");
    if (btn.hasAttribute("formaction")) {
        btn.removeAttribute("formaction");
    }
    const username = document.getElementById("username").value;
    const pswrd = document.getElementById("password").value;
    if (username in localStorage) {
        console.log("Account already exists!");
        alert("Account already exists!");
    } else {
        localStorage.setItem(username, pswrd);
        console.log("Thanks for creating an account, ",username);
        localStorage.setItem("logged-in",username);
        const logout_btn = document.getElementById("logout_btn");
        logout_btn.setAttribute("hidden", false);
        btn.setAttribute("formaction", "events.html");
    }
}

function logout() {
    localStorage.removeItem("logged-in");
}


// Create Event functions
function add_person() { 
    const new_perp = document.getElementById("members").value;
    const perp_list = document.getElementById("people_list");
    let varia = false;
    console.log(perp_list.children);
    if (new_perp in localStorage) {
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

function new_event() {
    const event_name = document.getElementById("event_name").value;
    const event_pic = document.getElementById("event_pic").value;
    const event_date_1 = document.getElementById("event_dates1").value;
    const event_date_2 = document.getElementById("event_dates2").value;
    const new_peeps = document.getElementById("people_list");
    let add_members = [];
    for (chil of new_peeps.children) {
        add_members.push(chil.innerText);
    }
    const event_data = {name:event_name, pic:event_pic, date1:event_date_1, date2:event_date_2, members:add_members}
    localStorage.setItem(JSON.stringify(event_name), JSON.stringify(event_data));
    localStorage.setItem("current_event", JSON.stringify(event_name))
    console.log("New Event Created:",JSON.stringify(event_name));
}


// Add a JavaScript function that imitates future WebSocket content
async function add_com() {
    setInterval(async () => {
        if (document.querySelector("#new_comment")) {
            await fetch('https://randomuser.me/api/')
                .then((response) => response.json())
                .then((data) => {
                    let nemm = data.results[0].name;
                    numm = nemm.title + " " + nemm.first + " " + nemm.last;
                });
            await fetch('https://official-joke-api.appspot.com/random_joke')
                .then((response) => response.json())
                .then((data) => {
                    total = data.setup + " " + data.punchline;
                });
            const prev_inp = document.querySelector('#new_comment').value;
            const usr = document.querySelector('#user_name').textContent;
            document.querySelector('#new_comment').value = total;
            document.querySelector('#user_name').textContent = numm;
            comment();
            document.querySelector('#new_comment').value = prev_inp;
            document.querySelector('#user_name').textContent = usr;
        } else if (document.querySelector("#picture")) {
            await fetch('https://randomuser.me/api/')
                .then((response) => response.json())
                .then((data) => {
                    let nemm = data.results[0].name;
                    numm = nemm.title + " " + nemm.first + " " + nemm.last;
                });
            await fetch('https://dog.ceo/api/breeds/image/random')
                .then((response) => response.json())
                .then((data) => {
                    source = data.message
                });
            try {
                prev_fil = document.querySelector('#picture').files[0];
            } catch {}
            const usr = document.querySelector('#user_name').textContent;
            document.querySelector('#user_name').textContent = numm;
            submit_pic(source);
            try {
                document.querySelector('#picture').files[0] = prev_fil;
            } catch {}
            document.querySelector('#user_name').textContent = usr;
        }
    }, 7500);
}


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



//useful
//USEFUL

//async function createFile(){
//    let response = await fetch('http://127.0.0.1:8080/test.jpg');
//    let data = await response.blob();
//    let metadata = {
//        type: 'image/jpeg'
//    };
//    let file = new File([data], "test.jpg", metadata);
//    // ... do something with the file or return it
//    }
//createFile();