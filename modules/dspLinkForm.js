import React from "react";
import { DSPS } from "@/data/dsps/dspList";
const DSPLinkForm = () => {
  return (
    <div>
      {DSPS.map((dsp, i) => (
        <div key={i}>
          <label>{dsp} (url)</label>
          <input type="text" />
        </div>
      ))}
    </div>
  );
};

export default DSPLinkForm;
