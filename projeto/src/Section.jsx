import PropTypes from "prop-types";
import Item from "./Item";
import ItemLink from "./Itemlink";
import Imagemaranha from '../../imagens/aranha.jpeg';
import Imagemferro from '../../imagens/ferro.jpeg';
import Imagemgalinha from '../../imagens/galinha.jpeg';
import Imagemtoy from '../../imagens/toy.jpeg';
import Imagemhomem from '../../imagens/homem.jpeg';

import logoface from '../../imagens/facebook.png';
import logoinsta from '../../imagens/instagram.jpeg';
import logotik from '../../imagens/tiktok.jpeg';
import logolink from '../../imagens/linkedin.png';
import logogit from '../../imagens/github.png';
import logotele from '../../imagens/telegram.png';
import logotwitter from '../../imagens/twitter.png';
import logowhats from '../../imagens/whatszapp.png';


export default function Section(props) {
  switch (props.tipo) {
    case "sobre":
      return (
        <>
          <section>
            <div>
              <h2>{props.titulo}</h2>
              <p>{props.subtitulo}</p>
            </div>
          </section>
        </>
      );
    case "filmes":
      return (
        <>
          <section>
            <div>
              <h2>{props.titulo}</h2>
              <p>{props.subtitulo}</p>
              <ul className="list">
                <Item imagem={Imagemaranha} titulo="Homem Aranha"/>
                <Item imagem={Imagemferro} titulo="Homem de Ferro"/>
                <Item imagem={Imagemgalinha} titulo="Fuga das Galinhas"/>
                <Item imagem={Imagemtoy} titulo="ToyStory" title="ToyStory"/>
                <Item imagem={Imagemhomem} titulo="Até o Ultimo Homem"/>
              </ul>
            </div>
          </section>
        </>
      );
    case "contatos":
      return (
        <>
          <section>
            <div>
              <h2>{props.titulo}</h2>
              <p>{props.subtitulo}</p>
              <ul className="list">
                <ItemLink imagem={logoface} titulo="Logo Facebook"></ItemLink>
                <ItemLink imagem={logoinsta} titulo="Logo Instagram"></ItemLink>
                <ItemLink imagem={logotik} titulo="Logo Tiktok"></ItemLink>
                <ItemLink imagem={logolink} titulo="Logo linKedin"></ItemLink>
                <ItemLink imagem={logogit} titulo="Logo GitHub"></ItemLink>
                <ItemLink imagem={logotele} titulo="Logo Telegram"></ItemLink>
                <ItemLink imagem={logotwitter} titulo="Logo Twitter"></ItemLink>
                <ItemLink imagem={logowhats} titulo="Logo WhatsZapp"></ItemLink>
              </ul>
            </div>
          </section>
        </>
      );
  }
}

Section.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  // Adicione PropTypes para outras props, se necessário
};
