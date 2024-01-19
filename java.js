let credentials = [{'name':'adam', 'password':12345}]
var signed_in = false

function myFunction() {
    document.getElementById('demo').innerHTML = 'Paragraph changed.';
}

function buttonpush() {
    document.getElementById('buttn').innerHTML = 'wrong choice';
    document.getElementById('header_name').innerHTML = 'signed-in';
}

function login() {
    const nam = document.getElementById('username').value
    const pswrd = document.getElementById('password').value

    for (let i = 0; i < credentials.length; i ++) {
        if (credentials[i].name == nam && credentials[i].password == pswrd) {
            console.log(`Welcome back, ${nam}!`)
            console.log(credentials)
            signed_in = true
            document.getElementById('header_name').innerHTML = nam;
        } else {
            
            console.log(`Invalid Credentials!`)
            alert('Invalid Credentials!')
        }
        }
    

    /*console.log(`Username: ${nam}!`)
    console.log(`Password: ${pswrd}`)
    credentials.push({'name':nam, 'password':pswrd})*/
    /*alert(credentials[0].name)
    alert(credentials[0].password)
    alert('Credentials Stored')*/
}


