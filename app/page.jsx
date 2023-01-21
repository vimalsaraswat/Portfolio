export default function Page() {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
function Main() {
  return (
    <main>
      <Home />
      <Skills />
      <Projects />
      <About />
    </main>
  );
}
function Footer() {
  return (
    <footer>

    </footer>
  );
}

function Home() {
  return (
    <section>
      <h1>Vimal Saraswat</h1>
    </section>
  );
}
function Skills() {
  return (
    <section></section>
  );
}
function Projects() {
  return (
    <section></section>
  );
}
function About() {
  return (
    <section></section> 
  );
}