import Link from "next/link";

{
  /* Links to pages */
}
const Layout = ({ children }) => (
  <div>
    <header>
      <Link href="/">Home</Link>
      <span className="header-spacing"></span>
      <Link href="/projects">Projects</Link>
      <span className="header-spacing"></span>
      <Link href="/about">About</Link>
      <span className="header-spacing"></span>
      <Link href="/contact">Contact</Link>
    </header>
    <main>{children}</main>

    {/* Styling of pages */}

    <style jsx>{`
      body {
        font-family: Arial, sans-serif;
        background-color: #cae7d3;
        margin: 0;
        padding: 0;
      }

      header {
        display: flex;
        align-items: center;
        background-color: #f0f0f0;
        padding: 10px;
      }

      .header-spacing {
        margin: 0 10px; /* spacing of heders */
      }

      header {
        background-color: #f0f0f0;
        padding: 10px;
        font-family: Arial, sans-serif;
      }

      main {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }
    `}</style>
  </div>
);

export default Layout;
