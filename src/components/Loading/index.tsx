import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default () => {
  return (
    <div>
      <Backdrop sx={{ color: "#fff", zIndex: 10000 }} open>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};
