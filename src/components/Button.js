import "../App.css";
import { Button } from "react-native";

function Pressed() {
  console.log("pressed")
}

export default function Btn(props) {
  return (
    <Button
      onPress={props.action || Pressed()}
      title={props.title || " "}
      color={props.color || "#AAAAAAFF"}
    />
  )
}