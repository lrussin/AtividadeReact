import PropTypes from "prop-types";

export default function ItemLink(props) {
    return(
        <>
            <li><a href="#" target="_blank"><img src={props.imagem} alt={props.titulo} title={props.titulo} /></a></li>
        </>
    )
}
ItemLink.propTypes = {
    titulo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
  };