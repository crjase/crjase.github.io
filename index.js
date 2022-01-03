// Reusable image display
function show_img(src, width, height, alt) {
    let img = document.createElement('img')
    img.src = src
    img.width = width
    img.height = height
    img.alt = alt

    document.getElementById("center").appendChild(img);
};

// Create rickroll button
let rickroll_button = document.createElement("button");
rickroll_button.id = "rickroll_button";
rickroll_button.name = "Rick Astley";
rickroll_button.innerHTML = "Rick Astley";
rickroll_button.type = "submit";
rickroll_button.addEventListener("click", function () {
    show_img(
        'https://github.com/crjase/RenaiCirculation-Theme/blob/main/RenaiCirculation.png?raw=true',
        400, 250,
        'alt text'
    )
});
document.getElementById("center").appendChild(rickroll_button)