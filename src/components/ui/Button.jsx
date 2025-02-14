import "./../../styles/components/ui/button.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) => {
  return (
    <button className={`btn ${variant}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
