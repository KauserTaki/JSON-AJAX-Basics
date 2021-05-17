//Learning from LearnWebCode tutorials May 17, 2021
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-informations");
var pageCounter = 3;

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "json/info-" + pageCounter + ".json");
    ourRequest.onload = function(){

        //console.log(ourRequest.responseText);
        //var ourData = ourRequest.responseText;

        //var ourData = JSON.parse(ourRequest.responseText);

        //console.log(ourData);

        //renderHTML(ourData);
        
        if(ourRequest.status >= 200 && ourRequest.status < 400){
            var ourData = JSON.parse(ourRequest.responseText);

            renderHTML(ourData);
        }
        else{
            console.log("we connected to the server but it returned an error!");
        }
    };

    ourRequest.onerror = function(){
        console.log("Connection Lost!");
    };

    ourRequest.send();
    pageCounter--;

    if(pageCounter < 1){
        btn.classList.add("hide-me");
    }
});

function renderHTML(data){
    //var htmlString = "Hellow There...";
    // animalContainer.insertAdjacentHTML("beforeend", "Hellow!");
    //animalContainer.insertAdjacentHTML("beforeend", htmlString);
    var htmlString = "";
    for(i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + "is a " + data[i].species + "that likes to eat ";
        
        for(j = 0; j < data[i].foods.likes.length; j++){
            //htmlString += data[i].foods.likes[j];
            if(j == 0){
                htmlString += data[i].foods.likes[j];
            }
            else{
                htmlString += "and " + data[i].foods.likes[j];
            }
        }
        htmlString += " and dislikes ";

        for(j = 0; j < data[i].foods.dislikes.length; j++){
            //htmlString += data[i].foods.likes[j];
            if(j == 0){
                htmlString += data[i].foods.dislikes[j];
            }
            else{
                htmlString += "and " + data[i].foods.dislikes[j];
            }
        }

        htmlString += ".</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

//Learning from LearnWebCode tutorials May 12, 2021
var pageCounter = 3;
var animalContainer = document.getElementById("animal-informations");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'json/info-' + pageCounter + '.json');

    ourRequest.onload = function(){
        if(ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } 
        else{
            
            console.log("We connected to the server but it returned an error!");
        }
    
    };


    ourRequest.onerror = function(){
        console.log("Connection Error!");
    };

    ourRequest.send();
    pageCounter--;
    if(pageCounter < 1){
        btn.classList.add("hide-me");
    }
});

function renderHTML(data) {
    var htmlString = "";

    for(i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    
        for(ii = 0; ii < data[i].foods.likes.length; ii++) {
            if(ii == 0){
                htmlString += data[i].foods.likes[ii];
            } 
            else{
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

    htmlString += ' and dislikes ';

        for(ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if(ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            }
            else{
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }

    htmlString += '.</p>';

    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}