interface CardProps {
  href: string;
}

const Card: React.FC<CardProps> = ({ children, href }) => {
  return (
    <a
      href={href}
      className="w-40 ma2 pa4 ba br4 b--light no-underline b--light-gray black"
    >
      {children}
    </a>
  );
};

export default Card;
