import {ToPrice} from '../Styles';

function PriceTo({getPriceTo}){
    const handleInput = (e) => {
        getPriceTo(e.target.value);
      };
    return (
        <ToPrice onChange={handleInput} placeholder="მდე"></ToPrice>
    )
}

export default PriceTo;