import Layout from "../components/Layout";

{
  /* About page paragraph */
}
const About = () => (
  <Layout>
    <h1>About Me</h1>
    <p>
      Hello there, I'm Danielle, and I'm thrilled to have you here. This page
      serves as an introduction to my journey as a web developer, providing a
      glimpse into my educational background, work history, and the essence of
      who I am as a person and a professional. From the early days my passion
      for technology has been a constant driving force in my life. As a junior
      web developer, I have honed my skills in creating robust and user-friendly
      web experiences that merge form with function seamlessly. My academic
      journey laid the foundation, but my real growth came through hands-on
      experiences and challenging projects that pushed me to explore the
      limitless possibilities of the digital world. With 5 years of experience
      in the design industry, I've had the privilege of collaborating with
      diverse teams and clients on projects. Each opportunity has been a
      stepping stone, nurturing my creativity and refining my problem-solving
      abilities. But what truly motivates me as a web developer is the chance to
      make a positive impact on people's lives through technology. When I'm not
      immersed in the digital realm, you can often find me exploring the great
      outdoors or delving into a good book to spark my creativity. I firmly
      believe that inspiration can be found in the most unexpected places, and I
      always strive to infuse that inspiration into my work. This portfolio is a
      labor of love, a collection of my proudest achievements and the projects
      that have pushed me to grow as a web developer. As you navigate through
      these pages, I hope you get a sense of the passion and dedication that
      fuels my journey...
    </p>

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

export default About;
