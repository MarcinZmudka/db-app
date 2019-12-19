import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
interface IProps {
  check_validation: Function;
}
const Log_in_button: React.FC<IProps> = ({ check_validation }) => {
  return (
    <Router>
      <Link to="/menu">
        <button className={"log_button"} onClick={e => check_validation(e)}>
          Log in
        </button>
      </Link>
    </Router>
  );
};
export default Log_in_button;
