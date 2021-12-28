import { DialogContent } from "@material-ui/core";

interface IProps {
  children: any;
}

export default (props: IProps) => {
  const { children } = props;

  return <DialogContent dividers>{children}</DialogContent>;
};
