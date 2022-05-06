
window.addEventListener("message", subDisplay,false );

function subDisplay(e) {
    
    if (e.origin !== "http://127.0.0.1:5500") return;
    document.getElementById("subDisplayMsg").innerHTML += e.data ;
    
}

function sendMess() {
    let contentMess = document.getElementById("subTextMess").value
    if(contentMess === '') return;
    
    let newWin = window.open("http://127.0.0.1:5500/index.html", "index")
    newWin.postMessage(contentMess, "http://127.0.0.1:5500/index.html");	
};
    

    