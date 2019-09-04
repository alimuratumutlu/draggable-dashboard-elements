import React, { Component } from "react";
import firebaseConf from "./Firebase";

export default class index extends Component {
  state = {
    table: [
      {
        id: 1,
        ad: "Mark",
        lastName: "Otto",
        twitter: "@mdo"
      },
      {
        id: 2,
        ad: "Jacob",
        lastName: "Thornton",
        twitter: "@mdo"
      }
    ],
    form: {},
    alert: false,
    alertData: {}
  };

  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000);
  }

  resetForm() {
    this.refs.userForm.reset();
  }

  componentWillMount() {
    let formRef = firebaseConf
      .database()
      .ref("epias2")
      .orderByKey()
      .limitToLast(6);
    formRef.on("child_added", snapshot => {
      const { ad, lastName, twitter } = snapshot.val();
      const form = { ad, lastName, twitter };
      this.setState({ form });
      console.log(this.state.form)
    });
  }

  saveUser(e) {
    e.preventDefault();
    const params = {
      ad: this.inputName.value,
      lastName : this.inputSurName.value,
      twitter: this.inputTwitter.value
    };
    if (params.ad && params.lastName && params.twitter) {
      firebaseConf
        .database()
        .ref("epias2")
        .push(params)
        .then(() => {
          
          this.setState(state => {
            const table = [...state.table, state.form];
            return {
              table,
              form: {},
            };
          });

          this.showAlert("success", "Kayıt başarılı");
        })
        .catch(() => {
          this.showAlert("danger", "Kaydedemedim.");
        });
      this.resetForm();
    } else {
      this.showAlert("warning", "Boş geçmeyelim :(");
    }
  }

  handleClick = () => {};

  render() {
    const data =  this.state.table.map(item => (
      <tr>
        <td>{item.ad}</td>
        <td>{item.lastName}</td>
        <td>{item.twitter}</td>
      </tr>
    ));

    return (
      <React.Fragment>
        <table className="table table-striped dragMe">
          <thead>
            <tr>
              <th scope="col">Adı</th>
              <th scope="col">Soyadı</th>
              <th scope="col">Twitter</th>
            </tr>
          </thead>
          <tbody>
            {data}
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
          <form onSubmit={this.saveUser.bind(this)} ref="userForm">
          <div className="row">

            <div className="col-3">
              <input
                type="text"
                className="form-control"
                id="ad"
                placeholder="Ad"
                ref={ad => (this.inputName = ad)}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Soyad"
                ref={lastName => (this.inputSurName = lastName)}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                id="twitter"
                placeholder="Twitter"
                ref={twitter => (this.inputTwitter = twitter)}
              />
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-primary">
                Kaydet
              </button>
            </div>
            
            </div>

          </form>
        {this.state.alert && (
          <div
            className={`alert alert-${this.state.alertData.type}`}
            role="alert"
          >
            <div className="container">{this.state.alertData.message}</div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
