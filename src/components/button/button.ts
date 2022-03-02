interface IButton {
  text: string;
  page: number;
  isDisabled?: boolean;
  onClick: () => any;
}

export default IButton;
