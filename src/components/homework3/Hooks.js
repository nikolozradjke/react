import {useState, useCallback} from 'react';

function Hooks(){
    const [first, changeFirstAmount] = useState(0);
    const [second, changeSecondAmount] = useState(0);

    const incrementFirst = useCallback(()=> {
        changeFirstAmount(first + 1);
      },[first])

    const incrementSecond = useCallback(()=> {
        changeSecondAmount(second + 1);
      },[second])

    const MaxNum = (a, b) => {
        let max = a;
        if(b > a){
            max = b;
        }else if(b === a){
            max = undefined;
        }

        return max;
    }
    

    return (
        <div>
            <button onClick={incrementFirst}>Increment First</button>
            <p>First variable: {first}</p>
            <button onClick={incrementSecond}>Increment Second</button>
            <p>Second variable: {second}</p>
            <h1>Max number: {MaxNum(first, second)}</h1>
        </div>
    );
}

export default Hooks;