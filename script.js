const ptButton = document.getElementById('pt-br')
const enButton = document.getElementById('en')

function alerta() {
    console.log('TEste')
}

function english() {
    console.log('English')
}

ptButton.onclick = alerta
enButton.onclick = english

