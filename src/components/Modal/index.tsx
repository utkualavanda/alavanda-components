import { Dialog, DialogProps, IconButton } from '@material-ui/core';
import { Clear as ClearIcon } from '@mui/icons-material';
import { Loading } from '../../components';

interface IProps extends DialogProps {
  children: any;
  open: boolean;
  onExitButtonClick: () => void;
  onBackdropClick: () => void;
  disableBackdropClick?: boolean;
  loading?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export default (props: IProps) => {
  const {
    children,
    open,
    onExitButtonClick,
    onBackdropClick,
    disableBackdropClick = false,
    loading = false,
    size = 'xs',
    ...rest
  } = props;

  return (
    <>
      <Dialog
        open={open}
        maxWidth={size}
        onBackdropClick={() => !disableBackdropClick && onBackdropClick()}
        fullWidth
        {...rest}
      >
        <IconButton
          className="custom-modal-exit-button"
          onClick={() => onExitButtonClick && onExitButtonClick()}
        >
          <ClearIcon />
        </IconButton>
        {children}
      </Dialog>
      {loading && <Loading />}
    </>
  );
};
