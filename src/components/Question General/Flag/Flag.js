import Card from "../../UI/Card/Card";

import classes from "./Flag.module.css";

const Flag = ({ flag }) => {
  return (
    <Card className="centered-horizontally">
      <img className={classes["flag-img"]} src={flag} alt="flag" />
    </Card>
  );
};

export default Flag;
