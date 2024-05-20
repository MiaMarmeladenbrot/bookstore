import "./LoadingPage.css";
import { Link } from "react-router-dom";

const LoadingPage = () => {
  return (
    <section className="loadingpage">
      <div>
        <img src="/img/reading-lady.svg" alt="" />
      </div>
      <article>
        <h4>Finde dein nächstes Lieblingsbuch</h4>
        <h2>Schlage ein neues Kapitel auf!</h2>
        <p>Finde die spannendsten Bücher - nur einen Klick entfernt!</p>
        <Link to="/dashboard">
          <button className="btn-red">Blätter weiter</button>
        </Link>
      </article>
    </section>
  );
};

export default LoadingPage;
