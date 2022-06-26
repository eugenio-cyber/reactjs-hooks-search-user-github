import Search from "../../assets/search.svg";
import "./styles.css";

const Input = () => {
  return (
    <div className="search">
      <img className="search__icon" src={Search} alt="Ícone de pesquisa" />
      <input
        className="search__input"
        type="text"
        placeholder="Search GitHub username..."
      />
      <button className="search__btn">Search</button>
    </div>
  );
};

export default Input;
