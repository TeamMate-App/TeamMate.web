import moment from "moment";

const GameSidebarLeft = ({ Game, user, remove, date }) => {
  console.log("Game Sidebar Left", Game);

  console.log(date.toString());

  console.log(moment(date).format("LL"));

  const day = moment(date).format("dddd")
  const day1 = moment(date).format("LL")
  const hour = moment(date).format("LT")


  console.log(Game)

  return (
    <div>
      <h2>Informacion</h2>
      <hr></hr>
      <div className="container">
        <div className="row">
          <table className="rwd-table text-left">
            <tbody>
              <tr>
                <td>
                  <i className="fas fa-calendar-alt"> </i>
                </td>
                <td className="address">{day}, {day1}</td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-clock"></i>
                </td>
                <td className="address">{hour}, 60 min</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-map-marker-alt"></i>
                </td>
                <td className="address">{Game.address}</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-users"></i>
                </td>
                <td className="address">1/4</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-euro-sign"></i>
                </td>
                <td className="address">5.00 €</td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-list-alt"></i>
                </td>
                <td className="address">Normas del evento</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr></hr>
        <h4>Organizador</h4>
        <p className="p-0"> User creator</p>
        <p className="p-0">{Game.user}</p>
        <hr></hr>

        <h4>Maps</h4>
      </div>
    </div>
  );
};

export default GameSidebarLeft;
