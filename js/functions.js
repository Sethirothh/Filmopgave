
//Function called by click
function toggleClass() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
}

function splitArray(array) {
    var arr = array.toString();
    var split = arr.split(',').join(', ');
    return split;
}



