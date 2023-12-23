const ptButton = document.getElementById('ptButton')
const enButton = document.getElementById('enButton')
const dkButton = document.getElementById('dark-mode')

document.getElementById('title').innerHTML = localStorage.getItem('title')
document.getElementById('presentation').innerHTML = localStorage.getItem('presentation')
document.getElementById('finishedCourses').innerHTML = localStorage.getItem('finishedCourses')
document.getElementById('course1').innerHTML = localStorage.getItem('course1')
document.getElementById('doing1').innerHTML = localStorage.getItem('doing1')
document.getElementById('inProgress').innerHTML = localStorage.getItem('inProgress')
document.getElementById('videos').innerHTML = localStorage.getItem('videos')
document.getElementById('projects').innerHTML = localStorage.getItem('projects')
document.getElementById('subscribe').innerHTML = localStorage.getItem('subscribe')
document.getElementById('madeBy').innerHTML = localStorage.getItem('madeBy')

function ptTranslation() {
    var title = document.getElementById('title').innerHTML = 'Portfólio'
    localStorage.setItem('title', title)
    var presentation = document.getElementById('presentation').innerHTML = 'A seguir são as tecnologias estudadas, alguns projetos e outros recursos:'
    localStorage.setItem('presentation', presentation)
    var fCourses = document.getElementById('finishedCourses').innerHTML = 'Cursos concluídos:'
    localStorage.setItem('finishedCourses', fCourses)
    var course1 = document.getElementById('course1').innerHTML = 'Técnico em Redes de Computadores - Instituto Federal de Ciência e Tecnologia de Pernambuco 2017-2018.2'
    localStorage.setItem('course1', course1)
    var doing1 = document.getElementById('doing1').innerHTML = 'Engenharia de Software - UNOPAR 2023.2 -'
    localStorage.setItem('doing1', doing1)
    var inProgress = document.getElementById('inProgress').innerHTML = 'Em andamento:'
    localStorage.setItem('inProgress', inProgress)
    var videos = document.getElementById('videos').innerHTML = 'Vídeos'
    localStorage.setItem('videos', videos)
    var projects = document.getElementById('projects').innerHTML = 'Projetos'
    localStorage.setItem('projects', projects)
    var subscribe = document.getElementById('subscribe').innerHTML = 'Inscreva-se'
    localStorage.setItem('subscribe', subscribe)
    var madeBy = document.getElementById('madeBy').innerHTML = 'Feito por'
    localStorage.setItem('madeBy', madeBy)
}

function enTranslation() {
    var title = document.getElementById('title').innerHTML = 'Portfolio'
    localStorage.setItem('title', title)
    var presentation = document.getElementById('presentation').innerHTML = 'Next we have some studied technologies, some projects and other resources:'
    localStorage.setItem('presentation', presentation)
    var fCourses = document.getElementById('finishedCourses').innerHTML = 'Finished courses:'
    localStorage.setItem('finishedCourses', fCourses)
    var course1 = document.getElementById('course1').innerHTML = 'Computer Network Technician - Federal Institute of Science and Technology of Pernambuco 2017-2018.2'
    localStorage.setItem('course1', course1)
    var doing1 = document.getElementById('doing1').innerHTML = 'Software Engineer - UNOPAR 2023.2-'
    localStorage.setItem('doing1', doing1)
    var inProgress = document.getElementById('inProgress').innerHTML = 'In progress:'
    localStorage.setItem('inProgress', inProgress)
    var videos = document.getElementById('videos').innerHTML = 'Videos'
    localStorage.setItem('videos', videos)
    var projects = document.getElementById('projects').innerHTML = 'Projects'
    localStorage.setItem('projects', projects)
    var subscribe = document.getElementById('subscribe').innerHTML = 'Subscribe'
    localStorage.setItem('subscribe', subscribe)
    var madeBy = document.getElementById('madeBy').innerHTML = 'Made by'
    localStorage.setItem('madeBy', madeBy)
}

function darkMode() {
    document.querySelector('body').style.backgroundColor = 'rgb(32, 32, 32)'
    document.querySelector('body').style.color = 'gray'
    document.getElementById('subscribe').style.color = 'black'
}

ptButton.onclick = ptTranslation
enButton.onclick = enTranslation
dkButton.onclick = darkMode