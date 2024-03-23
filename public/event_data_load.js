(function event_header() {
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