import IButton from './button';

const Button: React.FC<IButton> = ({ text, page, isDisabled, onClick }) => {
  return (
    <button type="button" disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
