let myDiv = document.getElementById("example")
myDiv.addEventListener("click", doThing)

function doThing(event){
    event.target.innerHTML = "cool"
}