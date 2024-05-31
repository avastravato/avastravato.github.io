let links = document.getElementsByClassName('links');
let clickedLink = null;
let home = links[0];

/* Set default styling for all links, set initial link to home when deployed */
function setDefaultStyling() {
    for(let i = 0; i < links.length; i++) {
        links[i].style.color = '#bbb';
        links[i].style.backgroundColor = 'white';
        links[i].style.borderRadius = '';
    }
    home.style.color = 'black';
    home.style.backgroundColor = '#ddd';
    home.style.borderRadius = '50px';
    clickedLink = home;
}

/* Reset other links to default styling, update clicked link to target styling */
function newSection() {
    for(let i = 0; i < links.length; i++) {
        links[i].style.color = '#bbb';
        links[i].style.backgroundColor = 'white';
        links[i].style.borderRadius = '';
    }
    this.style.color = 'black';
    this.style.backgroundColor = '#ddd';
    this.style.borderRadius = '50px';
    clickedLink = this;
}

/* Link text is darker when hovered over */
function navHoverOn() {
    this.style.color = 'black';
}

/* Link text resets once hovered off */
function navHoverOff() {
    if(this !== clickedLink) {
        this.style.color = '#bbb';
    }
}

/* Call setDefaultStyling when the page loads */
document.addEventListener('DOMContentLoaded', setDefaultStyling);

/* Apply other mods to all links */
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', newSection);
    links[i].addEventListener('mouseover', navHoverOn);
    links[i].addEventListener('mouseout',navHoverOff);
}