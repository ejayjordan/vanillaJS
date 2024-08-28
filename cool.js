let txtUsername = document.getElementById("username");
txtUsername.value = "AAAaaaa";
    // value is the input within text boxes
    //changes to value occur in Javascript

function getValue(){
    alert(txtUsername.value);
    //Do not use alerts in this class, because they are modal dialogue (cannot interact with anything else on page while it's on screen) anti-user experience, alert is for ALERTING!!!

}




/* OLD COOL.JS
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
function doThing(event){
    event.target.innerHTML = "cool"
}*/