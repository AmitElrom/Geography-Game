import React, { useState } from "react";
import RulesButton from "../rules button/RulesButton";
import RulesText from "../rules text/RulesText";

const GameRules = () => {
  const [isRulesTextVisible, setIsRulesTextVisible] = useState(false);

  const toggleRulesTextHandler = () => {
    setIsRulesTextVisible((prevVal) => !prevVal);
  };

  return (
    <div>
      <RulesButton onClick={toggleRulesTextHandler} />
      {isRulesTextVisible && <RulesText />}
    </div>
  );
};

export default GameRules;
