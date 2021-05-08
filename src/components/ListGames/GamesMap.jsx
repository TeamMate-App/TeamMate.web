import "./Events.css";
import SingleGame from "./SingleGame";
import "./../Navbar/Navbar.css"

const GamesMap = ({ games }) => {
  return (
    <>
      <h1>HOLA</h1>
      {games.length > 0 ? (
        games.map((eve) => <SingleGame {...eve} key={eve.id} />)
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default GamesMap;
