import { useState } from 'react';
import { Button } from '../../components';
import Modal from './Modal';

export default () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-3">
            <Button
              label="Open Modal"
              onClick={() => {
                setShow((prevState) => !prevState);
              }}
            />
          </div>
        </div>
      </div>
      {show && <Modal showModal={show} onClose={() => setShow(false)} />}
    </>
  );
};
