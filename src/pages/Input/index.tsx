import { Button, Form, Input } from '../../components';
import * as yup from 'yup';

export default () => {
  return (
    <div className="container mt-3">
      <Form
        onSubmit={(data) => console.log(data)}
        validationSchema={{
          test_input1: yup.string().required('This field is required'),
          test_input2: yup.string().required('This field is required'),
        }}
      >
        <div className="row">
          <div className="col-6 mt-3">
            <Input
              name="test_input1"
              label="Test Input Component"
              placeholder="Test Placeholder"
              watch={(val) => console.log(val)}
            />
          </div>
          <div className="col-6 mt-3">
            <Input
              name="test_input2"
              label="Test Input Component"
              value={'Default input value'}
              watch={(val) => console.log(val)}
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
