import {useEffect, useState} from "react"

const Countdown = () => {
  const [co,setCo] = useState(0);
  const [min,setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [hour, setHour] = useState(0)
  const [day,setDay] = useState(0)
  useEffect(() => {

 
      let nd = new Date();
      let wd = nd.getDay();
      let ti = nd.getHours();
      let pbs = new Date("Jan 28, 2025 19:00:00").getTime();
      let sm = new Date("Jan 26, 2025 10:00:00").getTime();
      let se = new Date("Jan 26, 2025 17:30:00").getTime();
      let md = new Date("Jun 8, 2021 19:00:00").getTime();
      let t1 = "Sunday Morning Service";
      let t2 = "Sunday Evening Service";
      let t3 = "Prayer & Bible Study";
      let cal, t = null;
      if(wd == 2 && ti > 19 || wd > 2){cal = sm; t = t1;}else{
          if(wd == 2 && ti < 19){cal = pbs; t = t3;}else{ 
              if(wd == 0 && ti < 10){cal = sm; t = t1;} else{
      if(wd == 0 && ti > 10){cal = se; t = t2;}else{
          if(wd == 0 && ti > 17 || wd == 1){cal = pbs; t = t3;}else{cal = "";}    
      }
      }}}
      // Set the date we're counting down to
      let countDownDate = cal;
      
      // Update the count down every 1 second
      let x = setInterval(() => {
      
        // Get today's date and time
      let now = new Date().getTime();
      
        // Find the distance between now and the count down date
      let distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
         //Display the result in the element with id="demo"
      
      //setMin(minutes)
      setSec(seconds)
      setMin(minutes)
      setHour(hours)
      setDay(days)

        // If the count down is finished, write some text
      if (distance < 0) {
          clearInterval(x);
          //ti = "In Progress";  
      }
      }, 1000);
      
      return () => clearInterval(x)

  },[])
  
  return (
    <>
    <div className="countdown-wrapper">
        <div className="count">{day}<span>Days</span></div>
        <div className="count">{hour}<span>Hours</span></div>
        <div className="count">{min}<span>Min</span></div>
        <div className="count">{sec}<span>Sec</span></div>
    </div>
    </>
  )

}

export default Countdown;