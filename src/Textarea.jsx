import React, { useState } from "react";
import Warning from "./Warning";

const Textarea = () => {
  const [text, setText] = useState("");
  const [warning,setWarning] = useState(false);

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      alert("No script tag allowed");
      newText = newText.replace("<script>", "");
      setWarning(true);
    }else{
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
