var ratings = document.getElementsByTagName("li");
var element = document.getElementById("rating");

function select(){
    for(rating of ratings){
        rating.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
    element.textContent = "You selected " + event.currentTarget.textContent + " out of 5";
}

function hide(){
    for (rating of ratings){
        if(rating.classList.contains("active")){
            document.querySelector(".container-1").style.display = "none" ;
        }
    }
}