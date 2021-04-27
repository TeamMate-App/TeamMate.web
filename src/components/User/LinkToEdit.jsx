import { Link } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";

export default function LinkToEdit({ User, id }) {
  const user = useUserContext();
  return (
    <div className="LinkToEdit">
      {user?.id === User && (
        <Link to={`/userprofile/${id}/edit`} className="btn btn-primary">
          <p>Edit</p>
        </Link>
      )}
    </div>
  );
}
