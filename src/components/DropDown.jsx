
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  width: 300px;
  cursor:pointer;

`;

const Option = styled.option`
  padding: 5px;
  cursor:pointer;
`;

const Lebel = styled.p``;


const DropDown = (props)=>{
    const {selectedValue,data,onChangeFunc,lable,isDisabled} = props;
    return (
      <>
        <Lebel>{lable}</Lebel>
        <Select
          name="cars"
          id="cars"
          value={selectedValue}
          onChange={onChangeFunc}
          disabled ={isDisabled}
        >
          <Option value="">Select Country -----</Option>
          {data?.map((country, ind) => (
            <Option key={ind} value={country?.isoCode}>
              {country?.name}
            </Option>
          ))}
        </Select>
      </>
    );
}

export default DropDown;