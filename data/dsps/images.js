const image1 = "https://services.linkfire.com/logo_applemusic_onlight.svg";
const image2 = "https://services.linkfire.com/logo_spotify_onlight.svg";
const image3 = "https://services.linkfire.com/logo_soundcloud_onlight.svg";
const image4 = "https://services.linkfire.com/logo_youtube_onlight.svg";
const image5 = "https://services.linkfire.com/logo_pandora_onlight.svg";
const image6 = "https://services.linkfire.com/logo_iheartradio_onlight.svg";
const image7 = "https://services.linkfire.com/logo_tidal_onlight.svg";

export const images = [image1, image2, image3, image4, image5, image6, image7];

const imageByName = (name) => {
  let image;
  switch (name) {
    case "Apple Music":
      image = image1;
      return image;
    case "Spotify":
      image = image2;
      return image;
    case "SoundCloud":
      image = image3;
      return image;
    case "YouTube":
      image = image4;
      return image;
    case "Pandora":
      image = image5;
      return image;
    case "iHeartRadio":
      image = image6;
      return image;
    case "Tidal":
      image = image7;
      return image;
  }
};

export default imageByName;
