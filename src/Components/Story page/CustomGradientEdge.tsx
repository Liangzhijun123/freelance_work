import React, { FC } from 'react';
import { getSmoothStepPath, EdgeProps } from '@xyflow/react';

const CustomGradientEdge: FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <defs>
        <linearGradient id={`gradient-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B045F2" />
          <stop offset="100%" stopColor="#5944F2" />
        </linearGradient>
      </defs>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        stroke={`url(#gradient-${id})`}
        strokeWidth={2} // Ensure the stroke width is set to make the edge visible
        markerEnd={markerEnd} 
      />
    </>
  );
};

export default CustomGradientEdge;
