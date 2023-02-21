import React, { useState } from "react";

const Header = ({ artist }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <p>{artist.name}</p>
      <p>{artist.release?.name}</p>
      <p onClick={() => setIsOpen(!isOpen)}>arrow</p>
      {isOpen && <div>{artist.release.bio}</div>}
    </div>
  );
};

export default Header;
