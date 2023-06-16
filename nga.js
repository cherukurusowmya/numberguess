var a=0;
var y=Math.floor((Math.random()*100)+1);
check=()=>{
    var b="Congratulations!!! you got the number in ";
    var c="tries";
    var d="Try with smaller number";
    var e="Try with greater number";
    var x=parseInt(document.getElementById("n1").value);
    if(x==y)
    {
        var p=b+a+c;
        b=document.getElementById("result").textContent=p;
    }
    else{
        a++;
        if(y<x)
        {
            var p=a+d;
            b=document.getElementById("result").textContent=p;
        }
        else{
            var p=a+e;
            b=document.getElementById("result").textContent=p;
        }
    }
}
