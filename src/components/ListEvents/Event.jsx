import { Link } from "react-router-dom";
import "./Events.css";

export default function Event({
  name,
  description,
  address,
  date,
  id,
  image,
  user,
}) {
  console.log("llego");
  console.log({ image });
  return (
    <>
      <div className="blog-card">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: `url(${image})` }} />
          <ul className="details">
            <li className="author">
              <a href="/">{name}</a>
            </li>
            <li className="date">{date}</li>
            <li className="tags">
              <ul>
                <li>
                  <a href="/">{id}</a>
                </li>
                <li>
                  <a href="/">Code</a>
                </li>
                <li>
                  <a href="/">HTML</a>
                </li>
                <li>
                  <a href="/">CSS</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>
            <a href="/">{name}</a>
          </h1>
          <h2>{address}</h2>
          <p>{description}</p>
          <p className="read-more">
            <a href="/">{user}</a>
          </p>
        </div>
      </div>
    </>
  );
}
