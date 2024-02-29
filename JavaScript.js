window.onload = logged_in_data();

//let local = document.location.href

//if (local = "https://startup.familyjournal.click/main.html"){
//    console.log("yep")
//    const main_pic = document.querySelector("#main_pic")
//    main_pic.addEventListener("DOMContentLoaded", ev_pc())
//}



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
}

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
        const logout_btn = document.getElementById("logout_btn")
        logout_btn.setAttribute("hidden", false)
        btn.setAttribute("formaction", "events.html");
    }
}

function logged_in_data() {
    if ("logged-in" in localStorage) {
        console.log("Logged in!")
        let local = document.location.href
        if (local = "https://startup.familyjournal.click/index.html") {
            try {
                document.getElementById("hidden_nav1").removeAttribute("hidden")
            } catch {
            setTimeout(() => {
                document.getElementById("hidden_nav1").removeAttribute("hidden")
            }, 300);
            }
        }
        const current_user = localStorage.getItem("logged-in")
        console.log(current_user)
    } else {
        console.log("Not logged in!")
        try {
            document.getElementById("hidden_nav1").setAttribute("hidden",true)
        } catch {
            setTimeout(() => {
                document.getElementById("hidden_nav1").setAttribute("hidden",true)
            }, 300);
        }
        }
    }

function logout() {
    localStorage.removeItem("logged-in")
}

function add_person() {
    const new_perp = document.getElementById("members").value
    const perp_list = document.getElementById("people_list")
    if (new_perp in localStorage) {
        console.log("Person Successfully Added!")
        const new_person = document.createElement("li")
        const person_text = document.createTextNode(new_perp)
        new_person.appendChild(person_text)
        perp_list.appendChild(new_person)
    } else {
        console.log("No person with this username!")
        alert('No person with this username!')
    }
}

function new_event() {
    console.log("new_event_happening")
    const event_name = document.getElementById("event_name").value
    const event_pic = document.getElementById("event_pic").value
    const event_date_1 = document.getElementById("event_dates_1")
    const event_date_2 = document.getElementById("event_dates_2")
    const new_peeps = document.getElementById("people_list")
    let add_members = []
    for (chil of new_peeps.children) {
        add_members.push(chil.innerText)
    }
    const event_data = {name:event_name, pic:event_pic, date1:event_date_1, date2:event_date_2, members:add_members}
    localStorage.setItem(JSON.stringify(event_name), JSON.stringify(event_data))
    console.log(localStorage.getItem(JSON.stringify(event_name)))
    console.log(JSON.stringify(event_name))
    localStorage.setItem("current_event",event_name)
}

    //document.querySelector("#event_new_btn").setAttribute("formaction","main.html")
    //document.querySelector("#main_pic").src = URL.createObjectURL(event_pic.files[0])
    //document.querySelector("#event_namen").textContent = event_name


function current_user() {
    console.log('hi!!')
    const display_user = document.querySelector("#user_name")
    const curr_use = localStorage.getItem("logged-in")
    display_user.textContent = "User: "+curr_use
}

function ev_pc() {
    console.log(localStorage)
    const event_pic = document.querySelector("#main_pic")
    const event = localStorage.getItem("current_event")
    console.log(event)
    const event_data = JSON.parse(localStorage.getItem(JSON.stringify(event)))
    console.log(event_data)
    console.log("success!!!")
    console.log(event_data.pic)
    new_url = URL.createObjectURL(event_data.pic)
    console.log(new_url)
    event_pic.src = new_url
}

let chat = 'I loved that part of the vacation!! Honestly, we should totally do something again soon!';
setInterval(() => {
    chat = `${chat} plus the steak was glorious...`;
    document.querySelector('#new_comment').textContent = chat;
    comment()
}, 10000);