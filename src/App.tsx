import { useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import Preview from "./Preview";
import useStore from "./store";
import { useShallow } from "zustand/react/shallow";

//@ts-expect-error any
const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export default function App() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    useShallow(selector),
  );

  const [animated, setAnimated] = useState(false);
  const [label, setLabel] = useState(
    (Number(nodes[nodes.length - 1].id) + 1).toString(),
  );

  const options = {
    animated,
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            width: "100%",
            height: "fit",
            display: "flex",
            alignItems: "cente",
            justifyContent: "center",
            borderBottom: "solid",
          }}
        >
          Edit
        </div>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          defaultEdgeOptions={options}
          defaultMarkerColor="red"
          fitView
        />
        <div
          style={{
            position: "fixed",
            top: 5,
            right: 5,
            aspectRatio: "square",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "50",
            gap: "10px",
            background: "black",
            padding: "16px",
            borderRadius: "10px",
          }}
        >
          <input value={label} onChange={(e) => setLabel(e.target.value)} />
          <span style={{ color: "white" }}>animated?</span>
          <input
            type="checkbox"
            checked={animated}
            onClick={() => setAnimated(!animated)}
          />
          <button
            style={{
              background: "white",
              width: 10,
              aspectRatio: "square",
              color: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {
              useStore.setState((state) => ({
                nodes: [
                  ...state.nodes,
                  {
                    id: (
                      Number(state.nodes[state.nodes.length - 1].id) + 1
                    ).toString(),
                    data: { label },
                    position: { x: 600, y: 600 },
                    type: "default",
                  },
                ],
              }));
            }}
          >
            +
          </button>
        </div>
      </div>
      <Preview />
    </div>
  );
}
