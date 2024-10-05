let songIndex = 0;
let audioElement = new Audio("songs/lover.mp3");
let masterPlay = document.getElementById("masterPlay");
let progessBar = document.getElementById("myprogressbar");

let songs = [
  { songName: "One-love", filePath: "1.mp3", coverPath: "cover/1.jpg" },
  { songName: "One-love", filePath: "1.mp3", coverPath: "cover/1.jpg" },
  { songName: "One-love", filePath: "1.mp3", coverPath: "cover/1.jpg" },
  { songName: "One-love", filePath: "1.mp3", coverPath: "cover/1.jpg" },
  { songName: "One-love", filePath: "1.mp3", coverPath: "cover/1.jpg" },
];

// this code is for play and pause button
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    console.log("audio-played");
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    console.log("audio-paused");
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-circle-play");
  }
});

// this code is for progress bar
audioElement.addEventListener("timeupdate", () => {
  progess = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progessBar.value = progess;
});

let play1 = document.getElementById("play1");
play1.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    console.log("audio-played");
    play1.classList.remove("fa-circle-play");
    play1.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    console.log("audio-paused");
    play1.classList.remove("fa-pause-circle");
    play1.classList.add("fa-circle-play");
  }
});

let audioElement2 = new Audio("songs/satranga.mp3");
let play2 = document.getElementById("play2");
play2.addEventListener("click", () => {
  if (audioElement2.paused || audioElement2.currentTime <= 0) {
    audioElement2.play();
    console.log("audio-played");
    play2.classList.remove("fa-circle-play");
    play2.classList.add("fa-pause-circle");
  } else {
    audioElement2.pause();
    console.log("audio-paused");
    play2.classList.remove("fa-pause-circle");
    play2.classList.add("fa-circle-play");
  }
});

let audioElement3 = new Audio("songs/Maan Meri Jaan  .mp3");
let audioElement4 = new Audio("songs/One Love.mp3");
let audioElement5 = new Audio("songs/Cheques.mp3");
let audioElement6 = new Audio("songs/Emptiness .mp3");
let audioElement7 = new Audio("songs/Sarangi.mp3");
let audioElement8 = new Audio("songs/Bahana.mp3");
let audioElement9 = new Audio("songs/Laal Bindi.mp3");
let audioElement10 = new Audio("songs/Heeriye.mp3");

let play3 = document.getElementById("play3");
let play4 = document.getElementById("play4");
let play5 = document.getElementById("play5");
let play6 = document.getElementById("play6");
let play7 = document.getElementById("play7");
let play8 = document.getElementById("play8");
let play9 = document.getElementById("play9");
let play10 = document.getElementById("play10");

play3.addEventListener("click", () => {
  if (audioElement3.paused || audioElement3.currentTime <= 0) {
    audioElement3.play();
    console.log("audio-played");
    play3.classList.remove("fa-circle-play");
    play3.classList.add("fa-pause-circle");
  } else {
    audioElement3.pause();
    console.log("audio-paused");
    play3.classList.remove("fa-pause-circle");
    play3.classList.add("fa-circle-play");
  }
});

play4.addEventListener("click", () => {
  if (audioElement4.paused || audioElement4.currentTime <= 0) {
    audioElement4.play();
    console.log("audio-played");
    play4.classList.remove("fa-circle-play");
    play4.classList.add("fa-pause-circle");
  } else {
    audioElement4.pause();
    console.log("audio-paused");
    play4.classList.remove("fa-pause-circle");
    play4.classList.add("fa-circle-play");
  }
});

play5.addEventListener("click", () => {
  if (audioElement5.paused || audioElement5.currentTime <= 0) {
    audioElement5.play();
    console.log("audio-played");
    play5.classList.remove("fa-circle-play");
    play5.classList.add("fa-pause-circle");
  } else {
    audioElement5.pause();
    console.log("audio-paused");
    play5.classList.remove("fa-pause-circle");
    play5.classList.add("fa-circle-play");
  }
});

play6.addEventListener("click", () => {
  if (audioElement6.paused || audioElement6.currentTime <= 0) {
    audioElement6.play();
    console.log("audio-played");
    play6.classList.remove("fa-circle-play");
    play6.classList.add("fa-pause-circle");
  } else {
    audioElement6.pause();
    console.log("audio-paused");
    play6.classList.remove("fa-pause-circle");
    play6.classList.add("fa-circle-play");
  }
});

play7.addEventListener("click", () => {
  if (audioElement7.paused || audioElement7.currentTime <= 0) {
    audioElement7.play();
    console.log("audio-played");
    play7.classList.remove("fa-circle-play");
    play7.classList.add("fa-pause-circle");
  } else {
    audioElement7.pause();
    console.log("audio-paused");
    play7.classList.remove("fa-pause-circle");
    play7.classList.add("fa-circle-play");
  }
});

play8.addEventListener("click", () => {
  if (audioElement8.paused || audioElement8.currentTime <= 0) {
    audioElement8.play();
    console.log("audio-played");
    play8.classList.remove("fa-circle-play");
    play8.classList.add("fa-pause-circle");
  } else {
    audioElement8.pause();
    console.log("audio-paused");
    play8.classList.remove("fa-pause-circle");
    play8.classList.add("fa-circle-play");
  }
});

play9.addEventListener("click", () => {
  if (audioElement9.paused || audioElement9.currentTime <= 0) {
    audioElement9.play();
    console.log("audio-played");
    play9.classList.remove("fa-circle-play");
    play9.classList.add("fa-pause-circle");
  } else {
    audioElement9.pause();
    console.log("audio-paused");
    play9.classList.remove("fa-pause-circle");
    play9.classList.add("fa-circle-play");
  }
});

play10.addEventListener("click", () => {
  if (audioElement10.paused || audioElement10.currentTime <= 0) {
    audioElement10.play();
    console.log("audio-played");
    play10.classList.remove("fa-circle-play");
    play10.classList.add("fa-pause-circle");
  } else {
    audioElement10.pause();
    console.log("audio-paused");
    play10.classList.remove("fa-pause-circle");
    play10.classList.add("fa-circle-play");
  }
});
