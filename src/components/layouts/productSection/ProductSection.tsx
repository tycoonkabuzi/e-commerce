import CardText from "../cardText";
import Menu from "../menu";
import styles from "./ProductSection.module.scss";

interface CardProp {
  id: number;
  image: {
    src: string;
    alt: string;
  };
  subtitle: string;
  title: string;
  price: string;
}

interface MainProductsProps {
  bigTitle: string;
  smallTitle: string;
  cards: CardProp[];
}
const ProductSection: React.FC<MainProductsProps> = ({
  bigTitle,
  smallTitle,
  cards,
}) => {
  return (
    <div className={styles.lastViewed}>
      <Menu bigTitle={bigTitle} smallTitle={smallTitle} />
      <div className={styles.container_items}>
        {cards && cards.length > 0
          ? cards.map((card) => (
              <div className={styles.item}>
                <div>
                  <img src={card.image.src} alt={card.image.alt} />
                </div>
                <CardText
                  subtitle={card.subtitle}
                  title={card.title}
                  price={card.price}
                />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};
export default ProductSection;
