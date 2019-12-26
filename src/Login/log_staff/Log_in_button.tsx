import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
interface IProps {
  check_validation: Function;
}
const Log_in_button: React.FC<IProps> = ({ check_validation }) => {
  return (
    <Router>
        <div className={"log_button"} onClick={e => check_validation(e)}>
      <Link to="/menu">
          Log in
      </Link>
        </div>
    </Router>
  );
};
export default Log_in_button;
