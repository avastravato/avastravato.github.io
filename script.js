let links = document.getElementsByClassName('links');
let clickedLink = null;

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

function navHoverOn() {
    this.style.color = 'black';
}

function navHoverOff() {
    if(this !== clickedLink) {
        this.style.color = '#bbb';
    }
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', newSection);
    links[i].addEventListener('mouseover', navHoverOn);
    links[i].addEventListener('mouseout',navHoverOff);
}

