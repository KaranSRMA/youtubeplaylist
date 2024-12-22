function createcard(image, duration, title, cname, views, time) {
    // Get elements (assuming there is only one element for each class)
    let img = document.getElementsByClassName("image")[0]; // Access first image element
    img.src = image;

    let dur = document.getElementsByClassName("duration")[0]; // Access first duration element
    dur.innerHTML = duration;
    let colr = "rgba(30, 29, 29, 0.481)";
    dur.style.backgroundColor = colr;

    let titl = document.getElementsByClassName("title")[0]; // Access first title element
    titl.innerHTML = title;

    let chname = document.getElementsByClassName("cname")[0]; // Access first channel name element
    chname.innerHTML = cname;

    let view = document.getElementsByClassName("views")[0]; // Access first views element
    // Format views number
    if (views >= 1000000) {
        view.innerHTML = Math.ceil(views / 1000000) + "M"; // Format in millions
    } else if (views >= 1000) {
        view.innerHTML = Math.ceil(views / 1000) + "K"; // Format in thousands
    } else {
        view.innerHTML = views; // Just display the original number
    }

    let tim = document.getElementsByClassName("time")[0]; // Access first time element
    tim.innerHTML = time + " months ago";
}

// Prompt for user inputs
let image = prompt("Enter image url");
let duration = prompt("Enter duration");
let title = prompt("Enter title");
let cname = prompt("Enter channel name");
let views = prompt("Enter views");
let time = prompt("Enter time");

// Call the function to create the card
createcard(image, duration, title, cname, views, time);
