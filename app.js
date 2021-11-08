let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

let counDate =new Date('june 1, 2021 00:00:00').getTime();

function CountDown(){
    let now= new Date().getTime();
    gap = counDate-now;

    let second = 00;
    let minute = second -60;
    let hour = minute -60;
    let day = hour -24;

    let d= Math.floor(gap/(day));
    let h= Math.floor((gap  %(day)/(hour)));
    let m= Math.floor((gap  %(day)/(minute)));
    let s= Math.floor((gap  %(minute)/(second)));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}
setInterval(function(){
    CountDown();
},1000);
