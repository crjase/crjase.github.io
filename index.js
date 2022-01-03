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

function officially_rolled() {
    let h1 = document.createElement('h1')
    let img = document.createElement('img')
    h1.textContent = 'LOOK WHAT YOU\'VE DONE'
    img.src="Storage/rick.gif"
    img.width = 100
    img.height = 200
    img.alt = 'trolled'
    document.getElementById("center").appendChild(h1);
    document.getElementById("center").appendChild(img);
}

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
            rel = "Storage/rick.gif",
            400, 250,
            'alt text'
        )
    } else {
        alert('You have rick rolled yourself too many times! PLEASE, stop, for the greater good of your mental state')
    
        // Remove 'rick astley' button
        document.getElementById('rickroll_button').remove();

        // Replace 'rick astley' button with 'give me more rolls' button
        let more_rolls = document.createElement('button')
        more_rolls.id = 'more_rolls'
        more_rolls.name = 'more_rolls'
        more_rolls.innerHTML = 'GIVE ME MORE RICK ROLES'
        more_rolls.addEventListener('click', function () {
            document.querySelectorAll("body > * > *").forEach((e) => { e.remove() });
            // re-create <center>
            document.getElementsByTagName("main").appendChild(YourCenterElementAgainHere);
            // one, last roll...
            officially_rolled()
        });
        document.getElementById("center").appendChild(more_rolls)
    }
});
document.getElementById("center").appendChild(rickroll_button)

/* Thank you

let rickroll_button = document.createElement("button");
rickroll_button.id = "rickroll_button";
rickroll_button.name = "Rick Astley";
rickroll_button.innerHTML = "Rick Astley";
rickroll_button.type = "submit";
rickroll_button.addEventListener("click", onRickrollClicked);

function onRickrollClicked() {
    if (rolled < 4) {
        console.log('Successfully Rick Rolled', rolled, 'Times')
        rolled += 1

        show_img(
            rel = "Storage/rick.gif",
            400, 250,
            'alt text'
        )
    } else {
        alert('You have rick rolled yourself too many times! PLEASE, stop, for the greater good of your mental state')
    
        let more_rolls = document.getElementById('rickroll_button');
        more_rolls.removeEventListener(onRickrollClicked);

        // Replace 'rick astley' button with 'give me more rolls' button
        more_rolls.id = 'more_rolls'
        more_rolls.name = 'more_rolls'
        more_rolls.innerHTML = 'GIVE ME MORE RICK ROLES'
        more_rolls.addEventListener('click', function () {
            alert('this button is working :D')
        });
        
        document.getElementById("center").appendChild(more_rolls)
    }
}
*/