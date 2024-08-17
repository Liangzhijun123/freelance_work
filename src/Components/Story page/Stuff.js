import React, { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import { Tree } from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';
import rootNode from './data'; // Import the data from data.js
import './styles.css'; // Import your custom styles

const DEFAULT_DEPTH = 9;

const cloneWithDepth = (object, depth = DEFAULT_DEPTH) => {
  if (depth === -1) return undefined;
  if (typeof object !== 'object') return object;

  if (Array.isArray(object.children)) {
    return {
      name: object.name,
      children: object.children
        .map(val => cloneWithDepth(val, depth - 1))
        .filter(val => val !== undefined)
    };
  }

  return {
    name: object.name,
    children: []
  };
};

const findNode = (key, node = rootNode, parentPath = []) => {
  const path = [...parentPath, node.name];

  if (node.name === key) {
    return { node: cloneWithDepth(node), path };
  }

  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      const found = findNode(key, child, path);
      if (found) return found;
    }
  }

  return undefined;
};

const useWindowInnerSize = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return { innerWidth, innerHeight };
};

const Data = () => {
  const [data, setData] = useState(rootNode);
  const [path, setPath] = useState([rootNode.name]);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);
  const { innerWidth, innerHeight } = useWindowInnerSize();
  const canvasWrapper = useRef(null);

  const setCanvasSize = useCallback(() => {
    if (canvasWrapper.current) {
      const { clientWidth, clientHeight } = canvasWrapper.current;
      setCanvasWidth(clientWidth);
      setCanvasHeight(clientHeight);
    }
  }, []);

  useEffect(() => {
    setCanvasSize();
  }, [setCanvasSize]);

  useLayoutEffect(() => {
    setCanvasWidth(0);
    setCanvasHeight(0);
  }, [innerWidth, innerHeight]);

  useEffect(() => {
    let isMounted = true;

    requestAnimationFrame(() => {
      if (isMounted) setCanvasSize();
    });

    return () => {
      isMounted = false;
    };
  }, [innerWidth, innerHeight, setCanvasSize]);

  const changeNode = (foundNode) => {
    if (foundNode) {
      setPath(foundNode.path);
      setData(foundNode.node);
    }
  };

  const handleClick = (_, key) => {
    const foundNode = findNode(key);
    changeNode(foundNode);
  };

  return (
    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
     
     <svg width="0" height="0">
        <defs>
          <linearGradient id="node-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7A16E6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#7A16E6', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#B045F2', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#5944F2', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      <div>
        <div>
          {path.map(p => (
            <button
              style={{
                margin: '0',
                border: 'none',
                outline: 'none',
                background: 'none',
                padding: '0 0.1rem',
                textDecoration: 'underline',
                cursor: data.name === p ? '' : 'pointer',
                color: data.name === p ? 'black' : 'blue',
              }}
              key={p}
              onClick={() => changeNode(findNode(p))}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div style={{ height: '500px' }} ref={canvasWrapper}>
        {data && (
          <Tree
            data={data}
            width={canvasWidth}
            height={canvasHeight}
            margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
          />
        )}
      </div>
    </div>
  );
};

export default Data;
