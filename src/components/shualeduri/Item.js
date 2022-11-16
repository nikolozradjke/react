import {Item as Div, Image, Year, Price, GelCurrency, UsdCurrency} from './Styles';
import {useState} from 'react';

function Item({getItem}){
    const [current, change] = useState(0);
    return (
        <Div>
             <Image src={"https://static.my.ge/myauto/photos/" + getItem.photo + "/large/" + getItem.car_id + "_1.jpg"}/>
             <Year>{getItem.prod_year}წ</Year>
             <Price>{current ? getItem.price_value + " ₾" : getItem.price_usd + " $"}</Price>
             <GelCurrency onClick={() => change(1)}>₾</GelCurrency>
             <UsdCurrency onClick={() => change(0)}>$</UsdCurrency>
        </Div>
    )
}

export default Item;