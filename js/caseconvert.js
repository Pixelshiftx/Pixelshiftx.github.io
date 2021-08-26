function toLower()
{
    var text = document.getElementById("boxs").value;
    var lower =  text.toLowerCase();
    document.getElementById("boxs").value=lower;
}
function reset()
{
    
    document.getElementById("boxs").value="";

}
function toUpper()
{
    var text = document.getElementById("boxs").value;
    var upper=  text.toUpperCase();
    document.getElementById("boxs").value=upper;
}

function capitalizeEach() {
    var lmao = document.getElementById("boxs").value;
    var text = lmao.split(" ");
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i][0].toUpperCase() + text[i].substr(1);
    }
    
    document.getElementById("boxs").value=text.join(" ");
 }

function alternating()
{
    var text = document.getElementById("boxs").value;
    var char = text.toLowerCase().split("");
    for (var i = 0; i < char.length; i += 2) {
      char[i] = char[i].toUpperCase();
    }
    
    document.getElementById("boxs").value=char.join("");
}