﻿"use strict";

var resume = (function () {
    function resume() {
        this.name = "Paul Bakery";
        this.currentTitle = "IT Technician";
        this.contacts = [{
            label: "Email Address",
            value: "paulbakery@yahoo.com"
        }, {
            label: "Phone Number",
            value: "0745643657"
        }, {
            label: "Twitter",
            value: "@paulbakery"
        }];
        this.studies = [{
            value: "SMB Technical",
            subjects: "A+, N+, Systems Support, PC Maintenance, Professional Competence, Systems and Principles",
            dates: "25st January 2013 - 23rd December 2014"
        }, {
            value: "GBH Technology Institude",
            subjects: "Introduction to Networking, , Introduction to Programming, Introduction to Systems Development, Operating systems",
            dates: "18th January 2012 - 14th December 2012"
        }, {
            value: "The Great High School",
            subjects: "Mathematics, English, Afrikaans, Accounting, Business studies, Computer Studies",
            dates: "16th January 2011 - 17th December 2011"
        }];
        this.workHistory = [{
            companyName: "GB Trading",
            duties: "Help desk",
            duration: "18th January 2015 to 14th June 2015"
        }, {
            companyName: "The Solution Company",
            duties: "IT Technician",
            duration: "1st July 2015 to 14th December 2015"
        }];
        this.skills = ["Operating Systems", "Networking", "Hardware and Software", "Problem-solving", "Work under pressure"];
        this.references = [{
            Name: "Jacob Khoza",
            phonenumber: "+27 123 1234",
            company: "GB Trading",
            role: "Senior Technical Support Lead",
            email: "jacob.khoza@gbtrading.co.za"
        }, {
            Name: "Thandi Zwane",
            phonenumber: "+27 743 2344",
            company: "The Solution Company",
            role: "Senior Technical Director",
            email: "thandi.zwane@yahoo.co.za"
        }];
    }
    return resume;
})();
//# sourceMappingURL=resume.js.map

