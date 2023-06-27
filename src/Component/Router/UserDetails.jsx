import React from "react"
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    
   /* const params = useParams();
      const userId = params.userId;
    */
    const { userId } = useParams();
    
    return(
        <React.Fragment>
            <h2>Details about the user {userId}</h2>
        </React.Fragment>
    )
}