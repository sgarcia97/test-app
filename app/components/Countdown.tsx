'use client'
import {useEffect, useState} from "react"

const Countdown = () => {
  const [co,setCo] = useState(0);
  const [min,setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [hour, setHour] = useState(0)
  const [day,setDay] = useState(0)
  const [service, setService] = useState("")
  const [start, setStart] = useState(false)
  useEffect(() => {

    let getNextDay = (dayName) => {

        // The current day
        let date = new Date();
        let now = date.getDay();
        let df = dayName.toLowerCase();
        // Days of the week
        let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
        // The index for the day you want
        let day = days.indexOf(dayName.toLowerCase());
       
        // Find the difference between the current day and the one you want
        // If it's the same day as today (or a negative number), jump to the next week
        let diff = day - now;
        diff = diff < 1 ? 7 + diff : diff;
    
        // Get the timestamp for the desired day
        let nextDayTimestamp = date.getTime() + (1000 * 60 * 60 * 24 * diff);
        let dd = new Date(nextDayTimestamp).toLocaleDateString("en-US",{timeZone: "America/Port_of_Spain"});

        // Get the next day
        return dd;
    };
 
      let nd = new Date();
      let wd = nd.getDay();
      let ti = nd.getHours();
      let pbsF = getNextDay("tuesday") + " 19:30:00";
      let smF = getNextDay("sunday") + " 10:30:00";
      let seF = getNextDay("sunday") + " 18:30:00";
      let pbs = new Date(pbsF).getTime();
      let sm = new Date(smF).getTime();
      let se = new Date(seF).getTime();
      //let md = new Date().getTime();
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
        setService(t)
        // If the count down is finished, write some text
      if (distance < 0) {
          clearInterval(x);
          setStart(false) 
      }
      }, 1000);
      
      return () => clearInterval(x)

  },[])
  
  return (
    <>
    <div className="countdown-title">{start ? `Our ${service} is in progress` : `Our ${service} starts in`}</div>
    <div className="countdown-wrapper">
        <div className="count">{day}<span>day(s)</span></div>
        <div className="count">{hour}<span>hour(s)</span></div>
        <div className="count">{min}<span>min(s)</span></div>
        <div className="count">{sec}<span>sec(s)</span></div>
    </div>
    </>
  )

}

export default Countdown;