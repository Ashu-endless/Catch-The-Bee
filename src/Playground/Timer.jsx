import React from 'react';
import "./Timer.css"


 
class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          minutes: 1,
          seconds: 60,
        };
        this.start = this.start.bind(this)
      }

    
    start=()=>{
        // console.log('timer on')
        document.querySelector('#Startbtn').style.display = 'none'
        this.interval = setInterval(() => {
            // console.log('timer on')
        let sec = 0;
        let min = 0;
        if(this.state.seconds === 0 && this.state.minutes === 0){
            console.warn('game over')
            clearInterval(this.interval)
            document.querySelector('#AfterGameFinsih').style.display = "grid"
            // clearInterval(interval)
        }
        else if(this.state.seconds === 0){
            sec = 59
            min = this.state.minutes - 1
        }else {
            sec = this.state.seconds - 1
            min = this.state.minutes
        }
        
            this.setState((state) => ({
                seconds: sec,
                minutes : min
              }));
        }, 1000);
    }
    // const [seconds,setseconds] = useState(60);
    // const [minutes,setminutes] = useState(1);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if(seconds < 10 && minutes === 0){
    //             document.querySelector('#Time').classList.add("TimeAlert")
    //         }
    //         if(seconds === 0){
    //             console.log(seconds)
    //             setseconds(59)
    //             console.log(seconds)
    //         }else{
    //             setseconds(seconds - 1)

    //         }
            // if(minutes === 1 && seconds === 0){
            //     console.log(seconds)
            //     setseconds(60)
            //     console.log(seconds)
            //     setminutes(0)
            // }
            
        // }, 1000);
    //     const interval2 = setInterval(() => {
    //         if(minutes !== 0){
    //             setminutes(minutes-1)
    //         }
            
            
    //     }, 60000);
    //     return () => clearInterval(interval) && clearInterval(interval2);
    //   }, [seconds,minutes]);
    render() {
    return (<div id='Time' onClick={this.start} >  
    <span>{this.state.minutes}</span><span>:</span><span>{this.state.seconds}</span></div>)
    }
}

export default Timer