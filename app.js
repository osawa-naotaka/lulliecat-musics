"use strict";

function ad_hock_sanitize(str)
{
    return str.replace(/&/g, '').replace(/</g, '').replace(/>/g, '').replace(/"/g, '').replace(/'/g, '');
}

const player        = document.querySelector(".player");
const player_iframe = player.querySelector("iframe");

// open player
const cards         = document.querySelectorAll(".card");
cards.forEach((card) => {
    const img = card.querySelector("figure > img");
    const id  = ad_hock_sanitize(img.dataset.videoId);

    // open
    img.addEventListener('click', (e) => {
        player_iframe.src = `https://www.youtube.com/embed/${id}`;
        player.classList.add('show');
    });
});

// close
const player_close  = player.querySelector(".close");
player_close.addEventListener('click', (e) => {
    player_iframe.src ="";
    player.classList.remove('show');
});
