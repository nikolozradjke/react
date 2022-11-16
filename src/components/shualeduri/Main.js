import {useState, useCallback} from 'react';
import axios from 'axios'
import Brand from './filters/Brand';
import Type from './filters/Type';
import PriceFrom from './filters/PriceFrom';
import PriceTo from './filters/PriceTo';
import Item from './Item';
import {Container, Filter, Label, PriceDash, SearchButton, Items} from './Styles';

function Main(){
    const [brand, getBrandId] = useState(null);
    const [type, getTypeId] = useState(0);
    const [priceFrom, getFromPrice] = useState(null);
    const [priceTo, getToPrice] = useState(null);
    const [items, getValue] = useState([]);

    const getBrand = brand => {
        getBrandId(brand);
    }

    const getType = type => {
        getTypeId(type);
    }

    const getPriceFrom = priceFrom => {
        getFromPrice(priceFrom);
    }

    const getPriceTo = priceTo => {
        getToPrice(priceTo);
    }

    const LoadItems = useCallback(()=> {
        try{
            async function getOneRow(){
                const response = await axios.get('https://api2.myauto.ge/ka/products', { params: { 
                    TypeID: type,
                    Mans:brand,
                    PriceFrom: priceFrom,
                    PriceTo: priceTo,
                    CurrencyID: 1
                }});
                getValue(response.data.data.items);
            }
            getOneRow();
        }catch(error){
            if (error.response.status < 200 || error.response.status >= 300) {
                console.log('Try again later');
            }
        }
    });

    return (
        <Container>
            <Filter>
                <Label>გარიგების ტიპი</Label>
                <Type getType={getType}/>
                <Label>მწარმოებელი</Label>
                <Brand getBrand={getBrand}/>
                <Label>ფასი</Label>
                <PriceFrom getPriceFrom={getPriceFrom}></PriceFrom>
                <PriceDash>-</PriceDash>
                <PriceTo getPriceTo={getPriceTo}></PriceTo>
                <SearchButton onClick={LoadItems}>მოძებნე</SearchButton>
            </Filter>
            <Items>
                {items && items.map((item, index) => (
                    <Item key={index} getItem={item}/>
                ))}
            </Items>
        </Container>
    )
}

export default Main;