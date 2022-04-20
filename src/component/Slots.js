import { Button,Box } from "reactstrap"

const Slots=(props)=>{
    const{data}=props
    console.log("xyz "+data)
return(
    <div style={{margin:"5px"}}>
    <Button style={{padding:"1rem 1.5rem"}}>{data}</Button>
    </div>
)
}
export default Slots