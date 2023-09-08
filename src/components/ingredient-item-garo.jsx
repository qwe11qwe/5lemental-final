import { getPbImageURL } from '../utils/getPbImageURL';

export default function IngredientItemGaro({item}){

    console.log(getPbImageURL(item, 'photo'));

    return(
        <li key={item.id} >
            <figure>
                <img 
                src={getPbImageURL(item, 'photo')} 
                className=''
                alt="" />
                {/* <span>{item.name}</span> */}
            </figure>
        </li>
    )
}
