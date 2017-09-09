var bio = {
    "name": "Anna Monacelli",
    "role": "Web Developer",
    "contacts": {
        "mobile": "0049 15228725790",
        "email": "anna.monacelli@gmail.com",
        "github": "Annamona",
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
        $("#topContacts, #footerContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts, #footerContacts").append(formattedEmail);

        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts, #footerContacts").append(formattedGitHub);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedLocation);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);


        var currentSkills = $(HTMLskillsStart);
        $("#header").append(currentSkills);
        bio.skills.forEach(function(value) {
            var formattedSkills = HTMLskills.replace("%data%", value);
            $("#skills").append(formattedSkills);
        });
    }
};

bio.display();

var education = {
    "schools": [{
        "name": "Universita degli studi di Roma di Tor Vergata",
        "location": "Roma, Italy",
        "degree": "Masters",
        "majors": ["Law"],
        "dates": "2004-2010",
        "url": "http://web.uniroma2.it/"
    }, {
        "name": "Liceo Classico Claudio Eliano",
        "location": "Palestrina, Italy",
        "degree": "masters",
        "majors": ["Umanistic"],
        "dates": "2004",
        "url": "http://www.iiselianoluzzatti.gov.it/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "02-2017",
        "url": "www.udacity.com",
    }],
    "display": function() {

        education.schools.forEach(function(school) {
            var currentEducation = $(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            currentEducation.append(formattedSchoolName + formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            currentEducation.append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            currentEducation.append(formattedSchoolLocation);

            school.majors.forEach(function(major) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
                currentEducation.append(formattedSchoolMajor);
            });
            $("#education").append(currentEducation);
        });

        $("#education").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(onlineCourse) {
            var currentOnlineClasses = $(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            currentOnlineClasses.append(formattedOnlineTitle + formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            currentOnlineClasses.append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            currentOnlineClasses.append(formattedOnlineURL);

            $("#education").append(currentOnlineClasses);
        });
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

        work.jobs.forEach(function(job) {
            var currentJobs = $(HTMLworkStart);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedWorktitle = HTMLworkTitle.replace("%data%", job.title);
            currentJobs.append(formattedWorkEmployer + formattedWorktitle);

            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            currentJobs.append(formattedWorkLocation);

            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            currentJobs.append(formattedWorkDates);

            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
            currentJobs.append(formattedWorkDescription);

            $("#workExperience").append(currentJobs);
        });
    }
};


work.display();

var project = {
    "projects": [{
        "title": "Udacity Resume Project",
        "dates": "2017-2018",
        "description": "Dynamic personal resume rendered with JavaScript",
        "images": ["images/197x148.gif", "images/197x148.gif"]
    }],

    "display": function() {

        project.projects.forEach(function(project) {
            var currentProjects = $(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            currentProjects.append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            currentProjects.append(formattedProjectDates);

            var formattedWorkDescription = HTMLprojectDescription.replace("%data%", project.description);
            currentProjects.append(formattedWorkDescription);

            project.images.forEach(function(image) {
                var formattedWorkImages = HTMLprojectImage.replace("%data%", image);
                currentProjects.append(formattedWorkImages);
            });
            $("#projects").append(currentProjects);
        });

    }
};

project.display();


$("#mapDiv").append(googleMap);