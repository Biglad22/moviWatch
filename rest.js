window.onload = () =>{
    'use strict'
    const menuButton = document.querySelector('.menu');
    const menuTray = document.querySelector('.nav-links');

    //search button for small screens
    const searchButton = document.querySelector('.search-button');
    const searchBar = document.querySelector('.search');

    const reminderButton = document.querySelector('.reminder-button');
    const reminderBox = document.getElementById('rm-content');
    const noticeBadge = document.querySelector('.notice-me');
    const reminderCon = document.querySelector('.reminder-list');
    const reminderBtn = document.querySelector('.notification-stat');

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

}