fetch('js/json/movies.json')
  .then(response => response.json())
  .then(data => {
      // Do something with your data
        var json = data;
        loaded(json);
});


function loaded(json) {
    var container = document.querySelector('.movies .grid-container');
    
    container.innerHTML = "";
    for (var movie of json) {

        
        var movieDiv = document.createElement('section');
        container.appendChild(movieDiv);
        movieDiv.classList.add("movie");
        movieDiv.setAttribute('id', movie.title);

        var yt = document.createElement('iframe');
        yt.src = youtube.generateEmbedUrl(movie.trailer);
        movieDiv.appendChild(yt);

        fetch ('http://www.omdbapi.com/?t=' + movie.title + '&apikey=503b9df0')
        .then(response => {
            return response.json()
            
        }) 
        .then(data => {
            fetchLoad(data);
            
        }) 
        .catch(function(error){
            console.log(error);
            
        });
        
 
        function fetchLoad(json) {
            //var container = document.querySelectorAll('.movie');
            //for (var wrapper of container) {
                var wrapper = document.getElementById(json.Title);
                var temp = document.createElement('div');
                    temp.innerHTML += `
                    <img src="${json.Poster} alt="">
                    <h3>${json.Title}</h3>
                    `;
                temp.classList.add('imageclip');
                wrapper.appendChild(temp);
                var textbox = document.createElement('div');
                    textbox.innerHTML = `
                    <p><span>Released:</span>${json.Released}</p>
                    <p><span>Resume:</span>${json.Plot}</p>
                    <p><span>Rating:</span>${json.imdbRating}</p>
                    `;
                textbox.classList.add('textbox');
                wrapper.appendChild(textbox);
            //}

            /*var temp = container.innerHTML += `
                    <div class="imageclip">
                    <img src="${json.Poster}" alt="">
                    <h3>
                        ${json.Title}
                    </h3>
                    </div>
                    <p>
                        <span>Release date</span>: ${json.Released}, 
                    </p>
                    <p>
                        <span>Resume</span>: ${json.Plot} 
                    </p>
                        <p><span>Rating</span>: ${json.imbdRating} 
                    </p>
            `;*/
    
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
                        movie.addEventListener('click', toggleClass);
                    }
    }
    
    
    
}


        let youtube = {
            getIdFromUrl: function (videoIDorURL) {
                if (videoIDorURL.indexOf('http') === 0) {
                    return videoIDorURL.split('v=')[1];
                } else {
                    return videoIDorURL;
                    
                }
    
            },
            generateThumbnailUrl: function (videoIDorURL) {
                return 'https://i3.ytimg.com/vi/' + youtube.getIdFromUrl(videoIDorURL) + '/default.jpg';
            },
            generateEmbedUrl: function (videoIDorURL) {
                return 'https://www.youtube.com/embed/' + youtube.getIdFromUrl(videoIDorURL);
            }
        }