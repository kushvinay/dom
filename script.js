var btn = document.querySelector("button")
var h4 = document.querySelector("h4")

var flag = 0
btn.addEventListener("click",function(){
    if(flag == 0){
    h4.innerHTML = "Friend"
    h4.style.color = "green"
    console.log("clicked")
    btn.innerHTML = "Remove Friend"
    flag = 1
    }
    else{
        h4.innerHTML = "Stranger"
        h4.style.color = "red"
        console.log("clicked again")
        btn.innerHTML = "Add Friend"

        flag = 0

    }
})