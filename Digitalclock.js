let HourSpan=document.getElementById('hour')
let MinuteSpan=document.getElementById('minute')
let SecondSpan=document.getElementById('second')
let amorpmSpan=document.getElementById('amorpm')

function ChangeTime(){
     let date= new Date()
     let hour=date.getHours()
     HourSpan.textContent=hour
     let minute=date.getMinutes()
     MinuteSpan.textContent=minute
     let second=date.getSeconds()
     SecondSpan.textContent=second
     if(hour>=0&& hour<=11){
        amorpm="AM"
     }
     else{
        amorpm="PM"
     }
     amorpmSpan.textContent=amorpm
}
setInterval(ChangeTime,1000)