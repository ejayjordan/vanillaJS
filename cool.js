let myDiv = document.getElementById("example")
myDiv.addEventListener("click", function(event) {
    event.target.innerHTML = "cool"
}

//original statement
/*function doThing(event){
    event.target.innerHTML = "cool"
}/*