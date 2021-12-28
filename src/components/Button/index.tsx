import { Button, ButtonProps } from "@material-ui/core";

interface IProps extends ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  outlined?: boolean;
  color?: "primary" | "inherit" | "secondary" | "default";
}

export default (props: IProps) => {
  const {
    label,
    type = "button",
    outlined = false,
    color = "primary",
    ...rest
  } = props;
  return (
    <Button
      type={type}
      variant={outlined ? "outlined" : "contained"}
      color="default"
      fullWidth
      {...rest}
    >
      {label}
    </Button>
  );
};
