import { Link } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";
import "./LinkToEdit.css"

export default function LinkToEdit({ User, id }) {
  const user = useUserContext();
  return (
    
    <div className="LinkToEdit">
      {user?.id === User && (
        <Link to={`/userprofile/${id}/edit`} className="btn btn-primary">
          <p className="editButton">Edit</p>
        </Link>
      )}
    </div>
    
  );
}
