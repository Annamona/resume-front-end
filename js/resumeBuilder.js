/* 
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Anna Monacelli",
    "role": "Web Developer",
    "contacts": {
        "mobile": "0049 15228725790",
        "email": "anna.monacelli@gmail.com",
        "github": "",
        "twitter": "",
        "location": "Birkenheide, Rheinland-pflaz, Deutschland"
    },
    "welcomeMessage": "Welcome everybody, I am a Web Entusiast",
    "skills": ["Juristin", "ads evaluator", "web developer"],
    "biopic": "images/fry.jpg", //url
    "display": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);


        var currentSkills = $(HTMLskillsStart);
        $("#header").append(currentSkills);
        for (skillsIndex in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skillsIndex]);
            $("#skills").append(formattedSkills);
        }
    }
};

bio.display();

var education = {
    "schools": [{
        "name": "Universita degli studi di Roma di Tor Vergata",
        "location": "Roma, Italy",
        "degree": "Masters",
        "major": "Law",
        "dates": "2004-2010",
        "url": "http://web.uniroma2.it/"
    }, {
        "name": "Liceo Classico Claudio Eliano",
        "location": "Palestrina, Italy",
        "degree": "masters",
        "major": "Umanistic",
        "dates": "2004",
        "Url": "http://www.iiselianoluzzatti.gov.it/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "02-2017",
        "url": "www.udacity.com",
    }],
    "display": function() {


        for (educationIndex in education.schools) {
            var currentEducation = $(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[educationIndex].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[educationIndex].degree);
            currentEducation.append(formattedSchoolName + formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[educationIndex].dates);
            currentEducation.append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[educationIndex].location);
            currentEducation.append(formattedSchoolLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[educationIndex].major);
            currentEducation.append(formattedSchoolMajor);

            $("#education").append(currentEducation);
        }

        $("#education").append(HTMLonlineClasses);

        for (onlineClassesIndex in education.onlineCourses) {
            var currentOnlineClasses = $(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClassesIndex].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClassesIndex].school);
            currentOnlineClasses.append(formattedOnlineTitle + formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClassesIndex].dates);
            currentOnlineClasses.append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClassesIndex].url);
            currentOnlineClasses.append(formattedOnlineURL);

            $("#education").append(currentOnlineClasses);
        }
    }
};

education.display();

var work = {
    "jobs": [{
        "employer": "Studio Tecnico Legale Ks",
        "title": "collaborator insurance",
        "location": "Rom, Italy",
        "dates": "2005-2006",
        "description": "Management of Claims Auto Sector and Gesture of backpayment for damage directly with the indurance company of the counterparty"

    }, {
        "employer": "Autogrill s.p.a",
        "title": "Barman for a company situated on the Italian Highway",
        "location": "Rom, Italy",
        "dates": "2009-2010",
        "description": "Pluriservices Operator"
    }, {
        "employer": "SCS/CNOS - Italian Civil Service",
        "title": "Child Teacher/Educator",
        "location": "Rome, Italy",
        "dates": "2010-2011",
        "description": "Volonteers c/o Oratory Santa Maria Ausiliatrice in Rome. Main role was to educate child and young to live together and respect the rules of this place. Overall to the collaborationbetween younger and smaller. Teach them using games, being an assistant for them in the afterschool."
    }, {
        "employer": "leapforce",
        "title": "Ads evaluator",
        "location": "Deutschland",
        "dates": "in course",
        "description": "Value ads"

    }],
    "display": function() {


        for (jobsIndex in work.jobs) {
            var currentJobs = $(HTMLworkStart);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobsIndex].employer);
            var formattedWorktitle = HTMLworkTitle.replace("%data%", work.jobs[jobsIndex].title);
            currentJobs.append(formattedWorkEmployer + formattedWorktitle);

            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[jobsIndex].location);
            currentJobs.append(formattedWorkLocation);

            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[jobsIndex].dates);
            currentJobs.append(formattedWorkDates);

            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[jobsIndex].description);
            currentJobs.append(formattedWorkDescription);

            $("#workExperience").append(currentJobs);
        }
    }
};


work.display();

var project = {
    "projects": [{
        "title": "Udacity Resume Project",
        "dates": "2017-2018",
        "description": "Dynamic personal resume rendered with JavaScript",
        "images": "images/197x148.gif"
    }],

    "display": function() {


        for (projectIndex in project.projects) {
            var currentProjects = $(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[projectIndex].title);
            currentProjects.append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects[projectIndex].dates);
            currentProjects.append(formattedProjectDates);

            var formattedWorkDescription = HTMLprojectDescription.replace("%data%", project.projects[projectIndex].description);
            currentProjects.append(formattedWorkDescription);

            var formattedWorkImages = HTMLprojectImage.replace("%data%", project.projects[projectIndex].images);
            currentProjects.append(formattedWorkImages);

            $("#projects").append(currentProjects);
        }

    }
};

project.display();


$("#mapDiv").append(googleMap);