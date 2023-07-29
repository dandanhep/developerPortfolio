import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    <h1>Welcome to My Developer Portfolio!</h1>
    <img src="/static/images/profile-pic.jpeg" alt="profile-pic" />{" "}
    {/* Static profile picture */}
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

export default Home;
