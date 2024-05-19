import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
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

export default function Preview() {
  const { nodes, edges } = useStore(useShallow(selector));

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyItems: "space-between",
      }}
    >
      <div style={{ width: "50vw", height: "100%", borderLeft: "solid" }}>
        <div
          style={{
            width: "100%",
            borderBottom: "solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Preview
        </div>
        <ReactFlow nodes={nodes} edges={edges} fitView />
      </div>
    </div>
  );
}
