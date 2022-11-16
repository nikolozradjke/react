import styled from 'styled-components';

export const Container = styled.div`
            margin: 250px 400px;
            display: flex;
        `;

export const Filter = styled.div`
            margin-left: 15px;
            width: 250px;
            max-height: 300px;
            border:1px solid #c9c9c9;
            display: inline-block;
        `;

export const Select = styled.select`
            width: 80%;
            height: 35px;
            background: white;
            color: gray;
            padding-left: 5px;
            font-size: 14px;
            border: 1px solid #8e9299;
            border-radius: 5px;
            margin: 15px;
            cursor: pointer;
            transition: 0.4;
            &:hover {
                border: 1px solid black;
            }
        `;

export const Option = styled.option`
            color: black;
            background: white;
            display: flex;
            white-space: pre;
            min-height: 20px;
            padding: 0px 2px 1px;
        `;
 
export const Label = styled.label`
    margin-left: 15px;
    font-size: 12px;
    display: block;
` 

export const FromPrice = styled.input`
    display: inline-block;
    width: 35%;
    margin: 15px 15px;
    min-height: 30px;
`

export const ToPrice = styled.input`
    display: inline-block;
    width: 35%;
    margin-left: 0px;
    min-height: 30px;
`

export const PriceDash = styled.p`
    display: inline-block;
    margin-left: -15px;
`

export const SearchButton = styled.button`
    background-color: #fd4100;
    color: white;
    border-radius: 2.5px;
    border-color: #fd4100;
    font-size: 14px;
    font-weight: bold;
    margin-left: 15px;
    margin-bottom: 15px;
    padding: 10px 15px;
    transition: 0.2;
    &:hover{
        background-color: #9f3916;
        border-color: #9f3916;
    }
`

export const Items = styled.div`
    margin-left: 20px;
`

export const Item = styled.div`
    margin: 20px 25px;
    display: flex;
`

export const Image = styled.img`
    border-radius: 10px;
    width: 250px;
    height: 200px;
    object-fit: cover;
    object-position: center center;
    display: inline-block;
`

export const Year = styled.p`
    font-size: 13px;
    color: gray;
    margin-left: 20px;
`

export const Price = styled.p`
    margin-left: 200px;
        
`

export const UsdCurrency = styled.button`
    background-color: #e8e8e8;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    border-color: #e8e8e8;
    margin-top: 10px;
`

export const GelCurrency = styled.button`
    background-color: white;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    border-color: #e8e8e8;
    margin-left: 20px;
    margin-top: 10px;
`