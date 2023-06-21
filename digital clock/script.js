function clock()
{
    let hours=document.getElementById('hrs'); 
    let minutes=document.getElementById('mins'); 
    let seconds=document.getElementById('scnds'); 
    let periods=document.getElementById('prds');

    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    
    if (h>12) {
        h=h-12;
    } 

    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;
   
    let ampm= h>=12?"PM":"AM";
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    periods.innerHTML=ampm;
};

setInterval(clock,1000);