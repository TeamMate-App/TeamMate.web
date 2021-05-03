import React from "react";
import JoinEvent from "../../JoinEvent/JoinEvent";
import LinktoEditGame from "../LinkToEditGame";

const GameSidebarLeft = ({ Game, user, remove }) => {
  console.log("Link to edit game user", Game);

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
                <td className="address">Domingo, 12 de Mayo</td>
              </tr>
              <tr>
                <td>
                  <i className="far fa-clock"></i>
                </td>
                <td className="address">16:00, 60 min</td>
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
        <p>User creator</p>
        <p>{Game.user}</p>
        <hr></hr>

        <h4>Maps</h4>
      </div>
    </div>
  );
};

export default GameSidebarLeft;
