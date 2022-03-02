interface IButton {
  text: string;
  page: number;
  isDisabled?: boolean;
  onClick: () => void;
}

export default IButton;
