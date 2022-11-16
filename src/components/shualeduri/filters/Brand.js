import {Select, Option} from '../Styles';

function Brand({getBrand}){
    const handleSelect = (e) => {
        getBrand(e.target.value);
      };
    return (
        <Select onChange={handleSelect}>
            <Option>აირჩიეთ ბრენდი</Option>
            <Option value="473"> ARCFOX</Option>
            <Option value="70"> ACURA</Option>
            <Option value="1"> ALFA ROMEO</Option>
            <Option value="441"> AMC</Option>
            <Option value="565"> ARCTIC CAR</Option>
            <Option value="76"> ASTON MARTIN</Option>
            <Option value="2"> AUDI</Option>
        </Select>
    )
}

export default Brand;