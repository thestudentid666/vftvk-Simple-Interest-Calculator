function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if(principal=="" |  principal <= 0 ) {
    alert("Please input a positive number!");
    document.getElementById("principal").focus();

    }
    else {
      document.getElementById("result").innerHTML="If you deposit <a class='yellowfont'>"+principal+"</a>,<br> at an interest rate of <a class='yellowfont'>"+rate+"%</a>. <br>You will receive an amount of <a class='yellowfont'>"+interest+"</a>,<br> in the year <a class='yellowfont'>"+year+"</a>";
    }


};

function updateRate()
{
    var rateval = document.getElementById("rate").value;

   document.getElementById("rate_val").innerText=rateval;
 console.log(rateval);

}
