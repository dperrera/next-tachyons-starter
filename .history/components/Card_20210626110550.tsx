interface CardProps {
  href: string;
}

const Card: React.FC<href> = ({ children, href }) => {
  return (
    <a href={href} className="ma pa4">
      {children}
    </a>
  );
};

export default Card;
