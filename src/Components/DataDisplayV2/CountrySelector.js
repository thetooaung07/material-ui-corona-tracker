import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Axios from "axios";

import { MenuItem, Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 120,
    paddingRight: 20,
  },
  // selectRoot: {
  //   padding: 0,
  //   margin: 0,
  // },
}));

const CountrySelector = ({ setCountrySelected, setMapCenter }) => {
  const classes = useStyles();

  const [selectedCountry, SetSelectedCountry] = React.useState("global");
  const [countryList, setCountryList] = useState([]);

  const ApiInitialCountriesList = async () => {
    const url = `https://disease.sh/v3/covid-19/countries`;
    const apiData = await Axios.get(url);
    const countriesList = apiData.data.map((country) => ({
      name: country.country,
      value: country.countryInfo.iso2,
    }));
    setCountryList(countriesList);
  };

  useEffect(() => {
    ApiInitialCountriesList();
  }, []);

  const handleChange = async (event) => {
    const countryCode = event.target.value;
    SetSelectedCountry(countryCode);
    setCountrySelected(countryCode);
    const variableUrl =
      countryCode === "global"
        ? `https://disease.sh/v3/covid-19/countries`
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    const apiData = await Axios.get(variableUrl);
    // console.log(apiData.data);
    setMapCenter([apiData.data.countryInfo.lat, apiData.data.countryInfo.long]);
  };

  return (
    <div>
      <FormControl className={classes.formControl} fullWidth>
        <Select
          value={selectedCountry}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          // inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="global">Global</MenuItem>
          {countryList.map((country, index) => (
            <MenuItem key={index} value={country.value}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText style={{ marginBottom: "2px" }}>
          Select a Country...
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default CountrySelector;
