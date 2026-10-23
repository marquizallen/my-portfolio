const mainContainer = document.getElementById("mainContainer");
const homeLink = document.getElementById("homeLink");
const bioLink = document.getElementById("bioLink");
const projectLink = document.getElementById("projectLink");
const contactLink = document.getElementById("contactLink");

const myImage = document.getElementById('myImage');

async function loadPage(url) {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error("Failed to load page");
    }
    const html = await response.text();
    mainContainer.innerHTML = html;
}

async function isBioLoaded() {
    const response = await fetch("/biography.html");
    const html = await response.text();

    mainContainer.innerHTML = html;

    if (window.location.pathname === "/biography.html") {
        bioLink.classList.add("active");
        console.log("bio loaded");
    } else {
        bioLink.classList.remove("active");
        console.log("bio unloaded");
    }
}



/*
///----///
MAIN PAGES
//=====//
*/
bioLink.addEventListener('click',(e)=>{
    loadPage("/biography.html");
    isBioLoaded();
});

projectLink.addEventListener('click', (e)=>{
    loadPage("/projects.html");
});

contactLink.addEventListener('click', (e)=>{
    loadPage("/contacts.html");
});

homeLink.addEventListener('click',(e)=>{
    mainContainer.replaceChildren(myImage);

});

/**
 * -----------------\
 * PROJECTS PAGES |>>>>
 * -----------------/
 */

document.addEventListener("click",(e)=>{
    const timeframe = e.target.closest("#timeframe");
    if(timeframe) {
        loadPage("/html_files/project_divs/timeframe.html");
    }
});

document.addEventListener("click",(e)=>{
    const allStaff= e.target.closest("#allstaff");
    if(allStaff) {
        loadPage("/html_files/project_divs/allstaff.html")
    }
});

document.addEventListener("click", (e)=>{
    const loboticket = e.target.closest("#loboticket");
    if(loboticket) {
        loadPage("/html_files/project_divs/ticketing.html");
    }
});

document.addEventListener("click",(e)=>{
    const recipe = e.target.closest("#recipes");
    if(recipe){
        loadPage("/html_files/project_divs/recipe.html");
    }

});


