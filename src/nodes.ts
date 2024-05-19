import { Node } from "reactflow";

export default [
  {
    id: "1",
    position: { x: 400, y: 400 },
    data: { label: "1" },
    type: "input",
  },

  {
    id: "A",
    type: "group",
    data: { label: null },
    position: { x: 0, y: 0 },
    style: {
      width: 250,
      height: 250,
    },
  },
  {
    id: "2",
    type: "default",
    position: { x: 12, y: 50 },
    data: { label: "2" },
    parentId: "A",
    extent: "parent",
    style: {
      width: 50,
      height: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  {
    id: "3",
    type: "input",
    position: { x: 100, y: 50 },
    data: { label: "3" },
    parentId: "A",
    extent: "parent",
    style: {
      width: 50,
      height: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  {
    id: "4",
    type: "default",
    position: { x: 180, y: 50 },
    data: { label: "4" },
    parentId: "A",
    extent: "parent",
    style: {
      width: 50,
      height: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
] as Node[];
