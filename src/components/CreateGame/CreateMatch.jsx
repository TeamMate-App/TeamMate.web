import axios from "axios";
import React, { Component } from "react";

class CreateMatch extends Component {
  state = {
    Data: {
      name: "",
      address: "",
      description: "",
    },
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/api/games/create", {
        name: this.state.name,
        address: this.state.address,
        description: this.state.description,
      })
      .then((response) => {
        this.props.history.push("/listGames");

      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
 
        <article className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                className="form-control"
                id="name"
                onChange={this.handleChange}
                name="name"
              />
            </div>

      

            <div className="form-group">
              <label htmlFor="description">Description</label>

              <textarea
                name="description"
                className="form-control"
                id="description"
                onChange={this.handleChange}
                x
                rows={7}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="first_brewed">Adress</label>
              <input
                required
                type="text"
                className="form-control"
                id="first_brewed"
                onChange={this.handleChange}
                name="first_brewed"
              />
            </div>

 
            <div className="text-center">
              <button type="submit" className="btn btn-primary ">
                Create
              </button>
            </div>
          </form>
        </article>
      </div>
    );
  }
}

export default CreateMatch;
