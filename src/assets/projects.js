const projects = [
  {
    name: 'Movie Looker',
    overview: 'This project was made to start learning React hooks. This is a work in progress, you can check what\'s next on my repo!',
    techStack: ['React', 'Netlify', 'Movie API', 'Google Fonts'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/SarahHarrington/movie-lookup',
        displayText: 'Github'
      },
      {
        name: 'demoLink',
        url: 'https://movie-looker.netlify.app/',
        displayText: 'Live Demo'
      }
    ],
    images: [
      {
        img: 'images/movie-looker.png',
        altText: 'Movie Looker App'
      }
    ]
  },
  {
    name: 'Blog',
    overview: 'This blog was a side project started to better learn Ember and Ruby on Rails. It is a work in progress.',
    techStack: ['Ruby on Rails', 'Ember.js', 'Hipster Ipsum', 'Heroku'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/SarahHarrington/ember-blog',
        displayText: 'Ember Repo'
      },
      {
        name: 'github',
        url: 'https://github.com/SarahHarrington/rails-blog',
        displayText: 'Rails Repo'
      },
      {
        name: 'demoLink',
        url: 'https://mysterious-refuge-67427.herokuapp.com/articles',
        displayText: 'Live Demo'
      }
    ],
    images: [
      {
        img: 'images/blog.png',
        altText: 'Blog'
      }
    ]
  }, 
  {
    name: 'Canvas Playground',
    overview: 'This HTML canvas whiteboard was created using a websocket so users can draw and interact with each other.' +
    'The drawings are stored on the server until the board is erased and users will see the existing drawings when they join.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Socket.io'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/SarahHarrington/canvas-app',
        displayText: 'Github Repo'
      },
      {
        name: 'demoLink',
        url: 'https://canvasplayground.sarahdoes.tech',
        displayText: 'Live Demo'
      }
    ],
    images: [
      {
        img: 'images/canvasplayground.png',
        altText: 'Canvas Playground'
      }
    ]
  },
  {
    name: 'Memory Game',
    overview: 'This memory game was created using Font Awesome transportation icons.',
    techStack: ['HTML', 'JavaScript', 'CSS', 'Font Awesome'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/SarahHarrington/memory-game',
        displayText: 'Github Repo'
      },
      {
        name: 'demoLink',
        url: 'https://memorygame.sarahdoes.tech',
        displayText: 'Live Demo'
      }
    ],
    images: [
      {
        img: 'images/memorygame.png',
        altText: 'Memory Game'
      }
    ]
  },
  {
    name: 'Andrew Residence',
    overview: 'This group project from Prime Digital Academy, where our client asked us to create a scheduling tool for on-call staff that would automate' +
    ' communication and provide an online resource for scheduling. We streamlined a completely manual process into a successful online tool the client is now using in production.',
    techStack: ['HTML', 'CSS', 'AngularJS', 'Angular Material', 'Node.js', 'Express', 'PostgreSQL', 'Node Mailer', 'SendGrid', 'Plivo', 'Heroku'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/SarahHarrington/andrewresidence',
        displayText: 'Github Repo'
      },
      {
        name: 'demoLink',
        url: 'https://andrewresidence.sarahdoes.tech',
        displayText: 'Live Demo'
      }
    ],
    images: [
      {
        img: 'images/andrew-residence.png',
        altText: 'Andrew Residence App'
      }
    ]
  },
  {
    name: 'Pantry Stocker',
    overview: 'This application allows users to create pantry locations and preferred store lists, add items to their pantries, ' +
    'mark when items are used, and automatically generate shopping lists.',
    techStack: ['HTML', 'CSS', 'AngularJS', 'Angular Material', 'Express', 'Node.js', 'PostgreSQL'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/SarahHarrington/pantry-stocker',
        displayText: 'Github Repo'
      },
      {
        name: 'demoLink',
        url: 'https://pantry-stocker.herokuapp.com/',
        displayText: 'Demo Link'
      }
    ],
    images: [
      {
        img: 'images/pantrystocker-item.png',
        altText: ''
      },
      {
        img: 'images/pantrystocker-shop.png',
        altText: ''
      },
      {
        img: 'images/pantrystocker-user.png',
        altText: ''
      }
    ]
  },
  {
    name: 'Food Flow | 2018 Hack the Gap',
    overview: 'This app was created with a group I met at the 2018 Hack the Gap event. The idea we brought to life was creating an application ' +
    'that would combine menstrual health with nutrition and fitness tracking.',
    techStack: ['Ionic'],
    links: [
      {
        name: 'liveDemo',
        url: 'https://tech.mn/news/2018/01/09/video-hack-the-gap-2018-final-demos/',
        displayText: 'Event Demo Recording'
      }
    ]
  }
]