import { Outlet } from "react-router-dom";
import Footer from "./default/Footer";
import Nab from "./default/Nab";

export default function Root() {
  return (
    <div>
      <Nab />
      <Outlet />
      <Footer />
    </div>
  );
}
