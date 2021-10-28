let header = document.getElementById("header");
let main = document.getElementById("main")
let layer = document.getElementById("layer");
let button = document.getElementById("button");

button.onclick = function() {
     header.classList.remove("opacity-50"); 
     main.classList.remove("opacity-50");
     layer.classList.add("d-none");
}

let httpRequest = new XMLHttpRequest();
     httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
           let response = httpRequest.responseText;
           let paragraph = document.getElementById("paragraph");
           paragraph.innerText = response;   
            }else {
             
            }
        }
}
httpRequest.open("GET", "data/layer.txt");
    httpRequest.send();
