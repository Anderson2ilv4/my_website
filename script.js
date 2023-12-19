const ptButton = document.getElementById('ptButton')
const enButton = document.getElementById('enButton')

function ptTranslation() {
    location.reload()
}

function enTranslation() {
    var title = document.getElementById('title')
    var presentation = document.getElementById('presentation')
    var fCourses = document.getElementById('finishedCourses')
    var course1 = document.getElementById('course1')
    var doing1 = document.getElementById('doing1')
    var inProgress = document.getElementById('inProgress')
    var videos = document.getElementById('videos')
    var projects = document.getElementById('projects')
    var subscribe = document.getElementById('subscribe')
    var madeBy = document.getElementById('madeBy')

    presentation.innerHTML = 'Next we have some studied technologies, some projects and other resources:'
    title.innerHTML = 'Portfolio'
    course1.innerHTML = 'Computer Network Technician - Federal Institute of Science and Technology of Pernambuco 2017-2018.2'
    fCourses.innerHTML = 'Finished courses:'
    doing1.innerHTML = 'Software Engineer - UNOPAR 2023.2-'
    inProgress.innerHTML = 'In progress:'
    videos.innerHTML = 'Videos'
    projects.innerHTML = 'Projects'
    subscribe.innerHTML = 'Subscribe'
    madeBy.innerHTML = 'Made by'
    
    console.log('English')

}

ptButton.onclick = ptTranslation
enButton.onclick = enTranslation


