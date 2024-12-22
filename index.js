const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    let image_url = "https://i.ytimg.com/vi/_7HKe7nsF18/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAH0pLcIrVKAqbfk2_ub3N-E6McRQ";
    let video_duration = "45:56";
    let video_title = "Javascript basics to Advanced course in hindi free";
    let channel_name = "KaranSharma";
    let video_views = 4567891;
    let uploaded_time = "5 Months ago";
    
    const parentContainer = document.querySelector(".parent");
    
    // ---------creating elements ------------

    // Creating container div
    let container = document.createElement("div");
    container.className = "container";
    
    // Creating image element
    let image = document.createElement("img");
    image.className = "image"; 
    image.src = image_url;  // Setting image source
    
    // Creating duration element
    let duration = document.createElement("span");
    duration.className = "duration";
    duration.innerHTML = video_duration;
    let colr = "rgba(30, 29, 29, 0.481)";
    duration.style.backgroundColor = colr;
    
    // Creating card div
    let card = document.createElement("div");
    card.className = "card";
    
    // Creating title span
    let title = document.createElement("span");
    title.className = "title";
    title.innerHTML = video_title;
    
    // Creating about div
    let about = document.createElement("div");
    about.className = "about";
    
    // Creating cname span (channel name)
    let cname = document.createElement("span");
    cname.className = "cname";
    cname.innerHTML = channel_name;
    
    // Creating views span
    let views = document.createElement("span");
    views.className = "views";
    if (video_views >= 1000000) {
        views.innerHTML = Math.ceil(video_views / 1000000) + "M"; // Format in millions
    } else if (video_views >= 1000) {
        views.innerHTML = Math.ceil(video_views / 1000) + "K"; // Format in thousands
    } else {
        views.innerHTML = video_views; // Just display the original number
    }
    // views.innerHTML = video_views;
    
    // Creating time span (uploaded time)
    let time = document.createElement("span");
    time.className = "time";
    time.innerHTML = uploaded_time;

    // ----appending elements -------
    // Appending container to parent container
    parentContainer.append(container);
    
    // Appending image to container
    container.append(image);

    // Adding duration to container
    container.append(duration);

    // Adding card to container
    container.append(card);
    
    // Adding title to card
    card.append(title);

    // Appending about to card
    card.append(about);

    // Appending cname (channel name), views, and time to about
    about.append(cname);
    about.append(views);
    about.append(time);
});
