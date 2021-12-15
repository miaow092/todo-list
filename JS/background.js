const body = document.querySelector("body");
const img = [
  "bgimg1.jpg",
  "bgimg2.jpg",
  "bgimg3.jpg",
  "bgimg4.jpg",
  "bgimg5.jpg",
];

const randomImg = img[Math.floor(Math.random() * img.length)];
body.style.background = `center / cover no-repeat url("BgImg/${randomImg}")`;
