import {FromPrice} from '../Styles';

function PriceFrom({getPriceFrom}){
    const handleInput = (e) => {
        getPriceFrom(e.target.value);
      };
    return (
        <FromPrice onChange={handleInput} placeholder="დან"></FromPrice>
    )
}

export default PriceFrom;