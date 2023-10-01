'use strict'

const loadingPage = document.querySelector('.loadingpage');
const mainPage = document.getElementById('main-page');
const menuButton = document.querySelector('.menu');
const menuTray = document.querySelector('.nav-links');
const heroMovImg = document.getElementById('hero-movie-img');
const heroMovTitle = document.getElementById('hero-movie-title');
const heroMovDir = document.getElementById('hero-movie-director');
const heroOverview = document.querySelector('.overview');
const heroSec = document.querySelector('.hero');
const heroText = document.querySelector('.hero-text');
const heroMovDate = document.querySelector('.date');
const reminderBox = document.getElementById('rm-content');
const reminderButton = document.querySelector('.reminder-button');
const noticeBadge = document.querySelector('.notice-me');
const moviesCards = document.querySelectorAll('.card-movie-main-container');
const cardsImg = document.querySelectorAll('.card-movie-img');
const cardsName = document.querySelectorAll('.card-movie-name');
const cardsRating = document.querySelectorAll('.card-movie-rating');
const cardsDate = document.querySelectorAll('.watch-date');
const reminderCon = document.querySelector('.reminder-list');
const reminderBtn = document.querySelector('.notification-stat');
const tvSearchBtns = document.querySelector('.searchbtns');
const defaultMess = document.querySelector('.defualt-text');
const newsImg = document.querySelector('.card-news-img');
const newsRating = document.querySelector('.news-rating');
const newsOverview = document.querySelector('.card-news-headline');
const newsCards = document.getElementById('news-search');
const seeMoreMovies = document.querySelector('.findmore-movies');
const seeMoreLabel = document.querySelector('.findmore-label');
const hiddenEff = document.querySelector('.hidden-class');
const popupClose = document.getElementById('close-popup');
const mainPopup = document.querySelector('.popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.querySelector('.popup-title');
const popupRating = document.querySelector('.popup-movie-rating');
const popupOverview = document.getElementById('popup-overview');
var tvShowResult = document.querySelectorAll('.card-news-main-container');
const seeMoreShows = document.querySelector('.seemore-news');
const docBody = document.getElementsByTagName('body')[0];

//list of languages 
const languages = {
    English: 'EN',
    Spanish: 'ES',
    French: 'FR',
    German: 'DE',
    Chinese: 'ZH',
    Japanese: 'JA',
    Russian: 'RU',
    Arabic: 'AR',
    Hindi: 'HI',
    Portuguese: 'PT',
    Italian: 'IT',
    Dutch: 'NL',
    Korean: 'KO',
    Turkish: 'TR',
    Swedish: 'SV',
    Danish: 'DA',
    Norwegian: 'NO',
    Finnish: 'FI',
    Greek: 'EL',
    Polish: 'PL',
    Romanian: 'RO',
    Hungarian: 'HU',
    Czech: 'CS',
    Hebrew: 'HE',
    Thai: 'TH',
    Vietnamese: 'VI',
    Urdu: 'UR',
    Bengali: 'BN',
    Swahili: 'SW',
    Ukrainian: 'UK',
    Malay: 'MS',
    Persian: 'FA',
    Filipino: 'PH', 
    Icelandic: 'IS',
    Swazi: 'SS',
    Zulu: 'ZU',
    Xhosa: 'XH',
    Sotho: 'ST',
    Afrikaans: 'AF',
    Welsh: 'CY',
    Irish: 'GA',
    ScotsGaelic: 'GD',
    Basque: 'EU',
    Catalan: 'CA',
    Galician: 'GL',
    Estonian: 'ET',
    Latvian: 'LV',
    Lithuanian: 'LT',
    Belarusian: 'BE',
    Macedonian: 'MK',
    Albanian: 'SQ',
    Croatian: 'HR',
    Serbian: 'SR',
    Slovak: 'SK',
    Slovenian: 'SL',
    Bosnian: 'BS',
    Montenegrin: 'ME',
    Georgian: 'KA',
    Armenian: 'HY',
    Azerbaijani: 'AZ',
    Uzbek: 'UZ',
    Kazakh: 'KK',
    Kyrgyz: 'KY',
    Tajik: 'TG',
    Turkmen: 'TK',
    Mongolian: 'MN',
    Hawaiian: 'HI',
    Maori: 'MI',
    Samoan: 'SM',
    Fijian: 'FJ',
    Tahitian: 'TY',
    Tongan: 'TO',
    Marshallese: 'MH',
    Palauan: 'PW',
    Chamorro: 'CH',
    Hmong: 'HM',
    Lao: 'LO',
    Khmer: 'KM',
    Burmese: 'MY',
    Tibetan: 'TB',
    Uighur: 'UG',
    Pashto: 'PS',
    Kurdish: 'KU',
    Dari: 'DZ',
    Amharic: 'AM',
    Tigrinya: 'TI',
    Oromo: 'OM',
    Somali: 'SO',
    Kinyarwanda: 'RW',
    Kirundi: 'RN',
    Malagasy: 'MG',
    SeychelloisCreole: 'SC',
    Luxembourgish: 'LB',
    Greenlandic: 'KL',
    Navajo: 'NV',
    Cherokee: 'CH',
    Yoruba: 'YO',
    Hausa: 'HA',
    Igbo: 'IG',
    Sindhi: 'SD',
    Dhivehi: 'DV',
    Cherokee: 'CK',
    Inuktitut: 'IU',
    Ojibwe: 'OJ',
    Lakota: 'LH',
    Cree: 'CR',
    Kalaallisut: 'KL',
    Tswana: 'TW',
    Ndebele: 'ND',
    Faroese: 'FO',
    Tagalog: 'TL',
    Cantonese: 'CN',
};

//gets language key
const getKey = (value, place) =>{
    value = value.toUpperCase();

    //will store language key
    let key;

    //iterates through list of languages and return key
    for (i in languages){
        if(languages[i] === value){
            key = i;

            break;
        };
    };
    //returns key and displays it
    return place.innerText = key;
};


console.log(tvShowResult)
window.onload = () =>{
    loadingPage.style.display = 'none';
    mainPage.removeAttribute('hidden');
}

//notifications;
reminderBtn.onclick = (e) =>{
    e.preventDefault();
    reminderBtn.classList.toggle('border');
    reminderCon.classList.toggle('noticed');
    
    if (menuTray.classList.contains('menu-open') === true){
        menuTray.classList.toggle('menu-open');
        menuButton.classList.toggle('border');
    }
    else if(searchBar.classList.contains('search-opened') === true){
        searchBar.classList.toggle('search-opened');
        searchButton.classList.toggle('border');
    };
}

//search button for small screens
const searchButton = document.querySelector('.search-button');
const searchBar = document.querySelector('.search');

searchButton.onclick = (e) =>{
    console.log('button pressed');
    searchButton.classList.toggle('border');
    searchBar.classList.toggle('search-opened');

    if(menuTray.classList.contains('menu-open')){
        menuTray.classList.toggle('menu-open');
        menuButton.classList.toggle('border');
    }else if(reminderCon.classList.contains('noticed')=== true){
        reminderCon.classList.toggle('noticed');
        reminderBtn.classList.toggle('border');
    };
};

//menu open for small screen
menuButton.onclick = (e) => {
    console.log('button clicked');
    menuTray.classList.toggle('menu-open');
    menuButton.classList.toggle('border');

    //search bar close
    if(searchBar.classList.contains('search-opened')=== true){
        searchBar.classList.toggle('search-opened');
        searchButton.classList.toggle('border');
    }
    else if(reminderCon.classList.contains('noticed')=== true){
        reminderCon.classList.toggle('noticed');
        reminderBtn.classList.toggle('border');
    };
};

let movies;
let heroSrc;

////movies section and api fetch
(async() =>{
    const apiFetch = await (async() => {
        // movies API request
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODYwZjNkNGVkM2FjNTA5MjBkYzRiYzExNjlkMDAwMiIsInN1YiI6IjY0NjQ1ZjdkZjQ4YjM0MDBlM2MwM2QyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qPI6QMMyuuaMqnUdaKymW5lPJc5WfaxuKY-hmi92JwI'
            }
        };

        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const result = await response.json();
        const data = await result.results; 
        movies = data;
        
        return movies;
    })()

    
    /////hero section display
    const hero = await (async() => {
        let x = Number(movies.length) - 1;

        //hero image change
        let i = 0;
        heroMovTitle.innerText = movies[i].title;
        heroSrc = `https://image.tmdb.org/t/p/original${movies[i].backdrop_path}`;
        heroMovImg.style.backgroundImage = `url(${heroSrc})`;
        heroMovDir.innerText = movies[i].overview;
        heroMovDate.classList.remove('still-loading')
        heroMovDate.innerText = movies[i].release_date;
        const option = {
            threshold : 0.1,
        };

        const observer = new IntersectionObserver((entries,observer)=>{
            let entry;
            entries.forEach(entry =>{
                if (entry.isIntersecting === false){
                    if (i < x){
                        i++;
                    }
                    else{
                        i = 0;
                    };
                    heroMovTitle.innerText = movies[i].title;
                    heroSrc = `https://image.tmdb.org/t/p/original${movies[i].backdrop_path}`
                    console.log(heroSrc);
                    heroMovImg.style.backgroundImage = `url(${heroSrc})`;
                    heroMovDir.innerText = movies[i].overview;
                    heroMovDate.innerText = movies[i].release_date;
                }
            })
        },option);
        observer.observe(heroSec);
        setInterval(
            function(){
                if (i < x){
                    i++;
                }
                else{
                    i = 0;
                };
                heroMovTitle.innerText = movies[i].title;
                heroSrc = `https://image.tmdb.org/t/p/original${movies[i].backdrop_path}`;
                heroMovImg.style.backgroundImage = `url(${heroSrc})`;
                heroMovDir.innerText = movies[i].overview;
                heroMovDate.innerText = movies[i].release_date;
            }, 60000
        );
    })();

    ////movies card display
    const moviCards = await (async(i,n) => {
        setInterval(function(){

            let cards = cardsImg.length;
            let moviesLen = movies.length;
            for (i; i < cards; i++){
            
                if (i < cards && n < moviesLen){

                    cardsImg[i].src = `https://image.tmdb.org/t/p/original${movies[n].poster_path}`;
                    cardsName[i].innerText =  movies[n].title;
                    cardsName[i].classList.remove('still-loading');

                    if ( movies[n].vote_average !== 0){
                        cardsRating[i].innerText = movies[n].vote_average;
                    }else{
                        cardsRating[i].innerText ='To Be Released';
                    }
                    cardsDate[i].innerText = movies[n].release_date;

                    n++;
                }

            }

            i = 0;
            
            if(n === moviesLen){
                n = 0;
            }
        },30000)
    })(0,0);

    return movies;
})();

//stores the list of mivies in notification
let notices = [];

//reminder box
reminderButton.onclick = (e) =>{
    e.preventDefault();
    defaultMess.remove();

    if (!notices.includes(heroMovTitle.innerText)){
        if (!noticeBadge.classList.contains('noticed')){
            noticeBadge.classList.toggle('noticed');
        }

        const newItem = document.createElement('li');
        const itemMC = document.createElement('div');
        const itemImgC = document.createElement('div');
        const itemImg = document.createElement('img');
        const itemDetails = document.createElement('div');
        const itemMText = document.createElement('div');
        const itemButton = document.createElement('button');
        const itemButtonIcon = document.createElement('span');

        //new list item
        newItem.classList.add('col-12');
        newItem.classList.add('p-0');
        newItem.classList.add('m-0');
        newItem.append(itemMC);
        newItem.style.maxHeight ='6.4rem';
        newItem.setAttribute('id',`${heroMovTitle.innerText}`);
        let thisId = newItem.getAttribute('id');

        //item main container
        itemMC.classList.add('row');
        itemMC.classList.add('row-cols-2');
        itemMC.classList.add('p-2');
        itemMC.classList.add('m-0');
        itemMC.classList.add('align-items-center');
        itemMC.append(itemImgC);
        itemMC.append(itemDetails);
        itemMC.style.maxHeight ='100%';

        //item image container
        itemImgC.classList.add('col-3');
        itemImgC.classList.add('p-0');
        itemImgC.classList.add('m-0');
        itemImgC.append(itemImg);
        itemImgC.style.maxHeight ='100% !important';

        //item img
        itemImg.classList.add('item-img');
        itemImg.src = heroSrc;

        //items details
        itemDetails.classList.add('row');
        itemDetails.classList.add('row-cols-2');
        itemDetails.classList.add('gap-3');
        itemDetails.classList.add('col-9');
        itemDetails.classList.add('m-0');
        itemDetails.classList.add('p-0');
        itemDetails.classList.add('ps-sm-3');
        itemDetails.classList.add('ps-2');
        itemDetails.classList.add('align-items-center');
        itemDetails.classList.add('justify-content-between');
        itemDetails.append(itemMText);
        itemDetails.append(itemButton);

        //main text
        notices.push(thisId);
        itemMText.innerHTML =`<p class='p-0 m-0 mb-1'>${heroMovTitle.innerText}</p>` + `<p class='span m-0 p-0'>${heroMovDate.innerText}</p>` ;
        itemMText.classList.add('col-8');
        itemMText.classList.add('m-0');
        itemMText.classList.add('p-0');
        itemMText.classList.add('item-details');

        //button design
        itemButtonIcon.classList.add('fi-rr-cross-small');
        itemButton.append(itemButtonIcon);
        itemButton.classList.add('p-2');
        itemButton.classList.add('m-0');
        itemButton.classList.add('col-auto');
        itemButton.style.width ='fit-content !important';
        itemButton.style.backgroundColor ='unset';
        itemButton.style.border ='none';
        itemButton.style.boxShadow ='none';
        itemButton.style.color ='var(--primary)'; 
        itemButton.onclick = (e) =>{
            e.preventDefault();
            document.getElementById(thisId).remove();

            if(document.getElementById('rm-content').children.length === 0){
                noticeBadge.classList.toggle('noticed');
                let del = notices.indexOf(thisId);
                if (del != -1){
                    notices.splice(del, 1);
                }

                reminderBox.append(defaultMess);
            }
        }
        reminderBox.append(newItem);
    };
}

//see more functionality for hero display
heroMovDir.onclick = (e) =>{
    e.preventDefault();
    heroOverview.classList.toggle('more-details');
    if(heroText.style.height === '40%'){
        heroText.style.height = 'fit-content'; 
    }else{
        heroText.style.height = '40%';
    }
};


//tvshow section selector
//methof of API fetch
const opt = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODYwZjNkNGVkM2FjNTA5MjBkYzRiYzExNjlkMDAwMiIsInN1YiI6IjY0NjQ1ZjdkZjQ4YjM0MDBlM2MwM2QyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qPI6QMMyuuaMqnUdaKymW5lPJc5WfaxuKY-hmi92JwI'
    }
};

//stores available tvshows
let tvShows = [];

//fetch tvshows
(async()=>{
    let p = 1;

    while(p < 50){

        try{
            //fetch tvshows API
            const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${p}&sort_by=popularity.desc`, opt);
            const result = await response.json();
            const data = await result.results;

            tvShows = tvShows.concat(data);

            p++;
        }catch(error){
            console.error(error);
        };
    };

    return tvShows;
})()


// tvshows search buttons
const searchBtns = tvSearchBtns.children;

//iteration through search buttons 
for (var b = 0; b < searchBtns.length; b++){
    let cur = searchBtns[b];
    //applys event listener to every search button
    cur.addEventListener('click', (e) =>{ 

        //prevent refreshing
        e.preventDefault();
        console.log('button clicked');

        let selectedShows = [];

        //check if button has been selected
        if (cur.classList.contains('border-chng') === false){
            cur.classList.add('border-chng');
            cur.classList.add('clicked');

            let id = cur.getAttribute('id');
            id = String(id).toUpperCase();
            let numId = Number(id);

            //immediately invoked function for search display 
            (async (data)=>{
                try{

                    //iterate through data list of tvshows
                    for(i in data){

                        let curDataName = data[i].name[0].toUpperCase();
                        let numData = Number(data[i].name);
                        (()=>{
                            //checks if clicked button id is number
                            if(isNaN(numId)){

                                //compares the clicked button id to the data
                                if (curDataName === id ){
                                    selectedShows.push(data[i]);
                                    selectedShows = selectedShows;
                                }else{
                                    i++;
                                };
                            }else{
                                if (isNaN(numData) === false ){
                                    selectedShows.push(data[i]);
                                    selectedShows = selectedShows;
                                }else{
                                    i++;
                                }
                            };
                        })();
                    };
                    
                    selectedShows = selectedShows;
                    console.log(selectedShows);
                    //processes array of qualified tvshows
                    (()=>{
                        let avilTvshow = selectedShows.length;

                        //function displays available tvshows
                        const displayShows = i => {
                            for (i ; i < avilTvshow; i++){
                                
                                let num = tvShowResult.length;

                                if (i < num){
                                    tvShowResult[i].style.visibility = 'visible'; 

                                    //checks API for show poster
                                    if (selectedShows[i].poster_path !== null){
                                        tvShowResult[i].querySelector('.card-news-img').src = "assets/defualt.jpg";
                                        tvShowResult[i].querySelector('.card-news-img').src = `https://image.tmdb.org/t/p/original${selectedShows[i].poster_path}`;
                                    }else{
                                        tvShowResult[i].querySelector('.card-news-img').src = "assets/defualt.jpg";
                                    }
                                    
                                    tvShowResult[i].querySelector('.card-news-headline').classList.remove('still-loading');
                                    tvShowResult[i].querySelector('.card-news-headline').innerText = selectedShows[i].name;
                                    tvShowResult[i].querySelector('.news-rating').innerText = selectedShows[i].vote_average;

                                    //gets show year
                                    let tvDate = selectedShows[i].first_air_date;
                                    tvDate = tvDate.split('-');
                                    tvDate = tvDate[0];

                                    tvShowResult[i].querySelector('.news-year').innerText = tvDate;


                                    //store language DOM
                                    let disLang = tvShowResult[i].querySelector('.show-lang');

                                    //checks show language and displays it 
                                    let shoLang = selectedShows[i].original_language;
                                    getKey(shoLang, disLang);
                                }else{
                                    break;
                                };
                            };
                        };

                        //checks and compare the length of available shows with number of available cards 8
                        if (avilTvshow < 8){
                            let startPoint = avilTvshow ;
                            //displays tvshows
                            displayShows(0);

                            //hides excess cards
                            for (i = startPoint; i < 8; i++){
                                tvShowResult[i].style.visibility = 'hidden';
                            };
                        }else{
                            //displays tvshows
                            displayShows(0);

                            //add cards on click of see more button
                            moreShows = () =>{
                                let card = 0;

                                avilTvshow = avilTvshow - tvShowResult.length;
                                console.log(tvShowResult);
                                console.log(avilTvshow);

                                if (avilTvshow >= 8){
                                    //this clones new cards
                                    while(card < 8){

                                        let last = tvShowResult.length - 1;
                                        const newCard = tvShowResult[last].cloneNode(true);

                                        //append new card to list of DOM
                                        let newCardwrap = document.createElement('div');
                                        newCardwrap.appendChild(newCard);
                                        
                                        newCardwrap.classList.add('col');
                                        newCardwrap.classList.add('m-0');
                                        newCardwrap.classList.add('p-2');
                                        newCardwrap.classList.add('p-sm-3');

                                        document.querySelector('.single-news-card').appendChild(newCardwrap);
                                        card++;
                                        
                                        if (card === 7){
                                            card = 0;
                                            break;
                                        }
                                    };
                                    
                                    tvShowResult = document.querySelectorAll('.card-news-main-container');  

                                    let last = tvShowResult.length - 8;
                                    displayShows(last);

                                }else{

                                    //this clones new cards
                                    while(card < avilTvshow){

                                        let last = tvShowResult.length - 1;
                                        let newCard = tvShowResult[last].cloneNode(true);

                                        //append new card to list of DOM
                                        let newCardwrap = document.createElement('div');
                                        newCardwrap.appendChild(newCard);
                                        
                                        newCardwrap.classList.add('col');
                                        newCardwrap.classList.add('m-0');
                                        newCardwrap.classList.add('p-2');
                                        newCardwrap.classList.add('p-sm-3');

                                        document.querySelector('.single-news-card').appendChild(newCardwrap);
                                        
                                        card++;

                                        if (card === avilTvshow - 1){
                                            card = 0;
                                            break;
                                        }

                                    };

                                    tvShowResult = document.querySelectorAll('.card-news-main-container');

                                    let last = tvShowResult.length - avilTvshow;
                                    displayShows(last);
                                }
                            }
                        };

                        var moreShows;
                        //see more tv shows
                        seeMoreShows.addEventListener('click', moreShows);
                                                
                    })();


                }catch(error){
                    console.error(error);
                }
            })(tvShows);

            for (var i = 0; i< searchBtns.length; i++){
                if (searchBtns[i] !== cur && searchBtns[i].classList.contains('border-chng') === true){
                    searchBtns[i].classList.remove('border-chng');
                    break;
                }
            };
        }else{
            cur.classList.remove('border-chng');
            cur.classList.remove('clicked');
        };

        if(newsCards.hasAttribute('hidden')===true && cur.classList.contains('clicked')===true){
            newsCards.removeAttribute('hidden');
        }else if (newsCards.hasAttribute('hidden')===false && cur.classList.contains('clicked')===true){
            newsCards.removeAttribute('hidden');
        }else{
            newsCards.setAttribute('hidden','hidden');
        }

    })
};

//see more movies
seeMoreMovies.onclick = (e) =>{
    e.preventDefault();

    for(i in moviesCards){
        if(i > 1){

            if(moviesCards[2].classList.contains('hidden-class')){
                document.querySelector('.findmore-label').innerText = 'see less';
            }else{
                document.querySelector('.findmore-label').innerText = 'see more';
            };

            moviesCards[i].classList.toggle('hidden-class');
        };
    }

}

//popup button
for (var i = 0; i < moviesCards.length; i++){
    let This = moviesCards[i]; 


    This.addEventListener('click',function(e){
        console.log('button clicked');

        popupImg.src = This.querySelector('.card-movie-img').src;  
        popupTitle.innerText = This.querySelector('.card-movie-name').innerText;
        popupRating.innerText = This.querySelector('.card-movie-rating').innerText;
 
        if(mainPopup.classList.contains('pop-open') === false && This.classList.contains('clicked') === false){
            mainPopup.classList.add('pop-open');
            This.classList.add('clicked');
        }

        //iterate through movies list
        for (i in movies){

            if(movies[i].title === popupTitle.innerText){
                if (movies[i].overview === ''){
                    popupOverview.innerText = 'We Have No Information Yet';
                }else{
                    popupOverview.innerText = movies[i].overview;
                };
            };
        };


        docBody.classList.toggle('stop-scroll');
    })
}

//popup
popupClose.onclick = (e) => {
    mainPopup.classList.toggle('pop-open');
    for (var n = 0; n < moviesCards.length; n++){
        if (moviesCards[n].classList.contains('clicked')){
            moviesCards[n].classList.remove('clicked');
        } 
    }
    docBody.classList.toggle('stop-scroll');
};