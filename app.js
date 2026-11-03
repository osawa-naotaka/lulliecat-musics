"use strict";

function ad_hoc_sanitize(str)
{
    return str.replace(/&/g, '').replace(/</g, '').replace(/>/g, '').replace(/"/g, '').replace(/'/g, '');
}

const player        = document.querySelector(".player");
const player_iframe = player.querySelector("iframe");
const player_close  = player.querySelector(".close");
let   last_button   = null; // 開いたときのボタン。閉じたらフォーカスを戻す

function open_player(button)
{
    const id = ad_hoc_sanitize(button.dataset.videoId);
    last_button = button;
    player_iframe.src = `https://www.youtube.com/embed/${id}`;
    player.classList.add('show');
    player_close.focus(); // showを付けて表示してから。display:noneの要素にはfocusできない
}

function close_player()
{
    player_iframe.src = "";
    player.classList.remove('show');
    if (last_button) {
        last_button.focus();
    }
}

// open
document.querySelectorAll(".card .play").forEach((button) => {
    button.addEventListener('click', () => open_player(button));
});

// close
player_close.addEventListener('click', close_player);
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && player.classList.contains('show')) {
        close_player();
    }
});
