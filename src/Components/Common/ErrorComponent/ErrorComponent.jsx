import { useRouteError } from "react-router-dom";
import './ErrorComponent.css';


const ErrorComponent=()=>{
    const error=useRouteError();
    console.log(error)
    return(
    <div className="errorPage">
    <h1>{error.status} {error.statusText} </h1>
    <p>{error.error.message}</p>
    </div>
     
    )
}
export default ErrorComponent;