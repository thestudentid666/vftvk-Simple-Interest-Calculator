function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if(principal=="" | principal=="0" ) {
    alert("Please input a positive number!")  }
    else {
      document.getElementById("result").innerHTML="If you deposit "+principal+",<br> at an interest rate of "+rate+"%. <br>You will receive an amount of "+interest+",<br> in the year "+year;
    }


};

function updateRate()
{
    var rateval = document.getElementById("rate").value;

   document.getElementById("rate_val").innerText=rateval;
 console.log(rateval);

}
