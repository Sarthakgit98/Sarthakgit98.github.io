	
function clockReal(){	
	var time = document.getElementById("timediv");
	time.innerHTML = "Current time: <i>" + new Date() + "</i>";
	setTimeout(clockReal, 1000);
}
clockReal();

var home = document.getElementById("home");
var education = document.getElementById("education");
var experience = document.getElementById("experience");
var skills = document.getElementById("skills");

function showHome(){
	home.style.display="flex";
	education.style.display="none";
	experience.style.display="none";
	skills.style.display="none";
}

function showEducation(){
	home.style.display="none";
	education.style.display="flex";
	experience.style.display="none";
	skills.style.display="none";
}

function showExp(){
	home.style.display="none";
	education.style.display="none";
	experience.style.display="flex";
	skills.style.display="none";
}

function showSkills(){
	home.style.display="none";
	education.style.display="none";
	experience.style.display="none";
	skills.style.display="flex";
}

function hideAll(){
	home.style.display="none";
	education.style.display="none";
	experience.style.display="none";
	skills.style.display="none";
}


var homebut = document.getElementById("homebut");
var educationbut = document.getElementById("edubut");
var experiencebut = document.getElementById("expbut");
var skillsbut = document.getElementById("skillbut");
var aboutbut = document.getElementById("aboutbut");





















