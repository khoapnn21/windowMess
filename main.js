function sendMess() {
    let contentMess = document.getElementById("textMess").value
    if(contentMess === '') return;
    
    let newWin = window.open("http://127.0.0.1:5500/subIndex.html", "subIndex")
    newWin.postMessage(contentMess, "http://127.0.0.1:5500/subIndex.html");	


};

window.addEventListener("message", parentDisplay,false );

function parentDisplay(e) {
    if (e.origin !== "http://127.0.0.1:5500") return;
    document.getElementById("displayMsg").innerHTML += e.data  ;
    
}
 




