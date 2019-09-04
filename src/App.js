import React from "react";
import GridLayout from "react-grid-layout";

import Table from "./components/table";
import Form from "./components/form";
import Settings from "./components/layout/settings";

import Header from "./components/header";
import Footer from "./components/footer";

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

import "./App.css";

let width = window.innerWidth;

class App extends React.Component {
  state = {
    widgets: [
      {
        id: "1",
        layout: {
          x: 0,
          y: 0,
          w: 9,
          h: 7,
          minW: 4,
          maxW: 12
        }
      },
      {
        id: "2",
        layout: {
          x: 9,
          y: 0,
          w: 3,
          h: 7,
          minW: 3,
          maxW: 12
        }
      },
      {
        id: "3",
        layout: {
          x: 0,
          y: 7,
          w: 9,
          h: 8,
          minW: 3,
          maxW: 12
        },
        draggableHandle: ".dragMe"
      }
    ],
    oldWidgets: [],
    edit: true
  };

  handleEditStart = () => {
    this.setState(state => ({
      edit: true,
      oldWidgets: state.widgets
    }));
  };

  handleEditDone = () => {
    this.setState(state => ({
      edit: false
    }));
  };

  handleEditCancel = () => {
    this.setState(state => ({
      edit: false,
      widgets: state.oldWidgets
    }));
  };

  handleLayoutChange = layouts => {

    // TODO : Navbarda çalışma alanım yanında kaydedildi butonu çıkıp kaybolacak

    // TODO : Settings alanında genişlikler listelenecek

    this.setState(state => {
      return {
        widgets: layouts.map(layout => {
          return {
            ...state.widgets.find(widget => widget.id === layout.i),
            layout: {
              x: layout.x,
              y: layout.y,
              w: layout.w,
              h: layout.h
            }
          };
        })
      };
    });
  };


  render() {

    const { widgets, edit } = this.state;

    
    const styles = {
      locationInfo : {
        fontSize: 10
      }
    }

    let location = widgets.map(widget => (
      <div key={widget.id} className="alert alert-primary" role="alert" style={styles.locationInfo}>
        <strong>Widget {widget.id} : </strong>X Konumu {widget.layout.x} / Y Konumu {widget.layout.y} / Yüksekliği {widget.layout.h} / Genişliği {widget.layout.w}
      </div>
    ))

    const layouts = {
      md: widgets.map(widget => {
        return {
          i: widget.id,
          ...widget.layout
        };
      })
    };

    return (
      <React.Fragment>
        <Header />
        <GridLayout
          layouts={layouts}
          onLayoutChange={this.handleLayoutChange}
          isDraggable={edit}
          isResizable={edit}
          autoSize={edit}
          width={width}
          cols={12} rowHeight={30}
          draggableCancel="input,textarea,checkbox"
        >
          <div key={this.state.widgets[0].id} data-grid={this.state.widgets[0].layout} style={{overflow: "auto"}} className="scrollbar-thin">
              <Table />
          </div>

          <div key={this.state.widgets[1].id} data-grid={this.state.widgets[1].layout}>
              <Settings>
                {location}
              </Settings>
          </div>

          <div key={this.state.widgets[2].id} data-grid={this.state.widgets[2].layout} style={{overflow: "auto"}} className="scrollbar-thin" draggableHandle=".dragMe">
              <Form />
          </div>

        </GridLayout>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
