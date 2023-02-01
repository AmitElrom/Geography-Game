import Card from "../../UI/Card/Card";

import classes from "./Flag.module.css";

const Flag = ({ flag }) => {
  return (
    <Card className="centered-horizontally">
      <img
        className={classes["flag-img"]}
        style={
          flag !== "https://flagcdn.com/np.svg"
            ? { boxShadow: "0px 0px 8px rgb(191, 191, 191)" }
            : undefined
        }
        src={flag}
        alt="flag"
      />
    </Card>
  );
};

export default Flag;
