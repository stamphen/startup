window.onload = logged_in_data();

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
        const user = localStorage.getItem("logged-in")
        console.log(user)
        if (document.getElementById("hidden_nav1").hasAttribute("hidden")) {
            try {
                document.getElementById("hidden_nav1").removeAttribute("hidden")
                document.getElementById("hidden_nav2").removeAttribute("hidden")
                document.getElementById("hidden_nav3").removeAttribute("hidden")
                document.getElementById("logout_btn").removeAttribute("hidden")
            } catch {
                setTimeout(() => {
                    document.getElementById("hidden_nav1").removeAttribute("hidden")
                    document.getElementById("hidden_nav2").removeAttribute("hidden")
                    document.getElementById("hidden_nav3").removeAttribute("hidden")
                    document.getElementById("logout_btn").removeAttribute("hidden")
                }, 300);
            }
        }
        const name = document.getElementById("user_name")
        name.textContent = user
    } else {
        console.log("Not logged in!")
        try {
            document.getElementById("hidden_nav1").setAttribute("hidden",true)
            document.getElementById("hidden_nav2").setAttribute("hidden",true)
            document.getElementById("hidden_nav3").setAttribute("hidden",true)
            document.getElementById("logout_btn").setAttribute("hidden",true)
        } catch {
            setTimeout(() => {
                document.getElementById("hidden_nav1").setAttribute("hidden",true)
                document.getElementById("hidden_nav2").setAttribute("hidden",true)
                document.getElementById("hidden_nav3").setAttribute("hidden",true)
                document.getElementById("logout_btn").setAttribute("hidden",true)
            }, 300);
        }
        }
    }

function logout() {
    localStorage.removeItem("logged-in")
}