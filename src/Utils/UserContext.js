import { createContext } from "react";

const UserContext=createContext(
    {
        loggedInUser:'Default User',
        UserRole:'Admin'
    }
)
export default UserContext;