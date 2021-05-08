import { ContactlessOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { editUser, getUserInfo } from "../../../services/UserService.js";
import FormEditProfile from "./FormEditProfile";
import './EditProfile.css'

export default function EditProfile() {
  const { id } = useParams();
  const { push } = useHistory();
  const [user, setUser] = useState();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getUserInfo(id).then((user) => setUser(user));
  }, [id]);

  if (!user) {
    return "Loading...";
  }

  const onChange = (event) => {
    setUser((old) => {
      let value = event.target.value;
      if (event.target.type === "file") {
        value = event.target.files[0];
      } else if (event.target.tagName === "SELECT") {
        value = [...event.target.selectedOptions].map((o) => o.value);
      }
      return { ...old, [event.target.id]: value };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.entries(user).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log("formdatauser", formData)
    editUser(formData)
      .then(() => {
        push("/userProfile");
      })
      .catch((e) => {
        if (e.response.status === 400) {
          setErrors(e.response.data.errors);
        }
      });
  };

  return (
    <div className="">
      <div className="shownavbar"></div>
      <div className="edit-user">
        <form onSubmit={onSubmit} >
          <FormEditProfile
            name="Name"
            id="name"
            value={user.name}
            onChange={onChange}
            error={errors.name}
          />
          <FormEditProfile
            name="Description"
            id="description"
            value={user.description}
            onChange={onChange}
            error={errors.description}
          />
          <FormEditProfile
            name="Address"
            id="address"
            value={user.address}
            onChange={onChange}
            error={errors.address}
          />

          <FormEditProfile
            name="Image"
            id="image"
            onChange={onChange}
            error={errors.image}
            type="file"
          />
          <button type="submit" className="btn btn-outline-primary mt-3 " >
            Edit
      </button>
        </form>
      </div>
    </div>
  );
}
