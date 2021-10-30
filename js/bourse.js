let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
          if(httpRequest.status === 200) {
            let response = JSON.parse(httpRequest.responseText);
            let indiceCac = document.getElementById("indiceCac");
            let tauxCac = document.getElementById("tauxCac");
            let indiceSbf = document.getElementById("indiceSbf");
            let tauxSbf = document.getElementById("tauxSbf");
            let indiceFtse = document.getElementById("indiceFtse");
            let tauxFtse = document.getElementById("tauxFtse");
            indiceCac.innerText = response.indiceCac;
            tauxCac.innerText = response.tauxCac;
            indiceSbf.innerText = response.indiceSbf;
            tauxSbf.innerText = response.tauxSbf;
            indiceFtse.innerText = response.indiceFtse;
            tauxFtse.innerText = response.tauxFtse;
            }else{

            }
        }
    }
httpRequest.open("GET", "data/bourse.json");
httpRequest.send();
