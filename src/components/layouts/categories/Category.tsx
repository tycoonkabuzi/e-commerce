import styles from "./Category.module.scss";

const Category: React.FC = () => {
  return (
    <div className={styles.categories}>
      <h3> Shop by categories</h3>

      <div>
        <div>
          <img src="" alt="Lotion" />
          <p>Beauty picks</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
