console.log('mukik');

function change() {


    var div1 = document.getElementById("div1");

    var text = div1.innerHTML = "<h1>szöveg2</h1>";

}


  var statuschecker = true;

function teszt_func1() {

    if (statuschecker === true) {
        document.getElementById("mooving-attribute").style.width = "800px";
    statuschecker = false
    }

       else if (statuschecker === false) {
        document.getElementById("mooving-attribute").style.width = "400px";
        statuschecker = true
    }

}

