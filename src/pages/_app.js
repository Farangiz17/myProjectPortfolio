import MasterLayout from "@/layouts/masterLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MasterLayout>
      <Component {...pageProps} />;
    </MasterLayout>
  );
}
