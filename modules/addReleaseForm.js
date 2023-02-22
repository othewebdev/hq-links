import React, { useState } from "react";
import ArtistSelector from "./artistSelector";
import DSPLinkForm from "./dspLinkForm";
import ReleaseTypeSelector from "./releaseTypeSelector";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddReleaseForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div>
        <label>Artist Name</label>
        <ArtistSelector />
        <label>Release Name</label>
        <input type="text" />
        <label>Release Cover (url)</label>
        <input type="text" />
        <label>Release Type</label>
        <ReleaseTypeSelector />
        <label>Release Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <DSPLinkForm />
        <button>Add Release</button>
      </div>
    </div>
  );
};

export default AddReleaseForm;
<input type="text" />;
