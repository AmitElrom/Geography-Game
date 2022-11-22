import React from "react";

import classes from "./RulesText.module.css";

const RulesText = () => {
  return (
    <div className={classes["all-text"]}>
      <p>
        In every question, a country's flag is presented and you have to guess
        which country holds this flag. A correct answer will earn you 1 point in
        your score and a wrong answer will neither add nor diminish from the
        current match score.
      </p>
      <p>
        Once you will finish the match, a match summary will appear on the
        screen. In addition, you can watch your matches' summary on the score
        page after clicking on the Score option in the Menu that opens after you
        click your name.
      </p>
    </div>
  );
};

export default RulesText;
