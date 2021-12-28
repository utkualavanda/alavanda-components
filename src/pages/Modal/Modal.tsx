import * as yup from "yup";
import { useState } from "react";
import {
  Button,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
} from "../../components";

interface IProps {
  showModal: boolean;
  onClose: () => void;
}

export default (props: IProps) => {
  const { showModal, onClose } = props;
  const [show, setShow] = useState(showModal || false);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setShow(false);
    onClose && onClose();
  };

  const handleSubmit = (data: any) => {
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      closeModal();
    }, 2500);
  };

  return (
    <Modal
      open={show}
      size="lg"
      onExitButtonClick={() => closeModal()}
      onBackdropClick={() => closeModal()}
      loading={loading}
    >
      <ModalHeader title="test modal header" />
      <Form
        onSubmit={(data) => handleSubmit(data)}
        validationSchema={{
          test_input1: yup
            .string()
            .required("You should have fill this field before submitting"),
        }}
      >
        <ModalBody>
          <div className="row">
            <div className="col-6 mb-3">
              <Input
                name="test_input1"
                label="test input1"
                placeholder="test placeholder"
              />
            </div>
            <div className="col-6 mb-3">
              <Input name="test_input2" label="test input2" />
            </div>
            <div className="col-6">
              <Select
                name="test_select"
                label="test select1"
                options={{ data: [], displayField: "", displayValue: "" }}
              />
            </div>
            <div className="col-6">
              <Input name="test_input3" label="test input3" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="row">
            <div className="col-6">
              <Button
                label="Cancel"
                outlined
                fullWidth
                onClick={() => closeModal()}
              />
            </div>
            <div className="col-6">
              <Button label="Submit" type="submit" />
            </div>
          </div>
        </ModalFooter>
      </Form>
    </Modal>
  );
};
