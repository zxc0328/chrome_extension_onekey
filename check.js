window.onload = function(){
    var btn = document.getElementById("btn");
    btn.addEventListener("click",function(){chrome.tabs.executeScript(null, {file: "content_script.js"});});
}


