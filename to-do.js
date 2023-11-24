const inpbox = document.getElementById("inputbox")
const listcontat = document.getElementById("listcont")


function addtask(){
    if (inpbox.value===''){
        alert("you must write something!")
    }
    else{
        let li =document.createElement("li")
        li.innerHTML = inpbox.value
        listcontat.appendChild(li)
        let span =document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inpbox.value=""
    savedata()
}
listcontat.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        savedata()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        savedata()
    }
},false)

function savedata(){
    localStorage.setItem("data", listcontat.innerHTML)
}

function showtask(){
    listcontat.innerHTML= localStorage.getItem("data")
}
showtask()