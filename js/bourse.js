let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
          if(httpRequest.status === 200) {
            let response = JSON.parse(httpRequest.responseText);
            console.log(response["CAC40"]);
            }else{

            }
        }
    }
httpRequest.open("GET", "data/bourse.json");
httpRequest.send();
console.log(httpRequest);