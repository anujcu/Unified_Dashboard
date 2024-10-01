import { useRouteError } from "react-router-dom";

const ErrorComponent=()=>{
    const error=useRouteError();
    return(<>
        <h1>{error.status} {error.statusText} </h1>
        {/* <p>{error.error.message}</p> */}
        </>
    )
}
export default ErrorComponent;