


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
    "degree" : "B.F.A.",
    "major": "Communication Design",
    "dates": "2003",
    // "url": "http: //www.pnca.edu/"
  }, {
    "name": "Santa Barbara City College",
    "location": "Santa Barbara,CA, US",
    "degree": "Associate Degree Program",
    "major": "International Marketing Communication",
    "dates": "1998",
    // "url": "http://www.sbcc.edu/"
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

// $("#education").append(HTMLschoolStart);
// for (var i = 0; i<education.schools.length; i++)
//      {
//          var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
//          var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
//          var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
//          var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
//          var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

//          $(".education-entry:last").append(formattedSchoolName);
//          $(".education-entry:last").append(formattedSchoolDates);
//          $(".education-entry:last").append(formattedSchoolLocation);
//          $(".education-entry:last").append(formattedMajor);
//     }
//     $("#education").append(HTMLonlineClasses);
//     $("#education").append(HTMLschoolStart);

//     for (var i = 0; i<education.onlineCourses.length; i++)
//         {
//             var formattedOnlineCourse= HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
//             var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
//             var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
//             var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

//             $(".education-entry:last").append(formattedOnlineCourse + formattedOnlineSchool);
//             $(".education-entry:last").append(formattedOnlineDate);
//             $(".education-entry:last").append(formattedOnlineURL);
//         }

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
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedSchoolMajor);

    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(j, course) {

        $("#education").append(HTMLschoolStart);
        // $(".education").append(HTMLonlineClasses);
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
//
education.display();



var work = {
    "jobs": [{
        "employer": "FOD Records",
        "title": "Project Manager",
        "location": ["Europe: Milan, Rome, Amsterdam", "London, UK"],
        "dates": "Current - 2004",
        "description": "Creating, implementing and monitoring marketing and PR plans. \
        Managing internal web development staff and external vendors."

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
work.display();

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

for (var i = 0; i < projects.projects.length; i++) {
  //
    $("#projects").append(HTMLprojectStart)
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedProjectDescription);

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









