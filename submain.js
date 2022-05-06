
window.addEventListener("message", subDisplay,false );

function subDisplay(e) {
    
    if (e.origin !== "https://khoapnn21.github.io/index.html") return;
    document.getElementById("subDisplayMsg").innerHTML += e.data ;
    
}

function sendMess() {
    let contentMess = document.getElementById("subTextMess").value
    if(contentMess === '') return;
    
    let newWin = window.open("https://khoapnn21.github.io/index.html", "index")
    newWin.postMessage(contentMess, "https://khoapnn21.github.io/index.html");	
};
    

    
