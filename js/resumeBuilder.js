var bio = {
  "name": "Matt Bledsoe",
  "role": "Web Developer",
  "contacts": {
    "email": "mattbledsoe2@gmail.com",
    "github": "monkeyshoulders",
    "twitter": "@monkysholders",
    "location": "Charlotte, NC",
    "mobile": "867-5309"
  },
  "biopic": "images/profilepic.jpg",
  "welcomeMessage": "Welcome to my resume. I am currently a stay at home Dad of two kids under 3 that works weekend nights bartending. I'm also teaching my myself Web Development. I've got multitasking skills like you wouldn't believe.",
  "skills": ["HTML5/CSS3", "JavaScript", "AngularJS", "ReactJS", "NodeJS"]
};

var work = {
  "jobs": [{
      "employer": "Self Employed",
      "title": "Stay at home Dad",
      "location": "Charlotte, NC",
      "dates": "2015-Present ",
      "description": "Teaching myself how to become a Web Developer while raising to kids under 2 years old."
    },
    {
      "employer": "Web Don",
      "title": "Counter Sales",
      "location": "Charlotte, NC",
      "dates": "2014-2015 ",
      "description": "Assist customers in completing their custom countertop orders. Ensuring that jobs are on time by tracking materials and labor. Designing custom coutertops and working with customers to ensure their satisfaction also aligns with NC building codes and product limitations"
    },
    {
      "employer": "Winnebago Co. Sheriffs",
      "title": "Corrections Officer",
      "location": "Rockford, IL",
      "dates": "2007-2013 ",
      "description": "Ensure the safety of the public and the incarcerated. Transporting inmates to and from various appointments including court and medical visits. Processing in custody persons through the intake and release procedures as per Illinois State and Federal guidelines"
    },
  ]
};

var education = {
  "schools": [{
      "name": "Catawba College",
      "dates": "2002-2003",
      "location": "Salisbury, NC",
      "degree": "N/A",
      "majors": ["Musical Theatre"],
      "url": "http://www.Catawba.edu"
    },
    {
      "name": "CPCC",
      "location": "Charlotte, NC",
      "degree": "N/A",
      "majors": ["Theatre"],
      "dates": "2001-2002",
      "url": "http://www.cpcc.edu",
    }
  ],
  "onlineCourses": [{
      "school": "Udacity",
      "title": "Front-End Web Development Nanodegree",
      "dates": "Active",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "school": "Udacity",
      "title": "How to Use Git and github",
      "dates": "April 2017",
      "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    },

    {
      "school": "Udemy",
      "title": "Learn and Understand AngularJS",
      "dates": "Active",
      "url": "https://www.udemy.com/learn-angularjs"
    },
    {
      "school": "Udemy",
      "title": "Learn and Understand NodeJS",
      "dates": "Active",
      "url": "https://www.udemy.com/learn-nodejs"
    },
    {
      "school": "Udemy",
      "title": "SQL for Newbs- Data Analysis for Beginners",
      "dates": "March 2017",
      "url": "https://www.udemy.com/sql-for-newbs"
    }
  ]
};

var projects = {
  "projects": [

    {
      "title": "Online Portfolio",
      "dates": "April 2017",
      "description": "Online portfolio of work for Udacity's Front-End Web Developer " +
        "Nanodegree.",
      "images": ["images/screenshot.png"],
      "url": "https://github.com/monkeyshoulders/portfolio"
    },
  ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var i in bio.skills) {
    if (bio.skills.hasOwnProperty(i)) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }
}

for (var i in formattedContactInfo) {
  if (formattedContactInfo.hasOwnProperty(i)) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
  }
}

work.display = function() {
  if (work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    // for (var i in work.jobs) {
      // if (work.jobs.hasOwnProperty(i)) {
      for (var i = 0; i < work.jobs.length; i++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedEmployerWorkTitle);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedDatesWorked);
        $(".work-entry:last").append(formattedWorkDescription);
      }
    }
  };

projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);
    for (var j = 0; j < projects.projects[i].images.length; j++) {
      var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
      $(".project-entry:last").append(formattedProjectImage);
    }
  }
};

education.display = function() {
  for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajor);
  }

  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    for (var x in education.onlineCourses) {
      $("#education").append(HTMLschoolStart);
      if (education.onlineCourses.hasOwnProperty(x)) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title).replace("#", education.onlineCourses[i].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[x].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[x].url).replace("#", education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
      }
    }
  }
};

work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
