// Array Declarations
var movies = document.querySelectorAll('.movie'); 
var movieArray = [];

//Collect Array Data
Array.from(movies).forEach(function(e){
    movieArray.push(e);
    return movieArray;
})

//Loop through Array
for (const movie of movieArray) {
    //Call function per click
      movie.addEventListener('click', toggleClass);
}

//Function called by click
function toggleClass() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
}