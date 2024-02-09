// PascalCasing for Components
function Navbar() {
  // JSX: JavaScript XML
  const siteTitle = "Sabine Meyer-Hill";
  return (
    <nav>
      <h2>{siteTitle}</h2>
      <ul>
        <li>
          <a href="../routes/Projects">projects</a>
        </li>
        <li>
          <a href="../routes/News">news</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
