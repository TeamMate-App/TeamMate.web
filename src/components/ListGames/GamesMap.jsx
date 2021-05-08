import "./Events.css";
import SingleGame from "./SingleGame";
import "./../Navbar/Navbar.css";

const GamesMap = ({ games }) => {
  return (
    <>
      {games.length > 0 ? (
        games.map((eve) => <SingleGame {...eve} key={eve.id} />)
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default GamesMap;
