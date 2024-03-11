async function testnode() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((data) => {
            const idv = document.querySelector('#useless')
            const par = document.createElement('p')
            par.textContent = data.value
            idv.appendChild(par)
            console.log(data.value)
        })
    fetch('https://api.chucknorris.io/jokes/categories')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    fetch(' https://the-trivia-api.com/v2/questions')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            console.log(data.value)
        })
        
    
}


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
    
    const event = localStorage.getItem("current_event");
    const event_data = JSON.parse(localStorage.getItem(JSON.stringify(event)));
    console.log(event_data)
    
    const tru = event_data.pic
    console.log(tru,typeof(tru))
    const yu = new File([event_data.pic],"filename")
    console.log(yu)
    new_ur = URL.createObjectURL(yu);
    console.log(new_ur)
    new_url = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H4SF9uJKJbNRYqnN37t9UAHaE8%26pid%3DApi&f=1&ipt=f1f906cb2c17b3dcdbe62a0ff646a467c6f46c7db0c24b4b7312fbe793a1fbbc&ipo=images"
    console.log(new_url,typeof(new_url))
    
    event_pic.src = new_url;
}
    

// This function will only be called in the web console to help with debugging
function clear() {
    localStorage.clear()
}


// Event interaction functions
function comment() {
    const neww_commment = document.getElementById("new_comment");
    const nw_cmnt = document.createElement("div");    
    const parag = document.createElement("p");
    const name_span = document.createElement("span");
    const comment_input = document.createTextNode(neww_commment.value);
    parag.appendChild(comment_input);
    parag.append(document.createElement("br"));
    nw_cmnt.appendChild(parag);
    const user_name = document.getElementById("user_name");
    const span_txt = document.createTextNode("-"+user_name.innerText);
    name_span.appendChild(span_txt);
    nw_cmnt.appendChild(name_span);
    const old_comments = document.getElementById("comments_old");
    old_comments.appendChild(nw_cmnt);
    old_comments.appendChild(document.createElement('hr'));
}

function submit_pic() {
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
    const pic_url = URL.createObjectURL(new_pic.files[0]);
    pic_img.src = pic_url;
    console.log(pic_url,new_pic.files[0]);
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
function add_com() {
    let chat = 'I loved that part of the vacation!! Honestly, we should totally do something again soon!';
    setInterval(() => {
        chat = `${chat} plus the steak was glorious...`;
        if (document.querySelector("#new_comment")) {
            const prev_inp = document.querySelector('#new_comment').value;
            document.querySelector('#new_comment').value = chat;
            comment();
            document.querySelector('#new_comment').value = prev_inp;
        }
    }, 5000);
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