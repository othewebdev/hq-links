import "@/styles/globals.css";
import { createContext, useMemo, useState } from "react";

const ArtistContext = createContext({
  currentArtist: {},
  setCurrentArtist: () => {},
});

export default function App({ Component, pageProps }) {
  const [currentArtist, setCurrentArtist] = useState({});
  const value = useMemo(
    () => ({ currentArtist, setCurrentArtist }),
    [currentArtist]
  );

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
