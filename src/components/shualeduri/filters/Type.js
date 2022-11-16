import {Select, Option} from '../Styles';

function Type({getType}){
    const handleSelect = (e) => {
        getType(e.target.value);
      };
    return (
        <Select onChange={handleSelect}>
            <Option>აირჩიეთ გარიგების ტიპი</Option>
            <Option value="0"> იყიდება</Option>
            <Option value="1"> ქირავდება</Option>
        </Select>
    )
}

export default Type;