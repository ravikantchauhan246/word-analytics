import React, { useState } from "react";
import Warning from "./Warning";

const Textarea = () => {
  const [text, setText] = useState("");
  const [warning,setWarning] = useState(false);

  const handleChange = (e) => {

    // basic validation

    let newText = e.target.value;
    if (newText.includes("<script>")) {
      
      newText = newText.replace("<script>", "");
      setWarning(true);
    }else if (newText.includes("@")) {
      
      newText = newText.replace("@", "");
      setWarning(true);
    }
    else{
      setWarning(false);
    }
    setText(newText);
   
  };

  return (
    <div className="textarea">
      <textarea
        placeholder="Enter your text "
        spellCheck="false"
        value={text}
        onChange={handleChange}
        className="textarea"
      />
      {warning && <Warning/>}
    </div>
  );
};

export default Textarea;
