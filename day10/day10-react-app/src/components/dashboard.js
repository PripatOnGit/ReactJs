import { useParams } from "react-router-dom";

const DashBoard =()=> {
    let {category} = useParams();
    return(
        <h2 style={{color:"grey"}}>This is Dashboard component. Parameters are {category}</h2>
    );
}
export default DashBoard;