import { userData } from '../data/data.js'

// const btnLoginElm = document.querySelector('#btn_login')

function onLogin() {
    const usernameElm = document.querySelector('#username').value
    const passwordElm = document.querySelector('#password').value

    const users = userData.find(user => user.name == usernameElm && user.password == passwordElm)

    if (users) {
        localStorage.setItem('user', JSON.stringify(users))
        window.location.href = 'home.html'
    } else {
        alert('Username dan Password Tidak Sesuai')
    }
}

const formElm = document.getElementById('myForm')

formElm.addEventListener('submit', function (event) {
    event.preventDefault()
    onLogin()
})