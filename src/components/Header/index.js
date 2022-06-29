import Moon from "../../assets/moon.svg";
import Sun from "../../assets/sun.svg";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title cursor-pointer">devfinder</h2>
      <div className="header__theme">
        <span className="header__span cursor-pointer">Dark</span>
        <img
          className="header__icon cursor-pointer"
          src={Moon}
          alt="Ícone do tema"
        />
      </div>
    </header>
  );
};

export default Header;
