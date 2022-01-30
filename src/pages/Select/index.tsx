import { Button, Form, Select } from '../../components';
import * as yup from 'yup';

export default () => {
  return (
    <div className="container mt-3">
      <Form
        onSubmit={(data) => console.log(data)}
        validationSchema={{
          test_select1: yup
            .number()
            .typeError('This field is required')
            .required('This field is required'),
          test_select2: yup
            .number()
            .typeError('This field is required')
            .required('This field is required'),
        }}
        defaultValues={{ test_select1: 1, test_select2: 2 }}
      >
        <div className="row">
          <div className="col-6 mt-3">
            <Select
              name="test_select1"
              label="Test Select Component"
              onChange={(val) => console.log(val)}
              emptyValue
              options={{
                data: [
                  { Name: 'Name1', Value: 1 },
                  { Name: 'Name2', Value: 2 },
                ],
                displayField: 'Name',
                displayValue: 'Value',
              }}
            />
          </div>
          <div className="col-6 mt-3">
            <Select
              name="test_select2"
              label="Test Select Component"
              emptyValue
              watch={(e) => console.log(e)}
              options={{
                data: [
                  { Name: 'Name1', Value: 1 },
                  { Name: 'Name2', Value: 2 },
                ],
                displayField: 'Name',
                displayValue: 'Value',
              }}
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
