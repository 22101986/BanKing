let body = document.getElementById("body");
let layer = document.getElementById("layer");
let button = document.getElementById("button");

button.onclick = function() {
     body.classList.remove("opacity-50"); 
     layer.classList.add("d-none");
}




let httpRequest = new XMLHttpRequest();
    httpRequest = function() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
           let response = httpRequest.responseText;
           let paragraph = document.getElementById("paragraph");
           paragraph.innerText = response;
           console.log(response);     
                
            }
        }
    
    httpRequest.open("GET", "data/layer.txt");
    httpRequest.send();
}
