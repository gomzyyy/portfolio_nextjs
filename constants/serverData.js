export const baseUrl_get=`http://localhost:8000/get`
export const baseUrl_post=`http://localhost:8000/post`

export const blogs = [
  {
    id: "1",
    title: "Introduction to React",
    content: "React is a JavaScript library for building UI components efficiently. It simplifies frontend development with JSX, state management, and reusable components.",
    author: "John Doe",
    tags: ["React", "JavaScript", "Frontend"],
    datePublished: "2024-01-15",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EZNefY1fRsA4qVFTBviWyj-5KHY6U8LG0g&s",
  category:"React"
  },
  // {
  //   id: "2",
  //   title: "Understanding JavaScript Closures",
  //   content: "Closures in JavaScript allow functions to access variables from their parent scope, even after the parent function has executed.",
  //   author: "Jane Smith",
  //   tags: ["JavaScript", "Closures", "Web Development"],
  //   datePublished: "2024-01-18",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "3",
  //   title: "A Deep Dive into CSS Grid",
  //   content: "CSS Grid is a powerful layout system that allows developers to create complex web designs with fewer lines of code and greater flexibility.",
  //   author: "Emily White",
  //   tags: ["CSS", "Grid", "Web Design"],
  //   datePublished: "2024-01-20",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "4",
  //   title: "Mastering TypeScript in React",
  //   content: "TypeScript brings type safety to JavaScript, making it easier to develop large-scale React applications with fewer errors.",
  //   author: "Michael Brown",
  //   tags: ["React", "TypeScript", "Frontend"],
  //   datePublished: "2024-01-22",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "5",
  //   title: "Introduction to Node.js",
  //   content: "Node.js is a JavaScript runtime that allows developers to write server-side code using JavaScript, enabling full-stack development with a single language.",
  //   author: "Sarah Johnson",
  //   tags: ["Node.js", "JavaScript", "Backend"],
  //   datePublished: "2024-01-25",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "6",
  //   title: "Building a RESTful API with Express",
  //   content: "Express is a minimal Node.js web framework that simplifies the process of building robust and scalable REST APIs.",
  //   author: "Chris Taylor",
  //   tags: ["Node.js", "Express", "API"],
  //   datePublished: "2024-01-28",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "7",
  //   title: "Exploring React Hooks",
  //   content: "React Hooks are functions that allow you to use state and other React features in functional components, making your code cleaner and more concise.",
  //   author: "Lily Adams",
  //   tags: ["React", "Hooks", "Frontend"],
  //   datePublished: "2024-02-01",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "8",
  //   title: "Understanding JavaScript Promises",
  //   content: "Promises are used to handle asynchronous operations in JavaScript, allowing you to manage tasks that take time, like data fetching, without blocking the execution.",
  //   author: "David Harris",
  //   tags: ["JavaScript", "Promises", "Asynchronous"],
  //   datePublished: "2024-02-04",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "9",
  //   title: "What is Web Accessibility?",
  //   content: "Web accessibility ensures that websites and applications can be used by people with disabilities, improving usability for all users.",
  //   author: "Oliver Clark",
  //   tags: ["Web Accessibility", "Inclusivity", "UX"],
  //   datePublished: "2024-02-07",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "10",
  //   title: "JavaScript Event Loop Explained",
  //   content: "The event loop is a crucial concept in JavaScript's concurrency model, allowing the language to handle multiple tasks asynchronously without blocking the main thread.",
  //   author: "Sophia Lewis",
  //   tags: ["JavaScript", "Event Loop", "Concurrency"],
  //   datePublished: "2024-02-10",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "11",
  //   title: "Building a Real-Time Chat App with Socket.IO",
  //   content: "Socket.IO allows real-time communication between clients and servers, making it perfect for building interactive chat applications.",
  //   author: "Lucas King",
  //   tags: ["Node.js", "Socket.IO", "Real-Time"],
  //   datePublished: "2024-02-12",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "12",
  //   title: "Responsive Design with Flexbox",
  //   content: "Flexbox is a powerful layout tool in CSS that helps create flexible, responsive layouts that adapt to various screen sizes.",
  //   author: "Emma Walker",
  //   tags: ["CSS", "Flexbox", "Responsive Design"],
  //   datePublished: "2024-02-15",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "13",
  //   title: "Getting Started with MongoDB",
  //   content: "MongoDB is a NoSQL database that provides flexibility and scalability for modern web applications, making it ideal for storing large amounts of data.",
  //   author: "Daniel Scott",
  //   tags: ["MongoDB", "Database", "Backend"],
  //   datePublished: "2024-02-18",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "14",
  //   title: "How to Use Webpack for Bundling",
  //   content: "Webpack is a module bundler for JavaScript, CSS, and other assets, making it easier to optimize and bundle files for production.",
  //   author: "Charlotte Moore",
  //   tags: ["Webpack", "Build Tools", "Frontend"],
  //   datePublished: "2024-02-21",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "15",
  //   title: "CSS Animations for Beginners",
  //   content: "CSS animations add life to web pages, allowing you to create smooth transitions, keyframe animations, and hover effects.",
  //   author: "Benjamin Green",
  //   tags: ["CSS", "Animations", "Web Design"],
  //   datePublished: "2024-02-24",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "16",
  //   title: "Exploring REST vs GraphQL",
  //   content: "REST and GraphQL are two different approaches to API design. Learn about the differences, advantages, and when to use each one.",
  //   author: "Oliver White",
  //   tags: ["API", "REST", "GraphQL"],
  //   datePublished: "2024-02-27",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "17",
  //   title: "Setting Up a Development Environment with Docker",
  //   content: "Docker makes it easy to create isolated environments for your applications, ensuring consistency across development, testing, and production.",
  //   author: "Grace Mitchell",
  //   tags: ["Docker", "DevOps", "Containers"],
  //   datePublished: "2024-03-01",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "18",
  //   title: "Understanding Node.js Streams",
  //   content: "Streams in Node.js allow you to read or write data in chunks, making it more memory-efficient when handling large files or data sets.",
  //   author: "William Taylor",
  //   tags: ["Node.js", "Streams", "Backend"],
  //   datePublished: "2024-03-04",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "19",
  //   title: "Getting Started with Firebase",
  //   content: "Firebase is a backend-as-a-service platform that simplifies app development by offering features like authentication, databases, and file storage.",
  //   author: "Isabella Harris",
  //   tags: ["Firebase", "Backend", "Mobile"],
  //   datePublished: "2024-03-07",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "20",
  //   title: "Creating Custom Hooks in React",
  //   content: "Custom hooks allow you to reuse logic across multiple components, making your code more modular and easier to maintain.",
  //   author: "Ethan Young",
  //   tags: ["React", "Custom Hooks", "Frontend"],
  //   datePublished: "2024-03-10",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "21",
  //   title: "The Power of JavaScript Destructuring",
  //   content: "Destructuring in JavaScript allows you to extract values from arrays or objects and assign them to variables with a cleaner syntax.",
  //   author: "Mia Lee",
  //   tags: ["JavaScript", "Destructuring", "ES6"],
  //   datePublished: "2024-03-13",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "22",
  //   title: "An Introduction to Progressive Web Apps (PWAs)",
  //   content: "Progressive Web Apps combine the best of web and mobile apps, providing users with a fast, reliable, and engaging experience.",
  //   author: "Aiden Wilson",
  //   tags: ["PWA", "Web Development", "Mobile Apps"],
  //   datePublished: "2024-03-16",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "23",
  //   title: "Building Single Page Applications with React Router",
  //   content: "React Router helps build single-page applications by enabling dynamic navigation between views without full page reloads.",
  //   author: "Amelia Davis",
  //   tags: ["React", "SPA", "React Router"],
  //   datePublished: "2024-03-19",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "24",
  //   title: "Understanding CSS Variables",
  //   content: "CSS Variables allow you to store and reuse values throughout your CSS, making your stylesheets more maintainable and dynamic.",
  //   author: "James Moore",
  //   tags: ["CSS", "Variables", "Web Design"],
  //   datePublished: "2024-03-22",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "25",
  //   title: "Creating Serverless Applications with AWS Lambda",
  //   content: "AWS Lambda allows you to run backend code without provisioning or managing servers, making it a cost-effective solution for small-scale apps.",
  //   author: "Charlotte Harris",
  //   tags: ["AWS", "Serverless", "Backend"],
  //   datePublished: "2024-03-25",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "26",
  //   title: "Tips for Improving Website Performance",
  //   content: "Website performance is crucial for user experience. Learn some best practices to optimize your website’s loading speed.",
  //   author: "Oliver Lewis",
  //   tags: ["Web Performance", "Optimization", "User Experience"],
  //   datePublished: "2024-03-28",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "27",
  //   title: "Building a Blog with Next.js",
  //   content: "Next.js makes building blogs easier with server-side rendering and static site generation, offering enhanced performance and SEO.",
  //   author: "Ella Thompson",
  //   tags: ["Next.js", "Blog", "Web Development"],
  //   datePublished: "2024-03-31",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "28",
  //   title: "Introduction to Mobile App Development with React Native",
  //   content: "React Native allows you to build mobile apps using JavaScript and React, offering a powerful cross-platform solution.",
  //   author: "Grace Miller",
  //   tags: ["React Native", "Mobile", "App Development"],
  //   datePublished: "2024-04-03",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "29",
  //   title: "Mastering Git and GitHub for Version Control",
  //   content: "Git and GitHub are essential tools for managing code versions, collaborating with developers, and tracking changes in your projects.",
  //   author: "Oliver Brown",
  //   tags: ["Git", "GitHub", "Version Control"],
  //   datePublished: "2024-04-06",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // },
  // {
  //   id: "30",
  //   title: "Building an E-commerce Website with React",
  //   content: "React is perfect for building dynamic, high-performance e-commerce websites with features like product pages, shopping carts, and user authentication.",
  //   author: "Jack White",
  //   tags: ["React", "E-commerce", "Web Development"],
  //   datePublished: "2024-04-09",
  //   thumbnail: "https://st2.depositphotos.com/1018728/8681/i/450/depositphotos_86817018-stock-photo-portrait-of-peacock-with-feathers.jpg"
  // }
];
