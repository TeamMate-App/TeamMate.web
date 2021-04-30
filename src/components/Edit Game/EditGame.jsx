 import { useState } from "react";
import { useHistory } from "react-router-dom";
import { putEditMatch } from "../../services/GameService";
import FormEditMatch from "./FormEditMatch";

export default function LinkEditGame(props) {
  const [match, setMatch] = useState(props.location.state);
  const { push } = useHistory();
  const [errors, setErrors] = useState({});

  if (!match) {
    return "Loading...";
  }
  const onChange = (event) => {
    setMatch((old) => {
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
    Object.entries(match).forEach(([key, value]) => {
    formData.append(key, value);
     });
    putEditMatch(match.id,formData)
      .then(() => {
        push("/listGames");
      })
      .catch((e) => {
        if (e.response.status === 400) {
          setErrors(e.response.data.errors);
        }
      });
  };

  return (
    <form onSubmit={onSubmit} className="container">
      <FormEditMatch
        name="name"
        id="name"
        value={match.name}
        onChange={onChange}
        error={errors.name}
      />
      <FormEditMatch
        name="address"
        id="address"
        value={match.address}
        onChange={onChange}
        error={errors.description}
      />
      <FormEditMatch
        name="image"
        id="image"
        onChange={onChange}
        error={errors.image}
        type="file"
      />
      <button type="submit" className="btn btn-primary mt-3">
        Edit
      </button>
    </form>
  );
} 