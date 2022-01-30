import { DialogTitle } from '@material-ui/core';

interface IProps {
  title: any;
}

export default (props: IProps) => {
  const { title } = props;

  return <DialogTitle>{title}</DialogTitle>;
};
