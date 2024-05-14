import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <section className="loadingpage">
      <h1>Loadingpage</h1>
      <img src="/img/reading-lady.svg" alt="" />
      <h4>Finde dein nächstes Lieblingsbuch</h4>
      <h2>Schlage ein neues Kapitel auf und lese die besten Bücher</h2>
      <p>
        Die spannendsten Reise-, Natur- und Abenteuerbücher sind nur einen Klick
        entfernt!
      </p>
      <button className="btn-red">Blätter weiter</button>
    </section>
  );
};

export default LoadingPage;
