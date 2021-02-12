import React, { useState, useEffect } from "react";

import GridLayout from "react-grid-layout";

import { Pie } from "react-roughviz";

import Table from "./components/table";

import Header from "./components/header";
import Footer from "./components/footer";

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

import "./App.css";

export default function App({ props }) {
  const [width, setWidth] = useState(0);
  const [widgets, setWidgets] = useState([
    {
      id: "1",
      layout: {
        x: 0,
        y: 0,
        w: 4,
        h: 7,
        minW: 4,
        maxW: 12,
      },
    },
    {
      id: "2",
      layout: {
        x: 9,
        y: 0,
        w: 3,
        h: 11,
        minW: 3,
        maxW: 12,
      },
    },
  ]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const layouts = {
    md: widgets.map((widget) => {
      return {
        i: widget.id,
        ...widget.layout,
      };
    }),
  };

  const handleLayoutChange = (layouts) => {
    setWidgets(
      layouts.map((layout) => {
        return {
          ...widgets.find((widget) => widget.id === layout.i),
          layout: {
            x: layout.x,
            y: layout.y,
            w: layout.w,
            h: layout.h,
          },
        };
      })
    );
  };

  return (
    <>
      <Header count={2} />
      <GridLayout
        layouts={layouts}
        onLayoutChange={handleLayoutChange}
        isDraggable={edit}
        isResizable={edit}
        autoSize={edit}
        width={width}
        cols={12}
        rowHeight={30}
        draggableCancel="input,textarea,checkbox"
      >
        <div
          key={widgets[0]?.id}
          data-grid={widgets[0]?.layout}
          style={{ overflow: "auto" }}
          className="scrollbar-thin"
        >
          <Table />
        </div>

        <div
          key={widgets[1]?.id}
          data-grid={widgets[1]?.layout}
          style={{ overflow: "hidden" }}
          className="scrollbar-thin"
        >
          <Pie
            data={{
              labels: ["North", "South", "East", "West"],
              values: [10, 5, 8, 3],
            }}
            colors={["red", "orange", "blue", "skyblue"]}
            roughness={3}
            strokeWidth={3}
          />
        </div>
      </GridLayout>
      <Footer />
    </>
  );
}
