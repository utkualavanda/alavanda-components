import { Button } from "@material-ui/core";
import { useState } from "react";
import Modal from "./Modal";

export default () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 mt-3">
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                setShow((prevState) => !prevState);
              }}
            >
              Open Modal
            </Button>
          </div>
        </div>
      </div>
      {show && <Modal showModal={show} onClose={() => setShow(false)} />}
    </>
  );
};
