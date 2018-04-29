import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = props => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#007aff",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
};
export default Button;
