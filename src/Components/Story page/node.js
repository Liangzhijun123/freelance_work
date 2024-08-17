const defaultNodes = [
    {
      id: '1',
      type: 'input', // input node
      data: { label: 'Start' },
      position: { x: 250, y: 0 },
    },
    {
      id: '2',
      data: { label: 'Process 1' },
      position: { x: 250, y: 150 },
    },
    {
      id: '3',
      data: { label: 'Process 2' },
      position: { x: 250, y: 300 },
    },
    {
      id: '4',
      type: 'output', // output node
      data: { label: 'End' },
      position: { x: 250, y: 450 },
    },
  ];
  
  export default defaultNodes;
  