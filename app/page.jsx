export default function Page() {
  return (
    <div className="h-screen flex flex-col bg-gray-800 text-white">
    <Header />
    <Main />
    <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="flex-none bg-slate-700 border-b-2 border-slate-800">
      header
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
    <main className="grow">
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
function Footer() {
  return (
    <footer className="flex-none">
      Footer
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
    <section>
      <H2>Skills</H2>
    </section>
  );
}
function Projects() {
  return (
    <section>
      <h1>Projects</h1>
    </section>
  );
}
function Contact() {
  return (
    <section>
      <H2>Contact</H2>
    </section> 
  );
}

function H2(props) {
  return (
    <h2 className="text-4xl text-center">{props.children}</h2>
  );
}