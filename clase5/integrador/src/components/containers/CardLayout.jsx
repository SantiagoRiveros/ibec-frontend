import PropTypes from "prop-types";

export default function CardLayout({ children }) {
  return <article className="card">{children}</article>;
}

CardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
