import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { firstname, lastname } = props;

  return (
    <Text>
      Hola {firstname}
      {lastname}
    </Text>
  );
}
//Saludar.defaultProps = {
// firstname: "Daniel",
// lastname: " Ditta",
//};
Saludar.propTypesropTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string,
};
