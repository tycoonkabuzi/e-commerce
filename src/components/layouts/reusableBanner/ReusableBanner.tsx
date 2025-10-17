import styles from "./ReusableBanner.module.scss";

const ReusableBanner = ({
  subtitle,
  title,
  content,
  button,
  image,
}: {
  subtitle: string;
  title: string;
  content: string;
  button: string;
  image: {
    src: string;
    alt: string;
  };
}) => {
  return (
    <div className={styles.banner_delivery}>
      <div>
        <p className={styles.small_paragraph}>{subtitle}</p>
        <h1> {title}</h1>
        <p>{content}</p>
        <button className={styles.btn}> {button}</button>
      </div>

      <div className={styles.container_image}>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  );
};

export default ReusableBanner;
