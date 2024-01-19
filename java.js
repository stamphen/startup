let credentials = [{'name':'john', 'password':54321},{'name':'adam', 'password':12345}]
let current_credentials = []
var signed_in = false


function buttonpush() {
    document.getElementById('buttn').innerHTML = 'wrong choice';
    if (current_credentials) {
        document.getElementById('header_name').innerHTML = current_credentials.name
    } else {
        document.getElementById('header_name').innerHTML = 'signed-out'
    }
    
}

function login() {
    const nam = document.getElementById('username').value
    const pswrd = document.getElementById('password').value

    for (let i = 0; i < credentials.length; i+=1) {
        if (credentials[i].name == nam && credentials[i].password == pswrd) {
            console.log(`Welcome back, ${nam}!`)
            console.log(credentials[i])
            console.log(current_credentials)
            current_credentials = credentials[i]
            console.log(current_credentials)
            document.getElementById('header_name').innerHTML = nam
            return
        }
    }
    console.log(`Invalid Credentials!`);
    alert('Invalid Credentials!');
    return
}        


    /*console.log(`Username: ${nam}!`)
    console.log(`Password: ${pswrd}`)
    credentials.push({'name':nam, 'password':pswrd})*/
    /*alert(credentials[0].name)
    alert(credentials[0].password)
    alert('Credentials Stored')*/



