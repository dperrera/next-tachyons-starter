interface CardProps {
  href: string;
}

const Card: React.FC<href> = ({ children, href }) => {
  return (
    <a href={href} className={styles.card}>
      {children}
    </a>
  );
};

export default Card;
