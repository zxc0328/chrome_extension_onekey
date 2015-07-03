(function(){

    var main = document.getElementById("main");
    var tr_c = main.contentDocument.getElementsByTagName("tr").length - 14;
    for (i=0;i<tr_c;i++){
        document.getElementById("main").contentDocument.getElementsByName("radio"+i)[0].checked = true;
    }
    document.getElementById("main").contentDocument.getElementsByName("radio"+(tr_c-1))[1].checked = true;
    for (i=0;i<4;i++){
        document.getElementById("main").contentDocument.getElementsByName("radio_s"+i)[1].checked = true;
    }

})();