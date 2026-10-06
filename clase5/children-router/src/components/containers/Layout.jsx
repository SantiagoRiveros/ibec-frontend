export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Mi aplicacion</h1>
      </header>

      <main>{children}</main>

      <footer>
        <p>Mi aplicacion</p>
      </footer>
    </>
  );
}
