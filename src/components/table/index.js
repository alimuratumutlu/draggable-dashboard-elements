import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUpload, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

export default class index extends Component {
  // TODO : REACT JS GRID LAYOUT'UN INPUT VE CHECKBOX İŞLEMLERİNE ENGEL OLDUĞUNU SONRADAN KEŞFETTİĞİM İÇİN İŞLEM YARIM KALDI...

  state = {
    idColumn: "checked",
    kontratColumn: "checked",
    teklifColumn: "checked",
    dataColumn: "checked"
  };

  handleClick = element => {
    if (element == "id") {
      this.state.idColumn = "checked"
        ? this.setState({ idColumn: "unchecked" })
        : this.setState({ idColumn: "checked" });
      console.log("id Tıklandı ", this.state.idColumn);
    } else if (element == "kontrat") {
      this.state.kontratColumn = "checked"
        ? this.setState({ kontratColumn: "unchecked" })
        : this.setState({ kontratColumn: "checked" });
      console.log("kontrat Tıklandı");
    } else if (element == "teklif") {
      this.state.teklifColumn = "checked"
        ? this.setState({ teklifColumn: "unchecked" })
        : this.setState({ teklifColumn: "checked" });
      console.log("teklif Tıklandı");
    } else if (element == "data") {
      this.state.dataColumn = "checked"
        ? this.setState({ dataColumn: "unchecked" })
        : this.setState({ dataColumn: "checked" });
      console.log("data Tıklandı");
    }
  };

  render() {


    return (
      <div className="tableFixHead">
        <div className="bar">
          <div className="fixed-table-toolbar">
            <div className="bs-bars float-left">
              <div id="toolbar">
                <select className="custom-select custom-select-sm">
                  <option selected>Yıl Seçiniz</option>
                  <option value="1">2019</option>
                  <option value="2">2018</option>
                  <option value="3">2017</option>
                </select>
              </div>
            </div>
            <div className="columns columns-right btn-group float-right">
              <button
                className="btn btn-light"
                type="button"
                name="paginationSwitch"
                aria-label="Pagination Switch"
                title="Hide/Show pagination"
              >
                <FontAwesomeIcon icon={faUpload} />
              </button>
              <button
                className="btn btn-light"
                type="button"
                name="toggle"
                aria-label="Toggle"
                title="Toggle"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>

              <div className="keep-open btn-group" title="Columns">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-label="Columns"
                  title="Columns"
                >
                  <FontAwesomeIcon icon={faCog} />
                </button>

                <div className="dropdown-menu dropdown-menu-right">
                  <label className="dropdown-item">
                    <input
                      type="checkbox"
                      checked="checked"

                    />
                    <span>ID</span>
                  </label>

                  <label className="dropdown-item">
                    <input
                      type="checkbox"
                      checked="checked"

                    />
                    <span>Kontrat</span>
                  </label>

                  <label className="dropdown-item">
                    <input
                      type="checkbox"
                      data-field="price"
                      value="3"
                      checked="checked"

                    />
                    <span>Teklif</span>
                  </label>

                  <label className="dropdown-item">
                    <input
                      type="checkbox"
                      data-field="price"
                      value="3"
                      checked="checked"
                    />
                    <span>Data</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Kontrat</th>
              <th scope="col">Teklif</th>
              <th
                scope="col"
              >
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" name="id">
                1
              </th>
              <td name="kontrat">2019 DFDF</td>
              <td name="teklif">2.356</td>
              <td name="data">Satış</td>
            </tr>
            <tr>
              <th scope="row" name="id">
                1
              </th>
              <td name="kontrat">2019 DFDF</td>
              <td name="teklif">2.356</td>
              <td name="data">Satış</td>
            </tr>
            <tr>
              <th scope="row" name="id">
                1
              </th>
              <td name="kontrat">2019 DFDF</td>
              <td name="teklif">2.356</td>
              <td name="data">Satış</td>
            </tr>
            <tr>
              <th scope="row" name="id">
                1
              </th>
              <td name="kontrat">2019 DFDF</td>
              <td name="teklif">2.356</td>
              <td name="data">Satış</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
