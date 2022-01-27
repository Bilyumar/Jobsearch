<!--this is to give the selected documents javascript action-->
const offerPageLink = document.querySelector(".offer_link");
const offerPage = document.querySelector(".offers_page");
const homePage = document.querySelector(".home_page");
const logo = document.querySelector(".logo");
const searchJobTitle = document.querySelector(".jobtitle");
const searchJobLocation = document.querySelector(".joblocation");
const jobSearch = document.querySelector("#job_search");
const jobOfferSec = document.querySelector(".job_offers");
const applyPage = document.querySelector(".apply_page");
const applicationForm = document.querySelector(".application_form");

let apply;
let search = [];
let availableJobs = [
    (sotwareEngineering = {
        jobName: "software engineering",
        location: "abuja",
        pay: "$53,000 - $80,000",
    }),
    (plumber = {
        jobName: "Plumber",
        location: "abia",
        pay: "15,000 - 40,000",
    }),
    (cleaner = {
        jobName: "Plumber",
        location: "abia",
        pay: "15,000 - 40,000",
    }),
    (plumber = {
        jobName: "Plumber",
        location: "abia",
        pay: "15,000 - 40,000",
    }),
];
homePage.style.display = "flex";
offerPage.style.display = "none";
applyPage.style.display = "none";

const displayPage = function (page) {
    if (page === offerPage) {
        offerPage.style.display = "flex";
        applyPage.style.display = "none";
        homePage.style.display = "none";
    }
    if (page === homePage) {
        homePage.style.display = "flex";
        offerPage.style.display = "none";
        applyPage.style.display = "none";
    }
    if (page === applyPage) {
        homePage.style.display = "none";
        offerPage.style.display = "none";
        applyPage.style.display = "flex";
    }
};

const renderApplyPage = function (profession) {
    const html = `
        <h3>Apply for <span class="job_tag">${profession}</span></h3>
        <form action="">
            <input placeholder="Name" type="text" name="" id="" />
            <input placeholder="Email" type="email" name="" id="" />
            <input type="file" name="" id="" />
            <input class="" type="submit" name="" id="" />
        </form>`;
    applicationForm.insertAdjacentHTML("beforeend", html);
};
const renderSearch = function (searchItem = availableJobs) {
    displayPage(offerPage);
    searchItem.forEach((e) => {
        console.log(jobOfferSec);
        const html = `
        <div data-job="${e.jobName}" class="job_item">
            <div class="job_title">${e.jobName}</div>
            <div class="job_pay">${e.pay}</div>
            <div class="job_location">${e.location}</div>
            <button class="apply_btn">Apply</button>
        </div>`;
        jobOfferSec.insertAdjacentHTML("beforeend", html);
    });
    const applyBtn = document.querySelectorAll(".apply_btn");

    applyBtn.forEach((e) =>
        e.addEventListener("click", function (e) {
            // displayPage(applyPage);
            apply = e.target.closest(".job_item").dataset.job;
            renderApplyPage(apply);
            displayPage(applyPage);
        })
    );
};
offerPageLink.addEventListener("click", function (e) {
    e.preventDefault();
    displayPage(offerPage);
    renderSearch(availableJobs);
});
logo.addEventListener("click", function (e) {
    displayPage(homePage);
});
jobSearch.addEventListener("click", function (e) {
    e.preventDefault();
    const inputedTitle = searchJobTitle.value.toLowerCase();
    const inputedLocation = searchJobLocation.value.toLowerCase();
    console.log();
    console.log();
    search = availableJobs.filter((e) => {
        if (e.jobName === inputedTitle) return e;
    });
    availableJobs.filter((e) => {
        if (e.location === inputedLocation) search.push(e);
    });
    console.log(search);
    renderSearch(search);
});
