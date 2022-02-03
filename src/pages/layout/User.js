import React from 'react';
import {Link,Outlet} from "react-router-dom";

const User = (props) => {
    let {item} = props;
    let {name,id} = item;
    return (
        <div>
            {id}-{name}-
            <Link
                to={'/layout/users/' + id}
                state={item}>details
            </Link>

        </div>
    );
};

export default User;