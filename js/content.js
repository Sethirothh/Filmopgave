fetch('js/json/movies.json')
  .then(response => response.json())
  .then(data => {
      // Do something with your data
        var json = data;
        loaded(json);
});

function loaded(json) {
    var container = document.querySelector('.grid-container');
    
    container.innerHTML = "";

    for (var movie of json) {
        container.innerHTML += `
            <div class="movie">
            <div class="imageclip">
                <img src="/img/${movie.img}" alt="">
                <h3>${movie.title}</h3>
            </div>
                <p>
                    ${movie.description}     
                </p>
            </div>
        `;
    }
    
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
        console.log(movie);
        movie.addEventListener('click', toggleClass);
    }

}



