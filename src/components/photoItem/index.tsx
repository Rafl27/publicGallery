import * as Component from './styles'
import {BsTrash} from 'react-icons/bs'
type Props = {
    url: string,
    name: string
}

export const PhotoItem = ({url, name} : Props) => {

    

    return(
        <Component.Container>
        <img src={url} alt={name} />
        <p>{name}</p>
        <button><BsTrash /></button>
        </Component.Container>
    )
}