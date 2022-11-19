import {useState, useCallback} from 'react';
import axios from 'axios'
import Brand from './filters/Brand';
import Type from './filters/Type';
import PriceFrom from './filters/PriceFrom';
import PriceTo from './filters/PriceTo';
import Item from './Item';
import {Container, Filter, Label, PriceDash, SearchButton, Items} from './Styles';

function Main(){
    const [sendableParams, setSendableParams] = useState({
        TypeID: 0,
        Mans: null,
        PriceFrom: null,
        PriceTo: null,
        CurrencyID: 1
    });
    const [items, getValue] = useState([]);
    const [requestable, ToggleRequestable] = useState(false)

    const getBrand = brand => {
        setSendableParams(prevState => ({
            ...prevState,
            Mans:brand
        }));
        ToggleRequestable(true)
    }

    const getType = type => {
        setSendableParams(prevState => ({
            ...prevState,
            TypeID: type
        }));
        ToggleRequestable(true)
    }

    const getPriceFrom = price => {
        setSendableParams(prevState => ({
            ...prevState,
            PriceFrom: price
        }));
        ToggleRequestable(true)
    }

    const getPriceTo = toPrice => {
        setSendableParams(prevState => ({
            ...prevState,
            PriceTo: toPrice
        }));
        ToggleRequestable(true)
    }

    const LoadItems = useCallback(()=> {
        try{
            async function getResponse(){
                const response = await axios.get('https://api2.myauto.ge/ka/products', { params: sendableParams});
                getValue(response.data.data.items);
            }
            getResponse();
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
                <SearchButton disabled={!requestable} onClick={LoadItems}>მოძებნე</SearchButton>
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