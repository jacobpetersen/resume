var nav = document.getElementsByTagName('nav')[0];
var navItems = document.getElementsByClassName('navItem');
var home = document.getElementById('home');
var work = document.getElementById('work');
var projects = document.getElementById('projects');
var education = document.getElementById('education');
var homeNav = document.getElementsByClassName('homeNav')[0];
var workNav = document.getElementsByClassName('workNav')[0];
var projectsNav = document.getElementsByClassName('projectsNav')[0];
var educationNav = document.getElementsByClassName('educationNav')[0];
window.addEventListener('scroll', function(e) {
    var homeBottom = home.getBoundingClientRect().bottom - 60;
    var workTop = work.getBoundingClientRect().top;
    var projectsTop = projects.getBoundingClientRect().top;
    var educationTop = education.getBoundingClientRect().top;
    if(homeBottom <= 0) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
    for(var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
    }
    if(educationTop < 60) {
        educationNav.classList.add('active');
    } else if (projectsTop < 60) {
        projectsNav.classList.add('active');
    } else if (workTop < 60) {
        workNav.classList.add('active');
    } else {
        homeNav.classList.add('active');
    }
});