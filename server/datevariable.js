let currentDate = new Date();

let year = currentDate.getFullYear();
let month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); 
let day = currentDate.getDate().toString().padStart(2, "0"); 
let hour = currentDate.getHours().toString().padStart(2, "0"); 
let minute = currentDate.getMinutes().toString().padStart(2, "0");

let formattedDate = `${year}-${month}-${day}, ${hour}:${minute}`;

module.exports = formattedDate