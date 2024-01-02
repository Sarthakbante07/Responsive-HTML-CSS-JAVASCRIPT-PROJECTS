const play = document.getElementById("play");
const back = document.getElementById("back");
const next = document.getElementById("next");
const music = document.querySelector("audio");
const Status = document.getElementById("status");
const artist = document.getElementById("artist")
const sname = document.getElementById("name")
const progress = document.getElementById("progress");


const songs = [{
    name:"Marathi Romance",
    tittle:"Marathi Mashup",
    artist:"Ajay",
},
{
    name:"Hindi Romance",
    tittle:"Hindi Mashup",
    artist:"Arjit Sing",
},
];



let isplaying = false;

function tooggleplay(){
    if(isplaying){
        pauseMusic();
    }else{
        playMusic();
    }
}
music.onloadedmetadata = function(){
    progress.max = music.duration;
    progress.value = music.currentTime;
}


play.addEventListener('click',()=>{
    tooggleplay();
})

function playMusic(){
    isplaying = true;
    play.classList.replace('fa-play','fa-pause');
    Status.innerHTML = "Music Played"
    music.play();
    
     
}
if(music.play()){
    setInterval(()=>{
        progress.value = music.currentTime
    },500)
}
progress.onchange = function(){
    music.play();
    music.currentTime = progress.value;
    
}
function pauseMusic(){
    isplaying = false;
    play.classList.replace('fa-pause', 'fa-play');
    Status.innerHTML = "Music Stopped"
    music.pause();
}
const loadsong =(songs) => {
    sname.textContent = songs.name;
    artist.textContent = songs.artist;
    music.src="music/" +songs.name+ ".mp3"
};

songIndex = 0;
function nextsong(){
    songIndex = (songIndex+1)%songs.length;
    loadsong(songs[songIndex]);
    playMusic();
}
next.addEventListener('click',nextsong);


function backsong(){
    songIndex = (songIndex-1 + songs.length) % songs.length;
    loadsong(songs[songIndex]);
    playMusic();
    
}

back.addEventListener('click',backsong);




