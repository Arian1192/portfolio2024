
import Icons, { AgileIcon, GitHubIcon, GitIcon, InsomniaIcon, JsonWebTokenIcon, KanbanIcon, NotionIcon, ObsidianIcon, PostmanIcon, ScrumIcon, SocketIoIcon } from './icons.jsx'

const { TailwindIcon, HtmlIcon, CssIcon, JavascriptIcon, TypescriptIcon, ReactIcon, TanstackReactQueryIcon, AxiosIcon, NodeJsIcon, ExpressIcon, MongodbIcon, MongooseIcon } = Icons

export const icons = [{
    frontend: [{
        name: 'HTML',
        icon: HtmlIcon,
        description: 'The building block of web content, used to structure and present information on the internet.',
    }, {
        name: 'CSS',
        icon: CssIcon,
        description: 'Stylesheet language that defines the look and formatting of HTML documents.',
    }, {
        name: 'JavaScript',
        icon: JavascriptIcon,
        description: 'A versatile scripting language that adds interactivity and dynamic content to web pages.',
    }, {
        name: 'Typescript',
        icon: TypescriptIcon,
        description: 'A superset of JavaScript that adds static typing for enhanced code reliability and maintainability.',
    }, {
        name: 'React',
        icon: ReactIcon,
        description: 'A popular JavaScript library for building user interfaces, known for its component-based architecture.',
    }, {
        name: 'Tailwind',
        icon: TailwindIcon,
        description: 'A utility-first CSS framework that makes styling web applications more efficient.',
    }, {
        name: 'tanstack react query',
        icon: TanstackReactQueryIcon,
        description: 'A powerful React library for managing, caching, and updating server state in applications.',
    }, {
        name: 'Axios',
        icon: AxiosIcon,
        description: 'A promise-based HTTP client for making requests and handling responses in the browser and Node.js.',
    }],
    backend: [{
        name: 'NodeJS',
        icon: NodeJsIcon,
        description: 'A server-side JavaScript runtime for building scalable and high-performance network applications.',
    }, {
        name: 'Express',
        icon: ExpressIcon,
        description: 'A minimal and flexible Node.js web application framework used for building APIs and web apps.',
    }, {
        name: 'MongoDB',
        icon: MongodbIcon,
        description: 'A NoSQL database that stores data in flexible, JSON-like documents, suitable for scalable applications.',
    }, {
        name: 'Mongoose',
        icon: MongooseIcon,
        description: 'An elegant MongoDB object modeling tool for Node.js, providing a schema-based solution for application data.',
    }, {
        name: 'socket.io',
        icon: SocketIoIcon,
        description: 'A library for real-time web applications, enabling bidirectional communication between clients and servers.',
    }, {
        name: 'Jwt',
        icon: JsonWebTokenIcon,
        description: 'JSON Web Tokens are a compact, URL-safe means of representing claims between two parties.',
    }],
    tools: [{
        name: 'Git',
        icon: GitIcon,
        description: 'A distributed version control system used for tracking changes in source code during software development.',
    }, {
        name: 'Github',
        icon: GitHubIcon,
        description: 'A web-based platform for version control and collaboration using Git, widely used for hosting code repositories.',
    }, {
        name: 'Notion',
        icon: NotionIcon,
        description: 'An all-in-one workspace tool for note-taking, task management, and collaboration.',
    }, {
        name: 'Postman',
        icon: PostmanIcon,
        description: 'A popular API development and testing tool that simplifies the process of working with APIs.',
    }, {
        name: 'Insomnia',
        icon: InsomniaIcon,
        description: 'A feature-rich API client for testing and debugging APIs, with support for various protocols.',
    }, {
        name: 'Obsidian',
        icon: ObsidianIcon,
        description: 'A note-taking and knowledge management app with a focus on interlinked, markdown-based documents.',
    }],

    methodologies: [{
        name: 'Scrum',
        icon: ScrumIcon,
        description: 'An Agile framework for managing complex knowledge work, with an emphasis on iterative and incremental delivery.',
    }, {
        name: 'Kanban',
        icon: KanbanIcon,
        description: 'A visual management method for optimizing work processes and flow, often used in Agile software development.',
    }, {
        name: 'Agile',
        icon: AgileIcon,
        description: 'A flexible and collaborative approach to software development, emphasizing adaptability and customer satisfaction.',
    }]

}]
