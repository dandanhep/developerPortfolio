import Layout from "../components/Layout";

const Projects = () => (
  <Layout>
    <h1>Projects</h1>
    {/* Links to GitHub projects */}
    <ul>
      <li>
        <a
          href="https://github.com/dandanhep/searchApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project 1: Search App
        </a>
      </li>
      <li>
        <a
          href="https://github.com/dandanhep/hangmangame"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project 2: Hangman Game
        </a>
      </li>
    </ul>

    {/* Styling */}
    <style jsx>{`
      h1 {
        color: #43a5be;
      }
      p {
        font-size: 16px;
      }
    `}</style>
  </Layout>
);

export default Projects;
