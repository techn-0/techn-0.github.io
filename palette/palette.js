const colors = document.getElementsByClassName('color');

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('mouseover', function() {
        document.body.style.backgroundColor = this.style.backgroundColor;
    }); 
}