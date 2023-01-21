---
layout: post
title: 倒數計時
date: 2023-01-21
category: 詭
tags: [五四三]
mathjax: true
mathjax_autoNumber: false
---

到計時！

<!--more-->
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
    
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif; /* ,  'Rubik', 'Ubuntu', 'Rajdhani' */           
    }  
    body{   
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #2f363e;
    }
    #time{
        display: flex;
        gap: 30px;
    }
    #time .circle{
        position: relative;
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #time .circle svg{
        position: relative;
        width: 150px;
        height: 150px;
        transform: rotate(270deg);
    }
    #time .circle svg circle{
        width: 100%;
        height: 100%;
        fill: transparent;
        stroke-width: 8;
        stroke: #282828;
        stroke-linecap: round;
        transform: translate(5px,5px);
    }
    #time .circle svg circle:nth-child(2){
        stroke: var(--clr);
        stroke-dasharray: 440;
        stroke-dashoffset: 440;
    }
    #time div{
        position: absolute;
        text-align: center;
        font-weight: 500;
        color: #fff;
        font-size: 1.5em;
    }
    #time div span{
        position: absolute;
        transform: translateX(-50%) translateY(-10px);
        font-size: 0.35em;
        font-weight: 300;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }
    #time .dots{
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        z-index: 1000;
    }
    #time .dots::before{
        content: '';
        position: absolute;
        top: -3px;
        width: 15px;
        height: 15px;
        background: var(--clr);
        border-radius: 50%;
        box-shadow: 0 0 20px var(--clr),
                    0 0 60px var(--clr);
    }
    .newYear{
        font-size: 8em;
        font-weight: 500;
        color: #fff;
        text-align: center;
        line-height: 0.6em;
        display: none;
    }
    .newYear span{
        font-size: 0.5em;
        font-weight: 300;
    }
  <
    
    <div id="time">
        <div class="circle" style="--clr:#ffffff;">
            <div class="dots day_dot"></div>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" id="dd"></circle>
            </svg>
            <div id="days">00<br><span>Days</span></div>
        </div>
        <div class="circle" style="--clr:#ff2972;">
            <div class="dots hr_dot"></div>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" id="hh"></circle>
            </svg>
            <div id="hours">00</div>
        </div>
        <div class="circle" style="--clr:#fee800;">
            <div class="dots min_dot"></div>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" id="mm"></circle>
            </svg>
            <div id="minutes">00</div>
        </div>
        <div class="circle" style="--clr:#04fc43;">
            <div class="dots sec_dot"></div>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" id="ss"></circle>
            </svg>
            <div id="seconds">00</div>
        </div>       
    </div>
    <h2 class="newYear">2023<br><span>Happy New Year</span></h2>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->
    <!-- <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> -->

    <script>
        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');

        let dd = document.getElementById('dd');
        let hh = document.getElementById('hh');
        let mm = document.getElementById('mm');
        let ss = document.getElementById('ss');

        let day_dot = document.querySelector('.day_dot');
        let hr_dot = document.querySelector('.hr_dot');
        let min_dot = document.querySelector('.min_dot');
        let sec_dot = document.querySelector('.sec_dot');

        let endDate = '02/08/2023 00:00:00';
        // date format mm/dd/yyyy

        let x = setInterval(function(){
            let now = new Date(endDate).getTime();
            let countDown = new Date().getTime();
            let distance = now - countDown;

            let d = Math.floor(distance / (1000*60*60*24));
            let h = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
            let m = Math.floor((distance % (1000*60*60)) / (1000*60));
            let s = Math.floor((distance % (1000*60)) / (1000));

            days.innerHTML = d + "<br><span>Days</span>";
            hours.innerHTML = h + "<br><span>Hours</span>";
            minutes.innerHTML = m + "<br><span>Minutes</span>";
            seconds.innerHTML = s + "<br><span>Seconds</span>";

            dd.style.strokeDashoffset = 440 - (440 * d) / 365;
            hh.style.strokeDashoffset = 440 - (440 * h) / 24;
            mm.style.strokeDashoffset = 440 - (440 * m) / 60;
            ss.style.strokeDashoffset = 440 - (440 * s) / 60;

            day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
            hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
            min_dot.style.transform = `rotateZ(${m * 6}deg)`;
            sec_dot.style.transform = `rotateZ(${s * 6}deg)`;

            if(distance < 0){
                clearInterval(x);
                document.getElementById("time").style.display = 'none';
                document.querySelector(".newYear").style.display = 'block';
            }

        })
    </script>
