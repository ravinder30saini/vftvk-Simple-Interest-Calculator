function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    if(principal <= 0 || principal == ""){
        alert("Enter a positive value");
        document.getElementById("principal").focus();
    }
    else {
        var interest = principal*years*rate/100;
        var amount = principal+interest;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="Interest: If you deposit \<mark\>"+principal+",\<\/mark\>\<br\>at an interest rate of \<mark\>"+rate+"%\<\/mark\>\<br\>You will receive an amount of \<mark\>"+interest+",\<\/mark\>\<br\>in the year \<mark\>"+year+"\<\/mark\>\<br\>"

    }
}
   
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
