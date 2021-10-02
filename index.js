const inputDo = document.querySelector(".todonewInput");
const buttonAdd = document.querySelector(".todonewplus");
const buttondeleteAll = document.querySelector(".deleteAll");
const liContainer = document.querySelector(".todoliContainer");
const pendingText = document.querySelector(".pendingText")
let tasks = 0;
let id = 0;
const buttonchekedAll = document.querySelector('.chekedAll')



function addDo(){
    let str = inputDo.value;
    if (str.length>0 & str.length <= 21){
        let li = document.createElement('li');
        let date = new Date();
        let today = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        id++;
        li.innerHTML = `<input type="checkbox"></input> ${str} <div class="Time">    added ${today} </div> <button id = "${id}" class = "delete" onclick='removeOne(${id})''></button>`;
        liContainer.prepend(li);
        tasks++;
        pendingText.innerHTML = `You have ${tasks} pending tasks`;
    }
    else {
        alert ("No value was founded or too many");
    }
}

function deleteCheked(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    tasks -= checkboxes.length;
    pendingText.innerHTML = `You have ${tasks} pending tasks`;
    checkboxes.forEach(e => e.parentNode.remove(this));
    
}

function checkAll(){
    document.querySelectorAll('input[type="checkbox"]').forEach(e => e.setAttribute("checked", "True"));
    
}

function removeOne(currentId){
    document.getElementById(currentId).parentNode.remove(this);
    tasks--;
    pendingText.innerHTML = `You have ${tasks} pending tasks`;
}


buttonAdd.addEventListener("click", addDo);
buttondeleteAll.addEventListener("click", deleteCheked);
buttonchekedAll.addEventListener("click", checkAll);
