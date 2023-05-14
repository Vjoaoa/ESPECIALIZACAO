import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext({});


const  MyProvider = ({children}) => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");


    useEffect(() => {

        const response = localStorage.getItem("@user_email");

        if (response) {
            setUserEmail(response)
        }

    },[]);

    const logout = () => {
        navigate("/login");
        localStorage.clear();
    }

    const changeUserEmail = (email) => {
        setUserEmail(email);
        localStorage.setItem("@user_email", email);
    }

    return(
    <MyContext.Provider value={{ userEmail, logout, changeUserEmail }}>
      {children}
    </MyContext.Provider>

    )

}

export default MyProvider