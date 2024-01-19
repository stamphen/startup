function myFunction() {
    document.getElementById('demo').innerHTML = 'Paragraph changed.';
}

function buttonpush() {
    document.getElementById('buttn').innerHTML = 'wrong choice';
}

function login() {
    const nam = document.getElementById('name').value
    console.log(`Hello, ${nam}!`)
    alert(nam)
}

