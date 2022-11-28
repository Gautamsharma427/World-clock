const alarm = document.getElementById("alarm");
const btn = document.getElementById("btn");
const india = document.getElementById("india");
const china = document.getElementById('china');
const dubai = document.getElementById('dubai');
const Canada = document.getElementById("canada");
const america = document.getElementById("america");
const russia = document.getElementById("russia");
const singapore = document.getElementById("singapore");
function splitter() {
 /*
 Take the value of date and splits it into only hrs and minutes
 */
const date = new Date().toLocaleString('en-IN',{timeZone:"IST"});
const time = date.split(', ');
const initial_time = time[1].split(':');
const semifinaltime = initial_time[2].split(' ');
    return(initial_time[0]+":"+initial_time[1]+" "+semifinaltime[1]+" ")
}
function converter(){
  const splitted = alarm.value.split(':');
  const hr = parseInt(splitted[0]);
  const min = parseInt(splitted[1]);
  let timer = "";
  if (hr == 0 && min<=59) {
    timer = (parseInt(hr) + 12 + ":" + min + " am ")
  }
  else if(hr>=1 && hr<=11 && min<=59 ){
    timer = (parseInt(hr)+":"+min+" am ")
  }
  else if(hr==12 && min<=59){
    timer = (parseInt(hr)+":"+min+" pm ")
  }
  else if(hr>=13 && hr<=23 && min<=59){
    timer = (parseInt(hr)-12+ ":"+min+" pm ")
  }
  return(timer);
}
const time = () => {
    const date = new Date()
    const CH = date.toLocaleString("en-IN",
      {
        timeZone: 'Asia/Shanghai'
      })
    china.innerHTML = CH;
    const d2 = new Date()
    const IN = d2.toLocaleString('en-IN', {
      timeZone: "IST"
    })
    india.innerHTML = IN;
    const US = new Date().toLocaleString('en-IN', {
      timeZone: "AET"
    })
    america.innerHTML = US;
    const Dubai = new Date().toLocaleString('en-IN',{
      timeZone:"Asia/Dubai"
    })
    dubai.innerHTML = Dubai;

    const Canda = new Date().toLocaleString('en-IN',{
      timeZone:'EST'
    })
    Canada.innerHTML = Canda
    russia.innerHTML = new Date().toLocaleString('en-IN',{
      timeZone:"Europe/Moscow"
    })
    singapore.innerHTML = new Date().toLocaleString('en-IN',{timeZone:"Asia/Singapore"})
   if(splitter()==converter()){
    const audio = new Audio('');
    audio.play()
   }
  }
  setInterval(time, 1000);    