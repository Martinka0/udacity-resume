


var bio = {
  "name" : "Martina Klimova",
  "role" : "Web Developer",
  "welcomeMessage": "Welcome to my page",
  "biopic" : "images/me.jpg",
  "skills" : ['JavaScript', 'CSS','HTML'],
  "contacts": {
    "mobile": "+420 604150128",
    "email": "martinaklimova@mac.com",
    "github": "martinka0",
    "location": "Austin"
  },
 };



bio.display = function() {


    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
     var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);
    var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPicture);

    $("#topContacts").append("<li><i class='fa fa-github' aria-hidden='true'>"+"</i> martinka0</li>");
    $("#topContacts").append("<li><i class='fa fa-mobile' aria-hidden='true'>"+"</i> +420604150128</li>");
    $("#topContacts").append("<li><i class='fa fa-globe' aria-hidden='true'>"+"</i> Austin</li>");
    $("#topContacts").append("<li><i class='fa fa-envelope-o' aria-hidden='true'>"+"</i> martinaklimova@mac.com</li>");

    $("#footerContacts").append("<li><i class='fa fa-github' aria-hidden='true'>"+"</i> martinka0</li>");
    $("#footerContacts").append("<li><i class='fa fa-globe' aria-hidden='true'>"+"</i> Austin</li>");
    $("#footerContacts").append("<li><i class='fa fa-mobile' aria-hidden='true'>"+"</i> +420604150128</li>");
    $("#footerContacts").append("<li><i class='fa fa-envelope-o' aria-hidden='true'>"+"</i> martinaklimova@mac.com</li>");


    if (bio.skills.length) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }

};


var education =  {
  "schools": [{
    "name": "Pacific Northwest College of Art",
    "location": "Portland, OR, US",
    "degree" : "B.F.A.",
    "majors": ["Communication Design"],
    "dates": "2003",
  }, {
    "name": "Santa Barbara City College",
    "location": "Santa Barbara,CA, US",
    "degree": "Associate Degree Program",
    "majors": ["International Marketing Communication"],
    "dates": "1998",
  }],

    "onlineCourses": [{
        "title": "iOS Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016-Present",
        "url": "https://www.udacity.com/"
    }, {
        "title": "Front-End Web Developer Nanoegree",
        "school": "Udacity",
        "dates": "2016-Present",
        "url": "https://www.udacity.com/"
    }]
};



education.display = function() {
    education.schools.forEach(function(i, school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchool = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchool);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajor);

    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(j, course) {

        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedSchoolOnline = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedSchoolOnline);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineURL);


    });


    };




var work = {
    "jobs": [{
        "employer": "FOD Records",
        "title": "Project Manager",
        "location": ["Europe"],
        "dates": "Current - 2004",
        "description": "Creating, implementing and monitoring marketing and PR plans. Managing internal web development staff and external vendors."

    }, {
        "employer": "Cisco Design",
        "title": "Intern in Graphic Design Team",
        "location": "Portland, OR, US",
        "dates": "2003",
        "description": "Experience in interacting with all levels and departments"
    }]
};

work.display = function() {
    work.jobs.forEach(function(i, job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    });

};


var projects = {
  "projects": [{
    "title": "Sample Projects 1",
    "dates": "2017",
    "description": "TBA",
    "images": ["http://lorempixel.com/400/200/", "http://lorempixel.com/400/200/", "http://lorempixel.com/400/200/"]
  }, {
    "title": "Sample Projects 2",
    "dates": "2017",
    "description": "TBA",
    "images": ["http://lorempixel.com/400/200/", "http://lorempixel.com/400/200/", "http://lorempixel.com/400/200/"]
  }]
};

 projects.display = function() {
     projects.projects.forEach(function(i,project){
       $("#projects").append(HTMLprojectStart);
       var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
       var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
       var formattedProjectTitleDates = formattedProjectTitle + formattedProjectDates;
       $(".project-entry:last").append(formattedProjectTitleDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
       $(".project-entry:last").append(formattedProjectDescription);
       if (projects.projects[project].images.length > 0) {
       for (image in projects.projects[project].images) {
       var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
       $(".project-entry:last").append(formattedImage);
    }
}
        });
 };



$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);


function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}



bio.display();
education.display();
work.display();
projects.display();





