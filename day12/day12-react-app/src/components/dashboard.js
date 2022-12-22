//import { useParams } from "react-router-dom";

const DashBoard =(props)=> {
   // let {category} = useParams();
    return(
        <div>
            <h2 style={{color:"grey"}}>This is Dashboard component.</h2>
            <h2>This is the State {props.test}</h2>
        </div>
    );
}
export default DashBoard;