
# HQ Links
## A Linkfire alternative for HQ Records artists.



## Installation

Install **hq-links** with yarn

```bash
  yarn add hq-links
  cd hq-links
```
    

* This is an internal project for artist on the HQ Records Label
* This project serves as an alternative to Linkfire or other paid smart link providers
* This is a custom smart link provider is built exclusively for HQ Records



## To Use
* To start the server, run
```
yarn dev
```
* This will run **hq-links** on **http://localhost:3000**
***PLEASE MAKE SURE TO PROVIDE [SLUG] at the end of "http://localhost:3000" (ex: https://localhost:3000/file-name-example***
* To use **hq-links**, create a new .js file in /data/artists
* Find the correct artist folder, and determine if the release is a **single**, **ep**, or and **album**. 
* Create a file named after the release in the respective folder. 

* ***Please note that the file should be named in hypehenated format 'file-name-example'***

* Once the file is created, define **albumInfo**, this information will be pulled and populated automatically for the page
* (TIP) Use ***imgbb*** to host images and provide **coverHref**
* Below is an example of **albumInfo**.
```
export const albumInfo = {
  name: "Artist Name",
  release: {
    name: "Release Name",
    coverHref: "https://i.ibb.co/CJgv0Ht/cover.jpg",
    preorder: true,
    release_date: new Date("2023-03-18"),
  },
  dsps: [
    { name: "Apple Music", href: "", preorderHref: "" },
    { name: "Spotify", href: "", preorderHref: "" },
    { name: "SoundCloud", href: "", preorderHref: "" },
    { name: "YouTube", href: "", preorderHref: "" },
    { name: "Pandora", href: "", preorderHref: "" },
    { name: "iHeartRadio", href: "", preorderHref: "" },
    { name: "Tidal", href: "", preorderHref: "" },
  ],
};

```