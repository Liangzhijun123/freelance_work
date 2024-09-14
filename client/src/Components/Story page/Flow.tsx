import React, { useCallback } from "react";
import CustomGradientEdge from "./CustomGradientEdge.tsx";
import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  Handle,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";

// Define your initial nodes
const initialNodes = [
  // 2
  {
    id: "1",
    type: "input",
    data: {
      label: (
        <div>
          2
          <Handle
            type="source"
            position="right"
            id="right"
            style={{ top: "50%", background: "#555" }}
          />
          <Handle
            type="source"
            position="bottom"
            id="bottom"
            style={{ background: "#555" }}
          />
          <Handle
            type="source"
            position="top"
            id="top"
            style={{ background: "#555" }}
          />
        </div>
      ),
    },
    position: { x: 250, y: 25 },
    style: {
      background: "linear-gradient(to bottom, #2B0752, #7A16E6)",
      color: "white",
      borderRadius: "10px",
    },
  },
  // 1
  {
    id: "2",
    data: {
      label: (
        <div>
          1
          <Handle
            type="source"
            position="right"
            id="right"
            style={{ top: "50%", background: "#555" }}
          />
          <Handle
            type="source"
            position="bottom"
            id="bottom"
            style={{ background: "#555" }}
          />
        </div>
      ),
    },
    position: { x: 100, y: 125 },
    style: {
      background: "linear-gradient(to bottom, #2B0752, #7A16E6)",
      color: "white",
      borderRadius: "10px",
    },
  },
  // 3
  {
    id: "3",
    type: "output",
    data: {
      label: (
        <div>
          3
          <Handle
            type="source"
            position="right"
            id="right"
            style={{ top: "50%", background: "#555" }}
          />
        </div>
      ),
    },
    position: { x: 250, y: 250 },
    style: {
      background: "linear-gradient(to bottom, #2B0752, #7A16E6)",
      color: "white",
      borderRadius: "10px",
    },
  },
  // 4
  {
    id: "4",
    type: "output",
    data: {
      label: (
        <div>
          4
          <Handle
            type="source"
            position="right"
            id="right"
            style={{ top: "50%", background: "#555" }}
          />
        </div>
      ),
    },
    position: { x: 350, y: 150 },
    style: {
      background: "linear-gradient(to bottom, #2B0752, #7A16E6)",
      color: "white",
      borderRadius: "10px",
    },
  },
  // 5
  {
    id: "5",
    type: "output",
    data: {
      label: <div>5</div>,
    },
    position: { x: 350, y: -40 }, // Move Node 5 to the right of Node 4
    style: {
      background: "linear-gradient(to bottom, #2B0752, #7A16E6)",
      color: "white",
      borderRadius: "10px",
    },
  },
  // 6
  {
    id: "6",
    type: "output",
    data: {
      label: (
        <div>
          6
          <Handle
            type="source"
            position="right"
            id="right"
            style={{ top: "50%", background: "#555" }}
          />
          <Handle
            type="source"
            position="top"
            id="top"
            style={{ background: "#555" }}
          />
        </div>
      ),
    },
    position: { x: 450, y: 90 }, // Move Node 5 to the right of Node 4
    style: {
      background: "linear-gradient(to bottom, #2B0752, #7A16E6)",
      color: "white",
      borderRadius: "10px",
    },
  },
  // 7
  {
    id: "7",
    type: "output",
    data: {
      label: (
        <div>
          7
          <Handle
            type="source"
            position="right"
            id="right"
            style={{ top: "50%", background: "#555" }}
          />
        </div>
      ),
    },
    position: { x: 450, y: 290 }, // Move Node 5 to the right of Node 4
    style: {
      background: "linear-gradient(to bottom, #2B0752, #7A16E6)",
      color: "white",
      borderRadius: "10px",
    },
  },
  // 8
  {
    id: "8",
    type: "output",
    data: {
      label: <div>8</div>,
    },
    position: { x: 650, y: 290 },
    style: {
      background: "linear-gradient(to bottom, #2B0752, #7A16E6)",
      color: "white",
      borderRadius: "10px",
    },
  },
  // 9
  {
    id: "9",
    type: "output",
    data: {
      label: <div>9</div>,
    },
    position: { x: 650, y: 200 },
    style: {
      background: "linear-gradient(to bottom, #2B0752, #7A16E6)",
      color: "white",
      borderRadius: "10px",
    },
  },
  // 10
  {
    id: "10",
    type: "output",
    data: {
      label: <div>10</div>,
    },
    position: { x: 650, y: 90 },
    style: {
      background: "linear-gradient(to bottom, #2B0752, #7A16E6)",
      color: "white",
      borderRadius: "10px",
    },
  },
  // 11
  {
    id: "11",
    type: "output",
    data: {
      label: <div>11</div>,
    },
    position: { x: 650, y: 10 },
    style: {
      background: "linear-gradient(to bottom, #2B0752, #7A16E6)",
      color: "white",
      borderRadius: "10px",
    },
  },
];

// Define your initial edges
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    sourceHandle: "bottom",
    type: "custom",
  },
  {
    id: "e2-3",
    source: "2",
    sourceHandle: "bottom",
    target: "3",
    type: "custom",
  },
  {
    id: "e2-4",
    source: "2",
    sourceHandle: "right",
    target: "4",
    type: "custom",
  },
  { id: "e4-5", source: "1", sourceHandle: "top", target: "5", type: "custom" },
  {
    id: "e2-6",
    source: "1",
    sourceHandle: "right",
    target: "6",
    type: "custom",
  },
  {
    id: "e3-7",
    source: "3",
    sourceHandle: "right",
    target: "7",
    type: "custom",
  },
  {
    id: "e7-8",
    source: "7",
    sourceHandle: "right",
    target: "8",
    type: "custom",
  },
  {
    id: "e4-9",
    source: "4",
    sourceHandle: "right",
    target: "9",
    type: "custom",
  },
  {
    id: "e6-10",
    source: "6",
    sourceHandle: "right",
    target: "10",
    type: "custom",
  },
  {
    id: "e6-11",
    source: "6",
    sourceHandle: "top",
    target: "11",
    type: "custom",
  },
];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="xl:w-[881px] xl:h-[565px] md:w-[400px] md:h-[600px] sm:w-[400px] sm:h-[600px] w-[300px] h-[600px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        edgeTypes={{ custom: CustomGradientEdge }}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
