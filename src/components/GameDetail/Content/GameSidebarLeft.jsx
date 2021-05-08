import moment from "moment";

const GameSidebarLeft = ({ Game, user, remove, date }) => {

  
  const day = moment(Game.date).format("dddd")
  const day1 = moment(Game.date).format("LL")
  const hour = moment(Game.date).format("LT")
  
  console.log(day)
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
                <td className="address">4 max.</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-euro-sign"></i>
                </td>
                <td className="address">{Game?.price || "0,00"} €</td>
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
       

        <h4>Localization</h4>
      </div>
    </div>
  );
};

export default GameSidebarLeft;
