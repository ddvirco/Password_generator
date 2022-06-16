let password = document.getElementById('myInput');
let checkPassword = document.getElementById('checkPassword');
let goodPassword = document.getElementById('goodPassword');

function generatePassword() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let password = "";

    for (i = 0; i < 12; i++) {
        let randomNum = Math.floor(Math.random() * chars.length)
        password += chars[randomNum]
    }
        document.getElementById("myInput").value = password
}
function checkP() {
    const chars = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    const somePassword = checkPassword.value
    let check = ''
    for (i = 0; i < somePassword.length; i++) {
        for (j = 0; j <= chars.length; j++) {
            if (somePassword[i] == chars[j]) {
                check += somePassword[i]
            }
        }
    }
    document.getElementById("goodPassword").value = check
}

function resetButton() {
    password.value = ''
    checkPassword.value = ''
    goodPassword.value =''

}