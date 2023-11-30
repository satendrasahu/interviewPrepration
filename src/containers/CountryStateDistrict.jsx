import React, { useEffect, useState } from "react";
import { Country, State, City }  from 'country-state-city';
import DropDown from "../components/DropDown";
import { styled } from "styled-components";

const Container = styled.div`
  margin: 0px 100px;
`;

function CountryStateDistrict() {
  const [countryIsoCode, setCountryIsoCode] = useState("");
  const [stateList,setStateList] = useState([]);
  const [stateId, setStateId] = useState("");

  const [cityList,setCityList] = useState([])
  const [cityId, setCityId] = useState("");

  const selectCountry = (e) => {
    setCountryIsoCode(e.target.value);
  };
  const selectState = (e) => {
    setStateId(e.target.value);
  };

  const selectCity = (e) => {
    setCityId(e.target.value);
  };
 
   const selectAllState = (countryIsoCode) =>{
    const allState = State?.getStatesOfCountry(countryIsoCode)
    setStateList(allState)
  }


  const selectAllCity = (countryIsoCode,stateId) =>{
    const allCity = City?.getCitiesOfState(countryIsoCode, stateId);
    setCityList(allCity)
  }



  
useEffect(() => {
    selectAllState(countryIsoCode);
}, [countryIsoCode]);

useEffect(() => {
    selectAllCity(countryIsoCode,stateId);
}, [countryIsoCode,stateId]);

  return (
    <Container>
      <DropDown
        selectedValue={countryIsoCode}
        data={Country.getAllCountries()}
        onChangeFunc={selectCountry}
        lable="Country"
      />

      <DropDown
        selectedValue={stateId}
        data={stateList}
        onChangeFunc={selectState}
        lable="State"
        isDisabled={stateList?.length === 0}
      />

      <DropDown
        selectedValue={cityId}
        data={cityList}
        onChangeFunc={selectCity}
        lable="City"
        isDisabled={cityList?.length === 0}
      />
    </Container>
  );
}

export default CountryStateDistrict;
