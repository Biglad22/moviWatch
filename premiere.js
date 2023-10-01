const upcoming = document.querySelector('.upcoming-movie-cards-main-container'); 
const upcomingCards = upcoming.querySelectorAll('.card-movie-main-container');

const action = document.querySelector('.action-movie-cards-main-container');
const actionCards = action.querySelectorAll('.card-movie-main-container');

const adventure = document.querySelector('.adventure-movie-cards-main-container');
const adventureCards = adventure.querySelectorAll('.card-movie-main-container');

const comedy = document.querySelector('.comedy-movie-cards-main-container');
const comedyCards = comedy.querySelectorAll('.card-movie-main-container');

const drama = document.querySelector('.drama-movie-cards-main-container');
const dramaCards = drama.querySelectorAll('.card-movie-main-container');

const romance = document.querySelector('.romance-movie-cards-main-container');
const romanceCards = romance.querySelectorAll('.card-movie-main-container');

//fetch movies from API
let movies= [];
(async()=>{
    //stores page number
    let p = 1;

    // movies API request
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODYwZjNkNGVkM2FjNTA5MjBkYzRiYzExNjlkMDAwMiIsInN1YiI6IjY0NjQ1ZjdkZjQ4YjM0MDBlM2MwM2QyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qPI6QMMyuuaMqnUdaKymW5lPJc5WfaxuKY-hmi92JwI'
        }
    };

    while(p < 5){
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${p}`, options)
        const result = await response.json();
        const data = await result.results; 

        movies = movies.concat(data);
        p++;
    };
    console.log(movies);

    const opt = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODYwZjNkNGVkM2FjNTA5MjBkYzRiYzExNjlkMDAwMiIsInN1YiI6IjY0NjQ1ZjdkZjQ4YjM0MDBlM2MwM2QyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qPI6QMMyuuaMqnUdaKymW5lPJc5WfaxuKY-hmi92JwI'
        }
    };
      
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', opt);
    const result = await  response.json();
    const data = result.genres;
    console.log(data);


    //gets today's date
    const actualMon = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    const date = new Date;

    const month = date.getMonth();
    const todayMonth = actualMon[month];

    const toDay = date.getDay();

    //find upcoming movies
    const upcomingMovie = await (async ()=>{
        //iterates through movies list
        for (i in movies){

            //handles and breaks down date 
            let thisMovDate = movies[i].release_date;
            thisMovDate = thisMovDate.split('-');

            //gets the movies release day
            let thisMovDay = Number(thisMovDate[0]);
            let thisMovMonth = thisMovDate[1];

            if (thisMovMonth[0] == 0 ){
                thisMovMonth = Number(thisMovMonth[1]);
            }else{
                thisMovMonth = Number(thisMovMonth);
            };
             

            let n = 0;

            //check citeria for display
            if(thisMovDay > toDay && (thisMovMonth == month || thisMovMonth > todayMonth )){
                if (n < upcomingCards.length){
                    upcomingCards[n].querySelector('.card-movie-img').src = `https://image.tmdb.org/t/p/original${movies[i].poster_path}`;
                    upcomingCards[n].querySelector('.card-movie-name').src = movies[i].title;
                    upcomingCards[n].querySelector('.watch-date').src = movies[i].release_date;
                }else{
                    break;
                }
            }else{
                //do nothing
            };
        };
    })();

    //find movies
    const genreSelector = (cards,genre) =>{
        //iterates through movies list
        for (i in movies){

            //handles and breaks down date 
            let thisMovDate = movies[i].release_date;
            thisMovDate = thisMovDate.split('-');

            //gets the movies release day
            let thisMovDay = thisMovDate[0];
            let thisMovMonth = thisMovDate[1];
             

            let n = 0;

            let monthDif = thisMovMonth - todayMonth;
            if (monthDif === 0){
                if (thisMovDay < toDay){
                    thisMovDay = 'good to go';
                }
            }else if(monthDif < 0){
                thisMovDay = 'not good to go';
            }

            let thisGenre = movies.genre.toLowerCase(); 

            //check citeria for display
            if((monthDif < 2 || monthDif ==='good to go') && thisGenre === genre){
                if (n < cards.length){
                    cards[n].querySelector('.card-movie-img').src = `https://image.tmdb.org/t/p/original${movies[i].poster_path}`;
                    cards[n].querySelector('.card-movie-name').innerText = movies[i].title;
                    cards[n].querySelector('.watch-date').innerText = movies[i].release_date;
                    cards[n].querySelector('.card-movie-rating').innerText = movies[i].vote_average;

                }else{
                    break;
                }
            }else{
                //do nothing
            };
        };
    };

    //for action movies
    genreSelector(actionCards,'action');

    //for adventure movies
    genreSelector(adventureCards,'adventure');

    //for drama movies
    genreSelector(dramaCards,'drama');

    //for comedy movies
    genreSelector(comedyCards,'comedy');

    //for romance movies
    genreSelector(romanceCards,'romance');

})();