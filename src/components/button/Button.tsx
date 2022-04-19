import IButton from './button';
import './Button.scss';

const Button: React.FC<IButton> = ({ text, isDisabled, onClick }) => {
  const classes = !isDisabled ? 'button' : 'button button--disabled';
  return (
    <button
      className={classes}
      type="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
