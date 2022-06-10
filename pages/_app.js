import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="font-Nunito">
      <Component {...pageProps} />
    </div>
  );
}
