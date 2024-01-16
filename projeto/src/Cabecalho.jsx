import './App.css'

import AvatarImage from '../../imagens/avatar.jpeg';

export default function Cabecalho() {
    return (
        <header>
            <div>
                <img src={AvatarImage}/>
            </div>
        </header>
    )
}