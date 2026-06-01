import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col max-w-5xl m-auto">
        <Navbar />
        <main className="grow w-full p-4 mt-15">{children}</main>
      </div>
      <Footer />
    </>
  );
}
