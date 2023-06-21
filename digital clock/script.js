function func() {
let hours=document.getElementById('h');
let minutes=document.getElementById('m');
let seconds=document.getElementById('s');
let time=document.getElementById('tm')

let now =new Date();
let hr=now.getHours();
let mn=now.getMinutes();
let sc=now.getSeconds();

let tm= (h>=12)?"PM":"AM" 

if (hr>12) {
    hours=hr-12;
}

hr=(hr<10)?"0"+hr:hr;
mn=(mn<10)?"0"+mn:mn;
sc=(sc<10)?"0"+sc:sc;


hours.innerHTML=hr;
minutes.innerHTML=mn;
seconds.innerHTML=sc;
time.innerHTML=tm;

}

setInterval(() => {
    func();
}, 1000);