const ptButton = document.getElementById('ptButton')
const enButton = document.getElementById('enButton')

function ptTranslation() {
    var title = document.getElementById('title').innerHTML = 'Portfólio'
    var presentation = document.getElementById('presentation').innerHTML = 'A seguir são as tecnologias estudadas, alguns projetos e outros recursos:'
    var fCourses = document.getElementById('finishedCourses').innerHTML = 'Cursos concluídos:'
    var course1 = document.getElementById('course1').innerHTML = 'Técnico em Redes de Computadores - Instituto Federal de Ciência e Tecnologia de Pernambuco 2017-2018.2'
    var doing1 = document.getElementById('doing1').innerHTML = 'Engenharia de Software - UNOPAR 2023.2 -'
    var inProgress = document.getElementById('inProgress').innerHTML = 'Em andamento:'
    var videos = document.getElementById('videos').innerHTML = 'Vídeos'
    var projects = document.getElementById('projects').innerHTML = 'Projetos'
    var subscribe = document.getElementById('subscribe').innerHTML = 'Inscreva-se'
    var madeBy = document.getElementById('madeBy').innerHTML = 'Feito por'
}

function enTranslation() {
    var title = document.getElementById('title').innerHTML = 'Portfolio'
    var presentation = document.getElementById('presentation').innerHTML = 'Next we have some studied technologies, some projects and other resources:'
    var fCourses = document.getElementById('finishedCourses').innerHTML = 'Finished courses:'
    var course1 = document.getElementById('course1').innerHTML = 'Computer Network Technician - Federal Institute of Science and Technology of Pernambuco 2017-2018.2'
    var doing1 = document.getElementById('doing1').innerHTML = 'Software Engineer - UNOPAR 2023.2-'
    var inProgress = document.getElementById('inProgress').innerHTML = 'In progress:'
    var videos = document.getElementById('videos').innerHTML = 'Videos'
    var projects = document.getElementById('projects').innerHTML = 'Projects'
    var subscribe = document.getElementById('subscribe').innerHTML = 'Subscribe'
    var madeBy = document.getElementById('madeBy').innerHTML = 'Made by'
}

ptButton.onclick = ptTranslation
enButton.onclick = enTranslation