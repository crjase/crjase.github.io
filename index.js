// Reusable image display
function show_img(src, width, height, alt) {
    let br1 = document.createElement('br')
    let br2 = document.createElement('br')
    let img = document.createElement('img')
    img.src = src
    img.width = width
    img.height = height
    img.alt = alt
    document.getElementById("center").appendChild(img);
    document.getElementById("center").appendChild(br1);
    document.getElementById("center").appendChild(br2);
};

function officially_rolled() {
    let h1 = document.createElement('h1')
    let img = document.createElement('img')
    h1.textContent = 'ABSOLUTE RICK ROLL'
    h1.style = "color:whitesmoke;"
    img.src="Storage/rick.gif"
    img.width = 1000
    img.height = 1000
    img.alt = 'trolled'
    document.body.style.backgroundImage = "url('Storage/rick_background.png')";
    document.getElementById("center").appendChild(h1);
    document.getElementById("center").appendChild(img);
}

// Create rickroll button
let rolled = 1
let bre1 = document.createElement('br')
let bre2 = document.createElement('br')
let rickroll_button = document.createElement("a");
rickroll_button.classList = "hoverbtn";
rickroll_button.href = "#";
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
        alert('Are you sure about this one, last... buton?')
    
        // Remove 'rick astley' button
        document.getElementById('rickroll_button').remove();

        // Replace 'rick astley' button with 'give me more rolls' button
        let more_rolls = document.createElement('a')
        more_rolls.classList = "hoverbtn"
        more_rolls.href = "#"
        more_rolls.id = 'more_rolls'
        more_rolls.name = 'more_rolls'
        more_rolls.innerHTML = 'GIVE ME MORE RICK ROLES'
        more_rolls.addEventListener('click', function () {
            document.querySelectorAll("body > * > *").forEach((e) => { e.remove() });
               // re-create <center>
               let center = document.createElement('center');
               center.setAttribute('id', 'center');
               document.getElementsByTagName('main')[0].appendChild(center)
               // one, last roll...
               officially_rolled()
           });
        document.getElementById("center").appendChild(more_rolls)
    }
});
document.getElementById("center").appendChild(rickroll_button)
document.getElementById("center").appendChild(bre1);
document.getElementById("center").appendChild(bre2);