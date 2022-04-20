import moment from "moment";
import react from "react";
const History=(props)=>{
   const {history}=props
   

    return(

        <tr>
      <td className="w-10">
          {history[0]}
      </td>
      <td>
      {history[1]} 
      </td>
      <td>
      {history[2]} 
      </td>
      <td>
      {history[3]} 
      </td>
      <td>
      {history[4]} 
      </td>
      <td>
      {moment(history[5]).format("LLL")} 
      </td>
      <td>
      {moment(history[6]).format("LLL")} 
      </td>
      <td>
      {history[7]} 
      </td>
      <td>
      {history[8]} 
      </td>

    </tr>   
    )
}
export default History;
