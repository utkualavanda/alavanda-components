import { Button } from "../../components";

export default () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-3">
          <Button label="Default button" />
        </div>
        <div className="col-3">
          <Button label="Outlined button" outlined />
        </div>
      </div>
    </div>
  );
};
