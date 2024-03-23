async function logged_in_data() {
    console.log('log')          // Lets me know onload func is working                          

    // Displays Event tab and Logout btn
    if (localStorage.getItem("user")) {
        console.log("stuf");
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
        }, 50);
        }
    } else {
        console.log("nope");
        // Move back to login if ever logged out
        console.log("Not logged in!");
        if (document.querySelector('#login_btn')) {
            console.log('already')
        } else {
            window.location.href = "index.html";
            console.log("now")
        }

        // Hide logout btn and events tab
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
            }, 50);
        }
    }

    // If not on login page, display current user
    setTimeout(() => {
        if (document.querySelector("#login_btn")) {
        } else {
            try {
                if (localStorage.getItem("user")) {
                    const user = localStorage.getItem("user");
                    const nem = document.createTextNode(`${user}`);
                    try {
                        if (document.querySelector("#user_name")=null) {
                            throw new Error("nullloo");
                        } else {
                            const user_name = document.querySelector("#user_name");
                            user_name.appendChild(nem);
                        }
                    } catch {
                        setTimeout(() => {
                            const user_name = document.querySelector("#user_name");
                            user_name.appendChild(nem);
                        }, 50);
                    }
                }
            } catch {}
        }
    }, 50);
}

logged_in_data();