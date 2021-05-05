import React, { useState } from 'react'
import { removeUser } from '../../services/UserService'
import { useHistory } from "react-router";
import {logout} from '../../stores/AccessTokenStore'

const DeleteUser = () => {
    const { push } = useHistory();
    const [user, setUser] = useState()
    const [errors, setErrors] = useState({});

    const remove = () => {
        removeUser(setUser)  
            .then(() => {
                logout()
                push("/");
            })
            .catch((e) => {
                if (e.response.status === 400) {
                    setErrors(e.response.data.errors);
                }
            });

    }


    return (
        <button className="w-10 btn btn-lg btn-outline-danger" onClick={remove}>Delete</button>
    )
}

export default DeleteUser