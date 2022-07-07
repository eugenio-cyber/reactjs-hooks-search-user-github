import Location from "../../assets/location.svg";
import WebSite from "../../assets/website.svg";
import Company from "../../assets/company.svg";
import Twitter from "../../assets/twitter.svg";
import "./styles.css";

const SectionSocial = () => {
  return (
    <div className="social">
      <div className="social__column">
        <span>
          <img className="social__location" src={Location} alt="Ícone" />
          San Francisco
        </span>
        <a href="#">
          <img className="social__web" src={WebSite} alt="Ícone" />
          https://github.blog
        </a>
      </div>
      <div className="social__column">
        <span>
          <img className="social__twitter" src={Twitter} alt="Ícone" />
          Not Available
        </span>
        <span>
          <img className="social__company" src={Company} alt="Ícone" />
          @github
        </span>
      </div>
    </div>
  );
};

export default SectionSocial;
