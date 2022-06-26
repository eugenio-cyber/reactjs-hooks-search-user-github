import Moon from "../../assets/moon.svg";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title">devfinder</h2>
      <div className="header__theme">
        <span className="header__span">Dark</span>
        <img className="header__icon" src={Moon} alt="Ícone do tema" />
      </div>
    </header>
  );
};

export default Header;
