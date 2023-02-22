import React from "react";

const ReleaseTypeSelector = () => {
  return (
    <div>
      <select name="type" id="type">
        <option value="single">Single</option>
        <option value="ep">EP</option>
        <option value="album">Album</option>
      </select>
    </div>
  );
};

export default ReleaseTypeSelector;
