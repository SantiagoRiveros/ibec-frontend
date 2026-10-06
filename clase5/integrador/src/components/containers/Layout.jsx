import PropTypes from "prop-types";
import { Footer, Navbar } from "../atoms";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
