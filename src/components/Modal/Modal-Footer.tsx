interface IProps {
  children: any;
}

export default (props: IProps) => {
  const { children } = props;

  return <div className="custom-dialog-footer">{children}</div>;
};
