


var bio = {
  name : "Martina Klimova",
  role : "Web Developer",
  welcomeMessage: "Welcome you are",
  biopic : "images/mePark.jpg",
  skills : ["programming","JavaScript", "CSS","HTML"],
  contacts: {
    mobile: "+420 604150128",
    email: "martinaklimova@mac.com",
    github: "martinka0",
    location: "Austin"
  },
 };
var education =  {
  "schools": [{
    "name": "Pacific Northwest College of Art",
    "city": "Portland, OR, US",
    "major": ["B.F.A. in Communication Design"],
    "graduationYear": 2003,
    "url": "http: //www.pnca.edu/"
  }, {
    "name": "Santa Barbara City College",
    "city": "Santa Barbara,CA, US",
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
var projects = {
  "projects": [{
    "title": "Sample Projects 1",
    "dates": "2017",
    "description": "arcade game",
    "images": ["images/mePark.jpg"]
  }, {
    "title": "Sample Projects 2",
    "dates": "2017",
    "description": "map",
    "images": ["images/mePark.jpg"]
  }]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
//var formattedPosition = HTMLposition.replace("%data%", work.position);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);



$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedWelcomeMessage);
$("#header").append(formattedBiopic);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);

$("#main").append(internationalizeButton);


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkills = HTMLskills.replace ("%data%, bio.skills[0]");
  var formattedSkills = HTMLskills.replace ("%data%, bio.skills[1]");
  var formattedSkills = HTMLskills.replace ("%data%, bio.skills[2]");
  var formattedSkills = HTMLskills.replace ("%data%, bio.skills[3]");
}

// $("#main").prepend(work["position"]);
// $("#main").prepend(education.name);
// $("#main").prepend(education["years"]);



for(var i = 0; i < bio.skills.length; ++i){
 var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
 $("#header").append(formattedSkills);
};

function displaywork (){
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
}

 displaywork();

 projects.display = function() {
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $("project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $("project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $("project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $("project-entry:last").append(formattedImage);

      }

}
}

};
 projects.display();



function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}









