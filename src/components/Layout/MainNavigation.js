import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>HireQuotient</div>
      </Link>
      <nav>
        <ul>
        <li>
            <Link to="/companyDashboard">Company Dashboard</Link>
          </li>
          <li>
            <Link to="/auth">Login/SignUp</Link>
          </li>
         
          
       
          <li>
            <button>Logout</button>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
