const now = new Date(document.lastModified);

const datefield = document.querySelector("date");

datefield.textContent = now;

// Accidently barrowed from https://codepen.io/blazzard-jason/pen/ZEWjeaw with changed