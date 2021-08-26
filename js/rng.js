function generate()
{
    var a = +document.getElementById("lower").value;
    var b = +document.getElementById("upper").value;
    console.log(a);
    console.log(b);
    if(!isNaN(a) && !isNaN(b)){
        
        document.getElementById("output").innerHTML = (Math.floor(Math.random() * (b - a + 1)) + a);
    }
}
function reset()
{
    document.getElementById("lower").value="";
    document.getElementById("upper").value="";
    document.getElementById("output").textContent="Generated Number";

}

