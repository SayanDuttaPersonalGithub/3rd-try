function fun(a,b){
    let elm =document.querySelector(`#p${a}`);
        let elm1= document.querySelector(`#r${a}`);
        elm.innerHTML=`<p
        class="glow"
        style=" 
        
        text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
            color: #fff6a9;
          font-family: "Sacramento", cursive;
          text-align: center;
          animation: blink 12s infinite;
          -webkit-animation: blink 12s infinite;
          @-webkit-keyframes blink {
            20%,
            24%,
            55% {
              color: #111;
              text-shadow: none;
            }
          
            0%,
            19%,
            21%,
            23%,
            25%,
            54%,
            56%,
            100% {
          /*     color: #fccaff;
              text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
                0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
            text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
              color: #fff6a9;
            }
          }
          
          @keyframes blink {
            20%,
            24%,
            55% {
              color: #111;
              text-shadow: none;
            }
          
            0%,
            19%,
            21%,
            23%,
            25%,
            54%,
            56%,
            100% {
          /*     color: #fccaff;
              text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
                0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
            text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
              color: #fff6a9;
            }
          }
          
        font-size: 25px;
        font-weight: bold;
        
        color: green;" 
        opacity: 100%;
        
        >${b}</p>`
        elm.addEventListener("mouseout",()=>{
            let elm1= document.querySelector(`#p${a}`)
            elm.innerHTML=""
        
        })
    };
        