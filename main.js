function sendMess() {
    let contentMess = document.getElementById("textMess").value
    if(contentMess === '') return;
    
    let newWin = window.open("https://khoapnn21.github.io/subIndex.html", "subIndex")
    newWin.postMessage(contentMess, "https://khoapnn21.github.io/subIndex.html");	


};

window.addEventListener("message", parentDisplay,false );

function parentDisplay(e) {
    if (e.origin !== "https://khoapnn21.github.io/index.html") return;
    document.getElementById("displayMsg").innerHTML += e.data  ;
    
}
 




