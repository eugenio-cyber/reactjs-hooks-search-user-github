import Avatar from "../../assets/avatar.png";
import SectionData from "../SectionData";
import SectionSocial from "../SectionSocial";
import "./styles.css";

const Main = () => {
  return (
    <main className="main">
      <img className="main__avatar" src={Avatar} alt="Foto do avatar" />
      <section className=" main__content">
        <div className="main__top">
          <div className="main__titles">
            <h2 className="main__title">The Octocat</h2>
            <a className="main__link" href="/">
              @octocat
            </a>
          </div>
          <span className="main__joined">Joined 25 Jan 2011</span>
        </div>
        <div className="main__information">
          <p className="main__bio">This profile has no bio</p>

          <SectionData />
          <SectionSocial />
        </div>
      </section>
    </main>
  );
};

export default Main;
