import Avatar from "../../assets/avatar.png";
import "./styles.css";

const Main = () => {
  return (
    <main className="main">
      <img className="main__avatar" src={Avatar} alt="Foto do avatar" />
      <section className="main__">
        <div className="main__">
          <h2 className="main__">The Octocat</h2>
          <a className="main__" href="/"></a>
          <span className="main__"></span>
        </div>
        <div className="main__"></div>
        <div className="main__"></div>
      </section>
    </main>
  );
};

export default Main;
