
console.log("mukodik1452");


var selector_text = document.querySelectorAll(".buttons");


selector_text[0].style.backgroundColor = "green";


selector_text[1].style.backgroundColor = "purple";







const input = document.querySelector('textarea');
const log = document.getElementById('log');

var result = (document.getElementById("textarea_id"));


input.addEventListener('keyup', logKey);

function logKey() {
  log.textContent = ((result.value).length);

}





const buttonsWrapper = document.querySelector('#buttons-wrapper');
buttonsWrapper.addEventListener('click',selectRow);


function selectRow(e){
  console.log(e.target.id);
}

 var json_textbox = document.getElementById("textarea_json")
    data_for_back = JSON.parse(localStorage.getItem("info"))

  json_textbox.textContent=data_for_back["textbox"]

console.log(data_for_back,"2137")


function json_converter() {

  var json_textbox = document.getElementById("textarea_json")


  var sitedata = {"textbox": json_textbox.value}

  localStorage.setItem("info",JSON.stringify(sitedata))

  data_for_back = JSON.parse(localStorage.getItem("info"))


  //sjson_textbox.textContent(data_for_back)
  
}


function error_handling() {



var numerator = Number (prompt("Please enter numerator"));

var denominator = Number (prompt("Please enter denominator(if you give to 0 give an error)"));

try {
  if (denominator === 0)

  {throw {error:"Zero divede error"} }

  else

    {document.write("Result =" + (numerator/denominator))}}

  catch (e)

  {document.write(e.error)}}

// create the variables what i will use the block_mooving//
 var block, speed, length;

function activate_blocks() {

    block = document.querySelectorAll("div.blocks");
    for (var i = 0; i < block.length; i++) {
        // make variables from data//
        speed = block[i].dataset.speed;
        length = block[i].dataset.distance;


        // give that variables to css//

        block[i].style.left = length + "px";
        block[i].style.transitionDuration = speed + "s";
    }
}
    // start the function//

    window.addEventListener("load", activate_blocks);
