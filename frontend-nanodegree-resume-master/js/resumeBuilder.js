var bio = {
  "name": "Matt Bledsoe",
  "role": "Web Developer",
  "contacts": {
    "email": "mattbledsoe2@gmail.com",
    "github": "monkeyshoulders",
    "twitter": "@monkysholders",
    "location": "Charlotte, NC"
  },
  "picture": "images/profilepic.jpg",
  "welcomeMessage": "I'm a stay at home dad of two toddlers who thought it would be a great idea to start learning Web Development. You have no idea how bad I want this job. ",
  "skills": ["HTML5/CSS3", "JavaScript", "AngularJS", "ReactJS", "NodeJS"]
};

var work = {
  "jobs": [{
      "employer": "Self Employed",
      "title": "Stay at home Dad",
      "location": "Charlotte, NC",
      "datesWorked": "2015-Present ",
      "description": "Teaching myself how to become a Web Developer while raising to kids under 2 years old."
    },
    {
      "employer": "Web Don",
      "title": "Counter Sales",
      "location": "Charlotte, NC",
      "datesWorked": "2014-2015 ",
      "description": "Assist customers in completing their custom countertop orders. Ensuring that jobs are on time by tracking materials and labor. Designing custom coutertops and working with customers to ensure their satisfaction also aligns with NC building codes and product limitations"
    },
    {
      "employer": "Winnebago Co. Sheriffs",
      "title": "Corrections Officer",
      "location": "Rockford, IL",
      "datesWorked": "2007-2013 ",
      "description": "Ensure the safety of the public and the incarcerated. Transporting inmates to and from various appointments including court and medical visits. Processing in custody persons through the intake and release procedures as per Illinois State and Federal guidelines"
    },
  ]
};

var education = {
  "schools": [{
      "name": "Catawba College",
      "datesAttended": "2002-2003",
      "location": "Salisbury, NC",
      "degree": "N/A",
      "major": "Musical Theatre",
      "url": "http://www.Catawba.edu"
    },
    {
      "name": "CPCC",
      "location": "Charlotte, NC",
      "degree": "N/A",
      "major": "Theatre",
      "datesAttended": "2001-2002",
      "url": "http://www.cpcc.edu",
    }
  ],
  "onlineCourses": [{
      "school": "Udacity",
      "title": "Front-End Web Development Nanodegree",
      "completed": "Active",
      "url": ""
    },
    {
      "school": "Udacity",
      "title": "How to Use Git and github",
      "completed": "April 2017",
      "url": ""
    },

    {
      "school": "Udemy",
      "title": "Learn and Understand AngularJS",
      "completed": "Active",
      "url": ""
    },
    {
      "school": "Udemy",
      "title": "Learn and Understand NodeJS",
      "completed": "Active",
      "url": ""
    },
    {
      "school": "Udemy",
      "title": "SQL for Newbs- Data Analysis for Beginners",
      "completed": "March 2017",
      "url": ""
    }
  ]
};

var projects = {
  "projects": [

    {
      "title": "Online Portfolio",
      "datesWorked": "April 2017",
      "description": "Online portfolio of work for Udacity's Front-End Web Developer " +
        "Nanodegree.",
      "images": ["images/screenshot.png"],
      "url": "https://github.com/monkeyshoulders/portfolio"
    },
  ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


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


function displayWork() {

  if (work.jobs.length > 0) {

    $("#workExperience").append(HTMLworkStart);
    // changed line 34 may not be needed
    for (var i in work.jobs) {
      if (work.jobs.hasOwnProperty(i)) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

        $(".work-entry:last").append(formattedEmployerWorkTitle);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedDatesWorked);
        $(".work-entry:last").append(formattedWorkDescription);
      }
    }
  }
}

displayWork();


projects.display = function() {
  if (projects.projects.length > 0) {
    for (i in projects.projects) {
      if (projects.projects.hasOwnProperty(i)) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        for (var img in projects.projects[i].images) {
          if (projects.projects[i].images.hasOwnProperty(i)) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
            $(".project-entry:last").append(formattedProjectImage);
          }
        }
      }
    }
  }
};

projects.display();

education.display = function() {
  if (education.schools.length > 0 || education.onlineCourses.length > 0) {
    for (var i in education.schools) {
      if (education.schools.hasOwnProperty(i)) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);


        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
      }
    }

    if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for (var x in education.onlineCourses) {
        if (education.onlineCourses.hasOwnProperty(x)) {
          $("#education").append(HTMLschoolStart);
          var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title).replace("#", education.onlineCourses[i].url);
          var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school);
          var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[x].completed);
          var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[x].url).replace("#", education.onlineCourses[i].url);

          $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
          $(".education-entry:last").append(formattedOnlineDates);
          $(".education-entry:last").append(formattedOnlineURL);
        }
      }
    }
  }
};

education.display();

$("#mapDiv").append(googleMap);
