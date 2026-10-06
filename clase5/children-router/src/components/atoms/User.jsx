import PropTypes from "prop-types";

export default function Usuario({ nombre, edad }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{edad}</p>
    </div>
  );
}

Usuario.propTypes = {
  nombre: PropTypes.string,
  edad: PropTypes.number.isRequired,
};
