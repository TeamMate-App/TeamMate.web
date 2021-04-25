import { Link } from "react-router-dom";
import { useUser } from "../../Hooks/useUser";

export default function LinkToEdit({ User, id }) {
  const user  = useUser();
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