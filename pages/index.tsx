import Image from "next/image";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} font-sans min-h-screen bg-white dark:bg-black`}>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Picture */}
          <div className="relative">
        <Image
              src="/cropped-profile-picture.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
          priority
        />
          </div>
          
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 dark:text-white text-center">
            William Lam
          </h1>
          
          {/* Optional subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 text-center max-w-md">
            Welcome to my personal website!
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400 dark:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
      
      {/* About Me Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Born and raised in Toronto, I'm a full-stack developer with a passion for building software applications and solving complex problems. 
            Beyond coding, I'm deeply committed to making a meaningful impact on the world around me, whether through technology or by giving back to the community.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mt-6">
            I actively volunteer with organizations supporting Toronto's most vulnerable populations, believing that compassion and innovation go hand in hand in shaping a better future. 
            Outside of tech, the hobbies I enjoy most are volleyball, basketball, working out, and playing chess. I also love being involved in school clubs, teaching others, and spending time reading to broaden my perspective.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mt-6">
            Above all, I strive to be someone of character - kind, compassionate, and responsible - who makes a positive, lasting impact on everything around me. 
            Constantly expanding my problem-solving repertoire through learning new frameworks and technologies, my ultimate goal is to use these skills to create meaningful, lasting change in the world.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-12 text-center">
            Education
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image
                      src="/uoft-logo-two.avif"
                      alt="University of Toronto Logo"
                      width={48}
                      height={48}
                      className="object-contain rounded-md bg-white"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h3>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Current Student</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">University of Toronto</p>
              <p className="text-gray-700 dark:text-gray-300">
                Specializing in distributed systems and AI, with coursework in software engineering, algorithms, and data structures. 
                Completed studies in web development, machine learning, and database systems. Dean's Honour List recipient while balancing 
                extracurricular activities and leadership roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-12 text-center">
            Work Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image
                      src="/rbc.png"
                      alt="RBC Logo"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">Software Developer Intern</h3>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Sept 2025 - Present</span>
              </div>
                <div className="flex justify-between items-start mb-2">
                  <p className="text-gray-600 dark:text-gray-400">Royal Bank of Canada (RBC)</p>
                  <p className="text-gray-500 dark:text-gray-500 text-right">T&O (Technology & Operations) Technology Infrastructure, End User Service Team</p>
                </div>
                <p className="text-gray-500 dark:text-gray-500 mb-4">Toronto, ON</p>
              <p className="text-gray-700 dark:text-gray-300">
                Current intern working on cloud migration projects and enterprise infrastructure and automation solutions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image
                      src="/uoft.webp"
                      alt="University of Toronto Logo"
                      width={48}
                      height={48}
                      className="object-contain rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">Software Engineer</h3>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">May 2025 - Present</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">University of Toronto • Toronto, ON</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Co-developing a web-based no-code platform that empowers non-technical startup founders to generate production-ready web applications through AI-assisted project planning, code generation, and structured development workflows.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Implementing a <strong>Retrieval-Augmented Generation (RAG)</strong> pipeline to manage project context across code, design, and product requirements.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Building the frontend using <strong>TypeScript</strong>, <strong>React</strong>, and <strong>Daisy UI</strong>, and integrating automated project artifact generation to ensure clean documentation and traceability.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Contributing to a <strong>Docker-based preview system</strong> for live testing and isolated deployment of generated applications, supporting a seamless end-to-end development experience for users.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Optimizing context retrieval performance using parallel request strategies and <strong>asynchronous</strong> processing, improving generation latency and accuracy.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Developing and deploying a robust code validation system with staged linting, formatting, and type-checking, reducing code errors by over <strong>60%</strong> in testing.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurriculars Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-12 text-center">
            Extracurriculars
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Image
                      src="/utmist.svg"
                      alt="UTMIST Logo"
                      width={36}
                      height={36}
                      className="object-contain rounded-md bg-white"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">Director of Software Infrastructure</h3>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">May 2025 - Present</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">UTMIST (University of Toronto Machine Intelligence Student Team)</p>
              <p className="text-gray-700 dark:text-gray-300">
                Director of Software Infrastructure at North America's largest student-led organization for AI/ML. 
                UTMIST has 500+ developers across all teams, completed 50+ AI/ML projects, partnered with 20+ industry collaborators, 
                conducted 50+ academic workshops, published 50+ articles and notebooks, and published 10+ papers in top-tier conferences. 
                Leading infrastructure initiatives to empower students of all skill levels in accelerating their AI/ML careers through 
                workshops, conferences, hackathons, and collaborative projects.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image
                      src="/uoft-blueprint.ico"
                      alt="UofT Blueprint Logo"
                      width={48}
                      height={48}
                      className="object-contain rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">Software Developer</h3>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Sept. 2024 - April 2025</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">UofT Blueprint</p>
              <p className="text-gray-700 dark:text-gray-300">
                Software Developer at Blueprint, a group of passionate UofT students dedicated to building software for social good. 
                Collaborated with Toronto Employment Community Services to develop technological solutions that help them make a bigger 
                impact on the community. Worked alongside passionate student developers to create real-world solutions for non-profit 
                organizations, using technology to give back and create positive change.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image
                      src="/uoft-web-dev.png"
                      alt="UofT Web Development Club Logo"
                      width={48}
                      height={48}
                      className="object-contain rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">Software Developer</h3>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Sept. 2024 - April 2025</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">UofT Web Development Club</p>
              <p className="text-gray-700 dark:text-gray-300">
                Software Developer at the Web Development Club, collaborating with MITO2i to shape the future of health 
                through mitochondrial research and innovation. Worked on a project that advanced science in mitochondrial 
                medicine & research, helping transform the understanding of mitochondrial health and disease to lead to 
                better diagnoses and treatments that enhance quality of human life.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image
                      src="/uoft-varsity-blues.jpg"
                      alt="UofT Varsity Blues Logo"
                      width={48}
                      height={48}
                      className="object-contain rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">Athlete</h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">UofT Junior Varsity Volleyball Team</p>
              <p className="text-gray-700 dark:text-gray-300">
                Active member of the University of Toronto Junior Varsity Volleyball Team, competing in intercollegiate 
                matches. Developed teamwork, leadership, and discipline through rigorous training and 
                competitive play while representing the university in athletic competitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-12 text-center">
            Personal Projects
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Track-Ops - Real-Time Order Tracking System</h3>
                <a href="https://github.com/williamntlam/track-ops" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                  GitHub →
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Apache Kafka, Redis, PostgreSQL, Kubernetes, Docker, Prometheus, Grafana, Java</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Built a scalable, real-time backend system inspired by Uber Eats/Amazon Logistics using <strong>event-driven architecture</strong> with <strong>Apache Kafka</strong> for order status streaming.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Implemented <strong>Redis caching strategies</strong> (cache-aside, write-through) with TTL management for fast order status and delivery location access.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Deployed and orchestrated microservices using <strong>Kubernetes</strong> with Helm charts, including liveness/readiness probes and auto-scaling capabilities.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Integrated <strong>observability stack</strong> with Prometheus metrics, Grafana dashboards, and ELK logging for comprehensive system monitoring and performance analysis.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">DriveInsight - HackThe6ix (MLH) Hackathon Winner @ UofT</h3>
                <a href="https://github.com/williamntlam/drive-insight-hack-the-6ix" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                  GitHub →
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">MongoDB, Express.js, React.js, Node.js, Flask, React Native</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Led the development of a system to gather gyroscope data and analyze it using <strong>computer vision</strong> and <strong>AI</strong>, enhancing the detection of driver behavior and improving road safety.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Designed and deployed a scalable <strong>RESTful API</strong> using <strong>Flask</strong> to process and retrieve driver behavior data efficiently.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Implemented a real-time monitoring feature using <strong>WebSocket</strong> and <strong>Socket.io</strong>, providing immediate feedback on driver behavior and reducing response times.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Stud.io - NSBEHacks (MLH) Hackathon Winner @ UofT</h3>
                <a href="https://github.com/williamntlam/stud-io-nsbehacks" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                  GitHub →
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Next.js, Tailwind CSS, JavaScript, Flask, MongoDB Atlas, Python, LLMs, Q-learning</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Developed a dynamic and responsive frontend using <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>React</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Built a scalable <strong>RESTful API</strong> with <strong>Flask</strong> and <strong>MongoDB Atlas</strong> to manage users, flashcards, performance data, and embeddings.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Integrated <strong>large language models (LLMs)</strong> for flashcard generation and student response evaluation, combined with <strong>Q-learning</strong> for personalized study tracking.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Implemented <strong>vector search</strong> with <strong>cosine similarity</strong> to find related flashcards, enhancing personalized learning and knowledge gap detection.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Scriptorium - Online Code Platform</h3>
                <a href="https://github.com/williamntlam/scriptorium" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                  GitHub →
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Next.js, React, TypeScript, Prisma ORM, Docker, SQLite/PostgreSQL, TailwindCSS</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Built an innovative online platform enabling users to write, execute, and share code in multiple programming languages with <strong>real-time execution</strong> and <strong>syntax highlighting</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Implemented <strong>Docker containerization</strong> for secure code execution with resource limits, network isolation, and automatic container cleanup to prevent abuse.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Developed comprehensive features including <strong>user authentication</strong>, <strong>code templates</strong>, <strong>blog posts</strong>, and <strong>content moderation</strong> with reporting systems.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Created a <strong>responsive design</strong> with dark/light theme support and intuitive navigation for seamless user experience across all devices.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">ProductivityMate - Full-Stack Productivity App</h3>
                <a href="https://github.com/williamntlam/productivity-mate" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                  GitHub →
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Next.js, TypeScript, Spring Boot, Java, Gradle, TailwindCSS, Docker</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Developed a modern productivity web application with integrated <strong>Calendar</strong>, <strong>Task Management</strong>, <strong>Reminders</strong>, and <strong>Pomodoro Timer</strong> features.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Built a <strong>full-stack architecture</strong> using <strong>Next.js/TypeScript</strong> frontend with <strong>Spring Boot/Java</strong> backend, connected via RESTful APIs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Implemented <strong>Docker containerization</strong> with docker-compose for seamless development and deployment of both frontend and backend services.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Designed with <strong>responsive UI/UX</strong> using TailwindCSS and planned features for <strong>desktop app</strong> (Electron.js) and <strong>AWS EC2 deployment</strong> for real-time notifications.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-12">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Email</h3>
              <a href="mailto:williamntlam@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                williamntlam@gmail.com
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">GitHub</h3>
              <a href="https://github.com/williamntlam" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                github.com/williamntlam
          </a>
        </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/william-nhut-lam-b3a8a2213/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:williamntlam@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
