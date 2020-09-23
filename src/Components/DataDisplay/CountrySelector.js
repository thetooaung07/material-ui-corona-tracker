// import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import NativeSelect from "@material-ui/core/NativeSelect";
// import { fetchCountries } from "./ApiForData";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//     paddingRight: 20
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const CountrySelector = ({ handleCountrySelect }) => {
//   const classes = useStyles();
//   const [countryData, setCountryData] = useState([]);
//   useEffect(() => {
//     const fetchCountryApi = async () => {
//       setCountryData(await fetchCountries());
//     };
//     fetchCountryApi();
//   }, []);
//   // console.log(countryData);
//   return (
//     <div>
//       <FormControl className={classes.formControl} fullWidth>
//         <NativeSelect
//           onChange={(event) => handleCountrySelect(event.target.value)}
//         >
//           <option value="">Global</option>
//           {countryData &&
//             countryData.map((country) => (
//               <option value={country} key={country}>
//                 {country}
//               </option>
//             ))}
//         </NativeSelect>
//         <FormHelperText>Select a Country</FormHelperText>
//       </FormControl>
//     </div>
//   );
// };

// export default CountrySelector;
