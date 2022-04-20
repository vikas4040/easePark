
import React, { useState } from 'react';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
 
function Time() {


  const [dt, setDt] = useState(moment());
  return (
    <div className="App">
      <h2>Datetime picker in ReactJS - <a href="https://www.cluemediator.com">Clue Mediator</a></h2>
      <DatePicker
        value={dt}
        onChange={(val)=>{
            setDt(val)
            console.log("hghghgh ",dt)
          } }
      />
      
    </div>
  );
}
 
export default Time;