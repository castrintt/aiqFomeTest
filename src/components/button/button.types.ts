export type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  color: "blue" | "gray";
  onClick: () => void;
  disabled?:boolean
};
