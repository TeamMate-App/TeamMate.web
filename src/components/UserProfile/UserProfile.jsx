import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserProfile.css";
import DeleteUser from "../DeleteUser/DeleteUser";
import ListUsers from "../User/ListUsers";
import { getUserInfo } from "../../services/UserService";

const UserProfile = () => {
  const [user, setUser] = useState();
  const { id } = useParams();
  console.log("user", user)

  useEffect(() => {
    getUserInfo(id).then((user) => setUser(user));
  }, [id]);



  return (

    <div className="UserProfile">
      <div className="shownavbar"></div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <ListUsers />
            </div>
            <div className="col-8">
        
                <div className="container row info">
                  <div className="title-user-profile">
                    <p className="espace-user text-right"><strong><svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="-1.5 -1.5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon">
                      <path d="M18.433 5.359a.933.933 0 0 1 1.357 0c.375.39.375 1.022 0 1.412L8.26 18.78a4.663 4.663 0 0 1-6.783 0c-1.873-1.95-1.873-5.113 0-7.064L11.65 1.12a2.798 2.798 0 0 1 4.07 0c1.124 1.17 1.124 3.068 0 4.239L6.902 14.54a.933.933 0 0 1-1.356 0 1.028 1.028 0 0 1 0-1.412l8.818-9.183a1.028 1.028 0 0 0 0-1.413.933.933 0 0 0-1.357 0L2.832 13.13c-1.123 1.17-1.123 3.068 0 4.238a2.798 2.798 0 0 0 4.07 0L18.433 5.359z"></path>
                    </svg> Email:</strong></p>
                    <p className="espace-user text-right"><strong><svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="-2 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon">
                      <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-14a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V8a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2zM5.91 16.876a8.033 8.033 0 0 1-1.58-1.232 5.57 5.57 0 0 1 2.204-1.574 1 1 0 1 1 .733 1.86c-.532.21-.993.538-1.358.946zm8.144.022a3.652 3.652 0 0 0-1.41-.964 1 1 0 1 1 .712-1.868 5.65 5.65 0 0 1 2.284 1.607 8.032 8.032 0 0 1-1.586 1.225z"></path>
                    </svg> Username: </strong></p>
                    <p className="espace-user text-right"><strong><svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="-2 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon">
                      <path d="M2 4v4h12.98l2.853-1.714a.333.333 0 0 0 0-.572L14.98 4H2zm8-2h4.98a2 2 0 0 1 1.03.286L18.863 4a2.333 2.333 0 0 1 0 4L16.01 9.714a2 2 0 0 1-1.03.286H10v9a1 1 0 0 1-2 0v-9H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6V1a1 1 0 1 1 2 0v1z"></path>
                    </svg> Address: </strong></p>
                    <br />
                    <p className="espace-user text-right"><strong><svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon"><path d="M5.978 14.969a.38.38 0 0 1 .002-.033l-.002.033zm.001-.167a1.36 1.36 0 0 0 .001.003v-.003zm.04 1.9c2.678-2.462 3.007-2.656 3.793-2.734C13.364 13.615 16 11.01 16 8.004c0-3.26-3.085-6.003-7-6.003S2 4.745 2 8.004c0 1.893 1.175 3.767 3.054 4.957.783.495.958 1.117.941 1.778a2.548 2.548 0 0 1-.009.15c.022.33.032.92.033 1.814zm3.99-.743c-.185.018-1.625 1.276-4.32 3.774a1 1 0 0 1-1.68-.742c.02-2.362.011-3.709-.024-4.04-.018-.173.032-.28 0-.3C1.708 13.212 0 10.775 0 8.005 0 3.584 4.03 0 9 0s9 3.584 9 8.004c0 4.117-3.495 7.509-7.99 7.955z"></path>
                    </svg> About me: </strong></p>
                  </div>
                  <br />
                  <div className="col-6">
                    <p className="espace-user">{user?.email}</p>
                    <br />
                    <p className="espace-user">{user?.name}</p>
                    <br />
                    <p className="espace-user">{user?.address}</p>

                    <br />
                    <p className="espace-user">{user?.description}</p>
                  </div>
                </div>
              
            </div>
          </div>
          <DeleteUser />
        </div>
      </div>
   
  );
};

export default UserProfile;
