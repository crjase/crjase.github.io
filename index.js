// Reusable image display
function show_img(src, width, height, alt) {
    let br1 = document.createElement('br')
    let br2 = document.createElement('br')
    let img = document.createElement('img')
    img.src = src
    img.width = width
    img.height = height
    img.alt = alt
    document.getElementById("center").appendChild(br1);
    document.getElementById("center").appendChild(br2);
    document.getElementById("center").appendChild(img);
};

// Create rickroll button
let rolled = 1

let rickroll_button = document.createElement("button");
rickroll_button.id = "rickroll_button";
rickroll_button.name = "Rick Astley";
rickroll_button.innerHTML = "Rick Astley";
rickroll_button.type = "submit";
rickroll_button.addEventListener("click", function () {
    if (rolled < 4) {
        console.log('Successfully Rick Rolled', rolled, 'Times')
        rolled += 1

        show_img(
            'https://c.tenor.com/ULJn9_2K17UAAAAi/wazatoz-rick-roll.gif',
            400, 250,
            'alt text'
        )
    } else {
        alert('You have rick rolled yourself too many times! PLEASE, stop, for the greater good of your mental state')
    }
});
document.getElementById("center").appendChild(rickroll_button)