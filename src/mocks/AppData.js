const AppData = {
  name: 'Employee productivity platform',
  user: {
    id: 'alexP',
    firstName: 'Alex',
    lastName: 'Price',
    role: 'View',
    groups: [
      {
        id: 'approvers',
        name: 'Approver'
      }
    ]
  },
  pages: [
    {
      id: 'page-1',
      displayName: 'Homepage',
      pathName: 'home',
      components: [
        {
          type: 'ContentCard',
          id: 'card-1',
          config: {
            title: 'Hello world',
            subtitle: 'This is the subtitle',
            body: 'This is some lorem ipsum for the rendering of this particular component, no idea if it will work!'
          }
        },
        {
          type: 'ContentCard',
          id: 'card-2',
          config: {
            title: 'Hello world',
            subtitle: 'This is the subtitle of the second component',
            body: 'This is some lorem ipsum for the rendering of this particular component, no idea if it will work!'
          }
        },
        {
          type: 'ImageCard',
          id: 'card-3',
          config: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/220px-PricewaterhouseCoopers_Logo.svg.png',
            title: 'Hello world again',
            subtitle: 'This is the subtitle of the third card component',
            body: 'This is some lorem ipsum for the rendering of this particular component, no idea if it will work!'
          }
        }
      ]
    },
    {
      id: 'page-2',
      displayName: 'Training portal',
      pathName: 'training',
      components: [
        {
          type: 'ContentCard',
          id: 'card-4',
          config: {
            title: 'Hello world',
            subtitle: 'This is the subtitle',
            body: 'This is some lorem ipsum for the rendering of this particular component, no idea if it will work!'
          }
        },
        {
          type: 'ContentCard',
          id: 'card-5',
          config: {
            title: 'Hello world',
            subtitle: 'This is the subtitle of the second component',
            body: 'This is some lorem ipsum for the rendering of this particular component, no idea if it will work!'
          }
        },
        {
          type: 'ImageCard',
          id: 'card-6',
          config: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/220px-PricewaterhouseCoopers_Logo.svg.png',
            title: 'Hello world again',
            subtitle: 'This is the subtitle of the third card component',
            body: 'This is some lorem ipsum for the rendering of this particular component, no idea if it will work!'
          }
        }
      ]
    },
    {
      id: 'page-3',
      displayName: 'Operations',
      pathName: 'ops',
      components: [
        {
          type: 'ContentCard',
          id: 'card-7',
          config: {
            title: 'Hello world',
            subtitle: 'This is the subtitle',
            body: 'This is some lorem ipsum for the rendering of this particular component, no idea if it will work!'
          }
        },
        {
          type: 'ContentCard',
          id: 'card-8',
          config: {
            title: 'Hello world',
            subtitle: 'This is the subtitle of the second component',
            body: 'This is some lorem ipsum for the rendering of this particular component, no idea if it will work!'
          }
        },
        {
          type: 'ImageCard',
          id: 'card-9',
          config: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/220px-PricewaterhouseCoopers_Logo.svg.png',
            title: 'Hello world again',
            subtitle: 'This is the subtitle of the third card component',
            body: 'This is some lorem ipsum for the rendering of this particular component, no idea if it will work!'
          }
        }
      ]
    }
  ]
};

export default AppData;
