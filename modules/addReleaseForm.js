import React, { useState } from "react";
import ArtistSelector from "./artistSelector";
import DSPLinkForm from "./dspLinkForm";
import ReleaseTypeSelector from "./releaseTypeSelector";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "@/styles/Portal.module.css";
import Link from "next/link";

const AddReleaseForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.page}>
      <h3>Add New Release</h3>
      <div className={styles.releaseForm}>
        <div className={styles.inputSection}>
          <label>Artist Name</label>
          <ArtistSelector />
        </div>
        <div className={styles.inputSection}>
          <label>Release Name</label>
          <input type="text" />
        </div>
        <div className={styles.inputSection}>
          <label>Release Cover (url)</label>
          <input type="text" />
        </div>
        <div className={styles.inputSection}>
          <label>Release Type</label>
          <ReleaseTypeSelector />
        </div>
        <div className={styles.inputSection}>
          <label>Release Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className={styles.inputSection}>
          <label>Add DSP links</label>
          <DSPLinkForm />
        </div>
        <Link href="/preview">
          <button className="button">Add Release</button>
        </Link>
      </div>
    </div>
  );
};

export default AddReleaseForm;
