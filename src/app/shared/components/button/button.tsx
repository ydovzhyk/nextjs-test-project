import s from "./Button.module.scss";

interface IBottonProps {
  text: string;
  type?: "submit" | "button" | "reset";
  btnClass: string;
  onClick?: () => void;
  id?: string;
  image?: string;
}

const Button: React.FC<IBottonProps> = ({
  text = "",
  type = "submit",
  btnClass = "btnDark",
  onClick,
  id = "",
  image = null,
}) => {
  return (
    <button id={id} className={s[btnClass]} onClick={onClick} type={type}>
      <div className={s.btnWrapper}>
        {image && <img src={image} alt="icon" className={s.icon} />}
        {text && <p className={s.btnText}>{text}</p>}
      </div>
    </button>
  );
};

export default Button;
