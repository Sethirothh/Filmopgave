fetch('js/json/movies.json')
  .then(response => response.json())
  .then(data => {
      // Do something with your data
        var json = data;
        printLoaded(json);
});


function printLoaded(json) {
    var print = document.querySelector('.print');
    print.innerHTML = "";
    for (var movie of json) {
        print.innerHTML += `
        <div class="movie">
        <div class="image">
            <img src="/img/${movie.img}" alt="">
        </div>
            <h2>
                ${movie.title}
            </h2>
            <p>
            <h4>
                Udgivet: ${movie.release}
            </h4>
                ${movie.description}     
            </p>
            <p>
                Skuespillere: ${splitArray(movie.actor)}
            </p>
        </div>  
        `;
    }
}
