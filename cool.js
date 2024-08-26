let myDiv = document.getElementById("example")
myDiv.addEventListener("click", (event) => {
    
    let exampleNew = document.createElement("a")
    exampleNew.innerText = "New Anchor"
    event.currentTarget.appendChild(exampleNew);

    event.currentTarget.classList.add("red")
    
    //console.log(event.currentTarget.dataset.secret)
    //event.currentTarget.dataset.secret = "Likes chocolate"
    //event.currentTarget.innerHTML = "cool"
})

//original statement
/*function doThing(event){
    event.target.innerHTML = "cool"
}*/