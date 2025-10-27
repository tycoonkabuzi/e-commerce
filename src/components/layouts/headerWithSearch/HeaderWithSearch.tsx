import styles from "./HeaderWithSearch.module.scss";

const HeaderWithSearch: React.FC = () => {
  return (
    <div>
      <h1>Get all you need </h1>
      <form action="">
        <input type="text" placeholder="search on toni" />
        <button>search</button>
      </form>
    </div>
  );
};

export default HeaderWithSearch;
