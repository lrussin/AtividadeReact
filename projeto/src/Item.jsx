import PropTypes from "prop-types";

export default function Item(props) {
    return(
        <>
            <li><img src={props.imagem} alt={props.titulo} title={props.titulo} /></li>
        </>
    )
}
Item.propTypes = {
    titulo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
  };