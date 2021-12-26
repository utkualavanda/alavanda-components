import { Form, Input } from "../../components";
import * as yup from "yup";
import { Button } from "@material-ui/core";

export default () => {
  return (
    <div className="container">
      <Form
        onSubmit={(data) => console.log(data)}
        validationSchema={{
          test_input1: yup.string().required("This field is required"),
          test_input2: yup.string().required("This field is required"),
        }}
      >
        <div className="row">
          <div className="col-6 mt-3">
            <Input
              name="test_input1"
              label="Test Input Component"
              watch={(val) => console.log(val)}
            />
          </div>
          <div className="col-6 mt-3">
            <Input
              name="test_input2"
              label="Test Input Component"
              value={"Default input value"}
              watch={(val) => console.log(val)}
            />
          </div>
          <div className="col-3 mt-3">
            <Button variant="contained" type="submit" fullWidth>
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};
