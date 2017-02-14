


var bio = {
  "name" : "Martina Klimova",
  "role" : "Web Developer",
  "welcomeMessage": "Welcome to my page",
  "biopic" : "images/me.jpg",
  "skills" : ['programming','JavaScript', 'CSS','HTML'],
  "contacts": {
    "mobile": "+420 604150128",
    "email": "martinaklimova@mac.com",
    "github": "martinka0",
    "location": "Austin"
  },
 };
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBiopic);

$("#header").append(formattedWelcomeMessage);
$("#topContacts").append("<li><i class='fa fa-github' aria-hidden='true'>"+"</i> martinka0</li>");
$("#topContacts").append("<li><i class='fa fa-mobile' aria-hidden='true'>"+"</i> +420604150128</li>");
$("#topContacts").append("<li><i class='fa fa-globe' aria-hidden='true'>"+"</i> Austin</li>");

$("#topContacts").append("<li><i class='fa fa-envelope-o' aria-hidden='true'>"+"</i> martinaklimova@mac.com</li>");
$("#footerContacts").append("<li><i class='fa fa-github' aria-hidden='true'>"+"</i> martinka0</li>");
$("#footerContacts").append("<li><i class='fa fa-globe' aria-hidden='true'>"+"</i> Austin</li>");
$("#footerContacts").append("<li><i class='fa fa-mobile' aria-hidden='true'>"+"</i> +420604150128</li>");
$("#footerContacts").append("<li><i class='fa fa-envelope-o' aria-hidden='true'>"+"</i> martinaklimova@mac.com</li>");

$("#header").append(HTMLskillsStart);
for(var i = 0; i < bio.skills.length; ++i){
 var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
 $("#skills").append(formattedSkills);
};


var education =  {
  "schools": [{
    "name": "Pacific Northwest College of Art",
    "location": "Portland, OR, US",
    "major": ["B.F.A. in Communication Design"],
    "graduationYear": 2003,
    "url": "http: //www.pnca.edu/"
  }, {
    "name": "Santa Barbara City College",
    "location": "Santa Barbara,CA, US",
    "major": ["International Marketing Communication"],
    "graduationYear": 1998,
    "url": "http://www.sbcc.edu/"
  }],
  "onlineCourses": [{
    "title": "Front-End Web Developer",
    "school": "Udacity",
    "dates": "2016 - 2017",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }]
};
 //employer, title, location, dates worked and description strings
 var work = {
  "jobs": [{
    "employer": "FOD Records",
    "title": "Project Manager",
    "location": "Toronto, Ca",
    "datesWorked": ["Current", "2009"],
    "description": "Creating, implementing and monitoring marketing and PR plans. Managing internal web development staff and external vendors."
    }, {
    "employer": "Cisco Design",
    "title": "Internship",
    "location": "Portland, OR, US",
    "datesWorked": ["2003"],
    "description": "Experience in interacting with all levels and departments."
  }]
};

for(job in work.jobs) {
$("#workExperience").append(HTMLworkStart);
 var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 var formattedEmployerTitle = formattedEmployer + formattedTitle;
 $(".work-entry:last").append(formattedEmployerTitle);

 var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
 $(".work-entry:last").append(formattedDates);

var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
 $(".work-entry:last").append(formattedDescription);
}

var projects = {
  "projects": [{
    "title": "Sample Projects 1",
    "dates": "2017",
    "description": "arcade game",
    "images": ["http://lorempixel.com/400/200/", "http://lorempixel.com/400/200/"]
  }, {
    "title": "Sample Projects 2",
    "dates": "2017",
    "description": "map",
    "images": ["http://lorempixel.com/400/200/", "http://lorempixel.com/400/200/"]
  }]
};

for (var i = 0; i < projects.projects.length; i++) {
  //
    $("#projects").append(HTMLprojectStart)
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedProjectTitle);
    //Code for dates
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedProjectDates);
    //Code for description
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedProjectDescription);
    //Code for images
    for  (var j = 0; j < projects.projects[i].images.length; j++) {

    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
    $(".project-entry:last").append(formattedImage);
  }
}

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);


function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}









