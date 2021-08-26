function generate()
{
    var a = document.getElementById("lower").value;
    var b = document.getElementById("upper").value;
    console.log(a);
    console.log(b);
    // To set present_dates to two variables
   
    var res = new Date(b).getTime() - new Date(a).getTime()
 
    // To calculate the no. of days between two dates
    var Difference_In_Days = res / (1000 * 3600 * 24);
  
    var result = Math.abs(Difference_In_Days)
    console.log(result);
        if (result==1)
        {
            document.getElementById("output").innerHTML = result +" Day";
        }
        else if (result == 0)
        {
            document.getElementById("output").innerHTML = "You have picked the same day!";
        }
        else {
            document.getElementById("output").innerHTML = result +" Days";
        }
        
    
}
function reset()
{
    document.getElementById("lower").value="";
    document.getElementById("upper").value="";
    document.getElementById("output").textContent="Day Difference";

}

