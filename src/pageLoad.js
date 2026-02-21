import restImage from "./assets/images/restaurant.jpg";

function loadHome() {
    const content = document.getElementById("content");
    content.textContent = "";

    const introduction = document.createElement("div");
    introduction.classList.add("introduction");

    const heading = document.createElement("h1");
    heading.textContent = "Reconnect with your mom's cooking";

    const paragraph = document.createElement("p");
    paragraph.textContent = "We all have times, when after a hard work day, we would like some steamy, hot, delicious meal from our childhood. We make it possible here, at Wilsons. We have wide variety of dishes from all over the world. Come to us to expirience it by yourself.";
    
    introduction.appendChild(heading);
    introduction.appendChild(paragraph);

    const image = document.createElement("div");
    image.classList.add("image");

    const logo = document.createElement("img");
    logo.src = restImage;
    logo.alt = "Restaurant logo";

    image.appendChild(logo);

    content.appendChild(introduction);
    content.appendChild(image);
}

export default loadHome;