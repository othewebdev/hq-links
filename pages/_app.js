import "@/styles/globals.css";
import { MyContext } from "@/utils/state";

export default function App({ Component, pageProps }) {
  return (
    <MyContext>
      <Component {...pageProps} />
    </MyContext>
  );
}
