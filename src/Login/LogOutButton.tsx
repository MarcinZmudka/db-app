import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface IProps {
  set_user_logged: Function;
}

const LogOutButton: React.FC<IProps> = ({ set_user_logged }) => {
  return (
    <Router>
      <Link to="/">
        <button
          className={"logout_button"}
          onClick={() => {
            set_user_logged(false);
          }}
        >
          WYLOGUJ
        </button>
      </Link>
    </Router>
  );
};
export default LogOutButton;
