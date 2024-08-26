let myDiv = document.getElementById("example")
myDiv.addEventListener("click", (event) => {
    event.target.innerHTML = "cool"
})

//original statement
/*function doThing(event){
    event.target.innerHTML = "cool"
}*/