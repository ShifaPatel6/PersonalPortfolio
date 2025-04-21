// Layout.js
import Navbar from "../components/Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <section>{children}</section>
    </div>
  );
};
export default Layout;
