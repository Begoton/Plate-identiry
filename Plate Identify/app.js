let inp = document.getElementById('main');
let plates = document.getElementById('plates');
let list = [];
let storage = localStorage.getItem("plates");
inp.addEventListener("keydown", input);
window.addEventListener("keydown", eve);

plates.innerHTML = storage;
list = storage;
function input(event) {
    switch(event.key) {
        case "Enter":
            
            list += inp.value + ", ";
            inp.value = '';
            plates.innerHTML = list;
            break;
    }

}
let platesShow = false;
let ui;
let MESSAGE = false;

function eve(event) {
    switch(event.key) {
        case "/":
            if(platesShow == false) {
                plates.style.display = 'block';
                platesShow = true;
            } else{
                plates.style.display = 'none';
                platesShow = false;
            }
            break;
        case "~":
            localStorage.setItem("plates", list);
            alert("Plates saved");
            break;
        case "`":
            document.getElementById('permWindow').style.display = 'block';
            MESSAGE = true;
            
            break;
                
            
            
            
    }
}

document.getElementById('yes').onclick = function() {
    localStorage.removeItem("plates");
    alert("All items have been removed from storage!");
    window.location.reload();
    document.getElementById('permWindow').style.display = 'none';
    MESSAGE = false;
}
document.getElementById('no').onclick = function() {
    document.getElementById('permWindow').style.display = 'none';
    document.body.style.backgroundColor = 'grey';
        inp.style.display = 'block';
        MESSAGE = false;
}

setInterval(function() {
    if(MESSAGE == true) {
        document.body.style.backgroundColor = 'black';
        inp.style.display = 'none';
    }
})

document.getElementById('mobile').onclick = function() {
    document.getElementById('mobileInfo').style.display = 'none';
    document.getElementById('enter').style.display = 'block';
    document.getElementById('mobileInfo').style.displayt = 'none';
    document.getElementById('view').style.display = 'block';
    document.getElementById('save').style.display = 'block';
    document.getElementById('unsave').style.display = 'block';

}
document.getElementById('noMobile').onclick = function() {
    document.getElementById('mobileInfo').style.display = 'none';
}
document.getElementById('enter').onclick = function() {
    list += inp.value + ", ";
    inp.value = '';
     plates.innerHTML = list;
}

document.getElementById('view').onclick = function() {
    if(platesShow == false) {
        plates.style.display = 'block';
        platesShow = true;
    } else{
        plates.style.display = 'none';
        platesShow = false;
    }
}
document.getElementById('save').onclick = function() {
    localStorage.setItem("plates", list);
    alert("Plates saved");

}
document.getElementById('unsave').onclick = function() {
    localStorage.removeItem("plates");
    window.location.reload();
    

}








