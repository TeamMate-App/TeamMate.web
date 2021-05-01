import "./Events.css";
import SingleGame from "./SingleGame";
import "./../Navbar/Navbar.css"

const GamesMap = ({ events }) => {
  return (
    <>
      <h1>HOLA</h1>
      {events.length > 0 ? (
        events.map((eve) => <SingleGame {...eve} key={eve.id} />)
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default GamesMap;
