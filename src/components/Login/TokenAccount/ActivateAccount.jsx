import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { activate } from "../../../services/AuthAccount.js"

const ActivateAccount = () => {
    const { token } = useParams();
    const [, setActivate] = useState(false)



    useEffect(() => {
      activate(token)
      .then (res =>{
        if(res.status === 204 ){
          setActivate (true)
        }
      }) 
    }, [token]);

    return (
      <div className="image__activate">
        <div className="title">
          <h1>Your account has been activated!</h1>
          <Link className="acount__link" style={{ color: "#FFF" }} to="/login">
            Go to login
          </Link>
        </div>
      </div>
    );
  };
  export default ActivateAccount;