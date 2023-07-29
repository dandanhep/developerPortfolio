import Layout from "../components/Layout";

const Contact = () => (
  <Layout>
    <h1>Contact Me</h1>
    <p>Email: dhepburn97@gmail.com</p>
    <p>Student Number: DH23010006349</p>
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

export default Contact;
