import { Link } from "react-router-dom";
import "./Events.css";

export default function SingleGame({
  name,
  description,
  address,
  date,
  id,
  image,
  user,
  games,
}) {
  
  return (
    <>
      <div className="blog-card">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: `url(${image})` }} />
         {/*  <ul className="details">
            <li className="date">{date}</li>
            <li className="tags"></li>
          </ul> */}
        </div>
        <div className="description text-black">
          <Link to={`/games/${id}`}>
            <h1>{address}</h1>
          </Link>
          <h2>{/* 📍 */}{description}</h2>
          <h2>🕒  {date}</h2>

          <p>{name || "noname"}</p>
         {/*  <p className="read-more">
            <a href="/">{user}</a>
          </p> */}
        </div>
      </div>
    </>
  );
}
