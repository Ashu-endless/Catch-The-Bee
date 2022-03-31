import './Playground.css'
import React, { useState, useEffect } from 'react';
import Bee from './Bee';
import Timer from './Timer';


var PlaygroundEl;
// var BeeEl;
// var NetEl;


    
function Playground() {
  function BeeVar(x,y,h,w){
    this.x = x
    this.y = y
    this.h = h
    this.w = w
  
  }
  const BeeDicts = [new BeeVar(10,20,50,60), new BeeVar(50,50,60,70)]
  
      const startcapturung=(e)=>{
        // console.log(BeeDict[0].x)
        
        // console.log(e)
        // (document.querySelector('path')).remove()
        PlaygroundEl = document.querySelector('svg')
          var path = document.createElementNS('http://www.w3.org/2000/svg', 'image');
          path.classList.add("catchingNet")
          PlaygroundEl.append(path)
          var ex = e.clientX 
          var ey = e.clientY
          console.log(ex,ey)
          path.setAttributeNS(null, "href", "https://www.downloadclipart.net/large/wire-png-photo.png")
          path.setAttributeNS(null, "height", 0)
          path.setAttributeNS(null, "width", 0)
          path.setAttributeNS(null, "x", ex)
          path.setAttributeNS(null, "y", ey)
  
          document.onmousemove = (e) => {
          if(e.clientY - ey > 0){
            if( path.getAttribute("height")  < 200){
            path.setAttributeNS(null, "height", e.clientY - ey)}
            console.log(e.clientY - ey)
            // path.setAttributeNS(null, "y", e.clientY)
          } else{
            if( path.getAttribute("height")  < 200){
            path.setAttributeNS(null, "height", ey - e.clientY)
            path.setAttributeNS(null, "y", e.clientY)}
          }
          if(e.clientX - ex > 0){
            if( path.getAttribute("width")  < 200){
            path.setAttributeNS(null, "width", e.clientX - ex)}
          }else{
            if( path.getAttribute("width")  < 200){
            path.setAttributeNS(null, "width", ex - e.clientX)
            path.setAttributeNS(null, "x", e.clientX)}
          }
          
              
  
  
          }
          document.onmouseup = (e) => {
            // console.log(Timer.state)
            // console.log(Bee.i)
            // var d = new Bee()
            // console.log(d.i)
            // console.log(document.body.append(d.render()))
            // console.log(Bee.render())
            // Bee.i()
            path.setAttributeNS(null, "href", "https://snipstock.com/assets/cdn/png/9e00099e592f90d6471b2eec694c11bd.png")
            var catched = false;
              // var b = Beeposition;
              var n = path.getBoundingClientRect();
              for(var el of document.querySelectorAll('.Bee')){
                var b = el.getBoundingClientRect()
                if((b.x >= n.x) && (b.y >= n.y) && (b.right <= n.right) && (b.bottom <= n.bottom)){
                  var img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                  
                  img.setAttributeNS(null, "height",el.getAttribute('height'))
                  img.setAttributeNS(null, "width",el.getAttribute('width'))
                  img.setAttributeNS(null, "x",el.getAttribute('x'))
                  img.setAttributeNS(null, "y",el.getAttribute('y'))
                  catched = true;
                  console.warn(el)
                  // return 
                  // console.log(this.intervalId)
                  // clearInterval(interval)
                img.setAttributeNS(null, "href", 'https://lh3.googleusercontent.com/uB7d3wmnkjpDWjItlBzx4KdwpYoxaeyhwEdHp1_wVsLoU_nfVVHpBs6ArStU-qo9dT1NWMLpc8eMYv-pfsS6Ll_aPS7hHwbHz8At1sfoDje6xs4FPwkI1sSeKAdI02wK792G4dIUe5mUExeQfPnQFg6kcZVbbbjwHwZYT0lPDVWslkObilXLOFts4K5MLC1oA62v8KxSHaY5Bu5Jx7ODKDkFVUoUi3dcwviw2D1CNyAMwm561srF3qWzIiloSRe03252xwkVvBpF4m5B1HZYvNTvbdVA_kCtKWFBY48iDZgZYRvTTnc6G9WVxOFPioAQlJJADRvJenAdp9QoYaC8cgBw-SXwGHl-5p0A34RC7RIUwVa52bRRMvYQilbH2fKZvIAJ6BJPtdMf_y7I9PQdg33TQkaTlcdTbMcpYyJt5rFEKW8CbbLDWL9jRdittivKN1oE-F0rF8Zc-uyj4u7xwInSJ2q3cKixsNwLASJNVxLQJ9C-RzSCn1vEmAj8XDjwjTLrTdjeHwpuZ-u1vARFz3ZkxitC2TiV1ziw0qYRpBe3Sy_GZ8m8rXu6zbz2uKddvwNK3PaVHNaKRmJlVGrFQPdIL_Ykfof6VOLniY8_ACEGnPmiTh9cCDdEq_oRrL8cKK6T8NyY6ou_shtogfPD9BoOnYwqUCQoOQWAfR7z0g9sTczPIFcBYuHep_Zek8coKf0VX3s00iP9Oq0kGBUcPYLWB3_lmvcSFIhCRI5t2Ag2GXxO_8p86tPrD0DHX409I9HtI05jWq-8lIIZh8qkeuwTR4ijEhImbSaSvlaTx5ngNnT-eadi40opFqFqI6EEGswgc0aWUIr4tYDJC0aw_ypED8Cbecdjm9Fmt8eYa3g=w667-h695-no?authuser=0')
                  // img.setAttributeNS(null, "href", "https://media.giphy.com/media/xUPGciNqVnV8qHPKNi/giphy.gif")
                  
                  PlaygroundEl.append(img);
                  var a = document.createElement('span');
                  a.innerHTML = "+1"
                  a.classList.add('plus1')
                  a.style.left =   `${parseFloat(el.getAttribute('x') - 30)}px`
                  a.style.top =   `${parseFloat(el.getAttribute('y')) - 30}px`
                  document.body.append(a)
                  // eslint-disable-next-line no-loop-func
                  setTimeout(() => {
                    img.style.opacity = '1'
                    a.style.opacity = '1'
                    img.style.transition = `0.5s linear all`
                    a.style.transition = `0.5s linear all`
                    img.setAttributeNS(null, "y",'50')
                    a.style.top = '50px'
                    img.setAttributeNS(null, "x",'50')
                    a.style.left = '50px'
                    setTimeout(() => {
                      img.style.opacity = '0'
                      a.style.opacity = '0'
                      setTimeout(() => {
                        img.remove()
                        a.remove()
                      }, 500);
                  SetScore(Score+1)

                    }, 500);
                  }, 500);
              //   document.querySelector('#score').innerHTML = Score
              }
              }
              if(catched){
                setTimeout(() => {
                  path.style.transition = `1s linear all`
                  path.setAttributeNS(null, "y",'50')
                  path.setAttributeNS(null, "x",'50')
                    setTimeout(() => {
                      path.style.opacity = '0'
                      setTimeout(() => {
                        path.remove()
                      }, 500);
                    }, 500);
                }, 500);}


              if(catched === false){
              setTimeout(() => {
                path.style.transition = `1s linear all`
                path.style.opacity = "0"
                setTimeout(() => {
                  path.remove()
                }, 1000);
              }, 2000);}
            //   if((b.x >= n.x) && (b.y >= n.y) && (b.right =< n.right) && (b.bottom =< n.bottom)){
            //   if((b.x >= n.x) && (b.y >= n.y) && (b.right <= n.right) && (b.bottom <= n.bottom)){
            //     SetScore(Score+1)
            // //   document.querySelector('#score').innerHTML = Score
            // }
            document.onmousemove = () => {
  ""
              }
          }
      
      };
    let interval;
    const startTimer = ()=>{

      document.querySelector('#Time').click()
      interval = setInterval(() => {
        BeeDicts.push(new Bee(60,60,60,60))
          SetAllBees(BeeDicts.map(BeeDict => {
            return (
              <Bee key={BeeDict.id} X={BeeDict.x} Y={BeeDict.y} Height={BeeDict.Height} Width={BeeDict.Width} />
              
            )
          }));
          console.warn('bee entered')
      }, 3000);
    }

    const [Score, SetScore] = useState(0);
    const [AllBees, SetAllBees] = useState(BeeDicts.map(BeeDict => {
      return (
        <Bee key={BeeDict.id} X={BeeDict.x} Y={BeeDict.y} Height={BeeDict.Height} Width={BeeDict.Width} />
        
      )
    }));
    // let AllBees = BeeDict.map(BeeDict => {
    //   return (
    //     <Bee key={BeeDict.id} X={BeeDict.x} Y={BeeDict.y} Height={BeeDict.Height} Width={BeeDict.Width} />
        
    //   )
    // });

// !!!
    
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       BeeDicts.push(new Bee(60,60,60,60))
    //         SetAllBees(BeeDicts.map(BeeDict => {
    //           return (
    //             <Bee key={BeeDict.id} X={BeeDict.x} Y={BeeDict.y} Height={BeeDict.Height} Width={BeeDict.Width} />
                
    //           )
    //         }));
    //         console.warn('bee entered')
    //     }, 3000);
        
    //     return () => clearInterval(interval);
    //   }, [SetAllBees]);
    // // !!!
    // useEffect(() => {
    //   setInterval(() => {
    //     BeeDicts.push(new Bee(60,60,60,60))
    //   SetAllBees(BeeDicts.map(BeeDict => {
    //     return (
    //       <Bee key={BeeDict.id} X={BeeDict.x} Y={BeeDict.y} Height={BeeDict.Height} Width={BeeDict.Width} />
          
    //     )
    //   }));
    //   }, 1000);
      
    // },);

      
    

  return (
    <div>
        <div id='score'> <span>Score : </span> <span>{Score}</span></div>
        <Timer/>
        <div id='Startbtn' onClick={startTimer} >Start game</div>
        <svg id={"PlaygroundSvg"} onMouseDown={startcapturung} >
        {/* <defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z'  stroke-width='1' stroke='hsla(258.5,59.4%,59.4%,1)' fill='none'/></pattern></defs> */}
        {/* <defs><pattern id='a' patternUnits='userSpaceOnUse' width='10' height='10' patternTransform='scale(1) rotate(25)'><rect x='0' y='0' rx="1.5" width='5' height='5' fill='hsla(0, 0%, 100%, 1)'/><path d='M3.25 10h13.5M10 3.25v13.5'  strokeLinejoin='round' stroke-linecap='round' stroke-width='5' stroke='hsla(0, 0%, 0%, 1)' fill='none'/></pattern></defs> */}
        {/* <image id='BeeImg' className='Bee' href="https://media.giphy.com/media/dAQm2Zbd1YWomvMGd4/giphy.gif" height={BeeHeight} width={BeeWidth} x={BeeX} y={BeeY} ></image> */}
        {/* <image id='BeeImg' className='Bee' href="https://media.giphy.com/media/XHq9lSyp0GwBFHERIj/giphy.gif" height={BeeHeight} width={BeeWidth} x={BeeX} y={BeeY} ></image> */}
        {/* <Bee/> */}
        {AllBees}
        </svg>
        <div id='AfterGameFinsih'> <span> Game Over </span> Play Again <span></span>  </div>

    </div>
  );
}

export default Playground;
