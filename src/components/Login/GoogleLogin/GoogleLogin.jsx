import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import "../Login.css";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../../hooks/useUserContext";
import { setAccessToken } from "../../../stores/AccessTokenStore";

const GoogleAuth = () => {
  const { push } = useHistory();
  const { getUser: doLogin } = useUserContext();
  const responseSuccessGoogle = (response) => {

    axios({
      method: "POST",
      url: "http://localhost:3001/api/googlelogin",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      setAccessToken(response.access_token);
      doLogin().then(() => push("/userprofile"));
    });
  };

  const responseErrorGoogle = (response) => {};

  return (
    <div className="true">
      <GoogleLogin
        clientId="346173711034-9v4f1b4hstrbjagq5ugdlf7nd66uplfh.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />
      ,
    </div>
  );
};

export default GoogleAuth;
