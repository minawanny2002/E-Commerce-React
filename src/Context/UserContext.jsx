import React, { createContext, useEffect, useState } from 'react'


export const userContext = createContext();


const UserContextProvider = ({children}) => {

    const [userToken, setuserToken] = useState(null);

    useEffect(()=>{
        if(localStorage.getItem('userToken') !== null)
        {
            setuserToken(localStorage.getItem('userToken'));
        }
    },[])
    return (
        <userContext.Provider value={{userToken , setuserToken}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider