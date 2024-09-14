// data.js
const rootNode = {
  name: 'Colour',
  children: [
    { name: 'Black', children: [] },
    {
      name: 'Blue',
      children: [
        {
          name: 'Aquamarine',
          children: [
            {
              name: 'Sushi',
              children: [
                {
                  name: 'Android',
                  children: [
                    {
                      name: 'Lollipop',
                      children: [
                        {
                          name: '5.0',
                          children: [
                            {
                              name: '5.0.1',
                              children: [
                                {
                                  name: 'Android One',
                                  children: [
                                    { name: 'Mi A1', children: [] },
                                    {
                                      name: 'Mi A2',
                                      children: [
                                        {
                                          name: 'Gold',
                                          children: [
                                            { name: '32GB@4GB', children: [] },
                                            { name: '64GB@4GB', children: [] },
                                          ],
                                        },
                                        { name: 'Lake Blue', children: [] },
                                        { name: 'Black', children: [] },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  name: 'Mi UI',
                                  children: [
                                    { name: 'Mi 5X', children: [] },
                                    { name: 'Mi 6X', children: [] },
                                  ],
                                },
                              ],
                            },
                            { name: '5.0.2', children: [] },
                          ],
                        },
                        { name: '5.1', children: [{ name: '5.1.1', children: [] }] },
                      ],
                    },
                    { name: 'Marshmallow', children: [] },
                  ],
                },
                { name: 'iOS', children: [] },
              ],
            },
          ],
        },
        { name: 'Cyan', children: [] },
        { name: 'Navy', children: [] },
        { name: 'Turquoise', children: [] },
      ],
    },
    { name: 'Green', children: [] },
    {
      name: 'Purple',
      children: [
        { name: 'Indigo', children: [] },
        { name: 'Violet', children: [] },
      ],
    },
    {
      name: 'Red',
      children: [
        { name: 'Crimson', children: [] },
        { name: 'Maroon', children: [] },
        { name: 'Scarlet', children: [] },
      ],
    },
    { name: 'White', children: [] },
    { name: 'Yellow', children: [] },
  ],
};

export default rootNode;
