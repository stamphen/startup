(async function event_header() {
    if (localStorage.getItem("event")) {
        const event = localStorage.getItem("event");


        const even = {
            name: "Floiduh vacashun",
            url: "https://klyker.com/wp-content/uploads/2017/12/high-definition-photos-53.jpg",
            date1: "07/14/2008",
            date2: "07/19/2008"
        }
    
        const main_pic = document.querySelector('#main_pic');
        const ev_title = document.querySelector('#event_namen');
        const ev_dates = document.querySelector('#event_dates');

        // dB request for event name
        const event_daataa = await fetch(`/findEv`, {
            method:'GET', 
            headers: {'content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({evname: event})
        });
        const tru_data = await event_daataa.json();
        console.log("tru: ",tru_data)

        main_pic.setAttribute("src",even.url);
        ev_title.textContent = even.name;
        d1m = even.date1.slice(0,2);
        d1d = even.date1.slice(3,5);
        d1y = even.date1.slice(6);
        console.log(d1m,d1d,d1y)
        
        Month_first_day=second_day=year = '97';

        ev_dates.innerHTML = `<h4>Date: ${Month_first_day}-${second_day}, ${year}</h4>`;
    } else {
        console.error('This should never happen');
    }
})();

// Add a JavaScript function that imitates future WebSocket content
(async function web_sock() {
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
})();