import { Button, Form, DatePicker } from "../../components";
import * as yup from "yup";

export default () => {
  return (
    <div className="container mt-3">
      <Form
        onSubmit={(data) => console.log(data)}
        validationSchema={{
          test_picker1: yup
            .string()
            .typeError("This field is required")
            .required("This field is required"),
        }}
      >
        <div className="row">
          <div className="col-6 mt-3">
            <DatePicker
              name="test_picker1"
              label="Test Picker Component"
              watch={(val) => console.log(val)}
			//   value={1637001540}
			  unixTime
            />
          </div>
          <div className="col-3 mt-3">
            <Button label="Submit" type="submit" />
          </div>
        </div>
      </Form>
    </div>
  );
};
