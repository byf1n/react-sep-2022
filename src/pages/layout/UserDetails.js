import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const UserDetails = () => {
    let {state:user} = useLocation();

    return (
        <div>
            {
                JSON.stringify(user)
            }
        </div>
    );
};

export default UserDetails;