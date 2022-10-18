import { TouchableOpacity } from "react-native";
import { Icon } from "./styles";

interface Props {
  name: string;
  onPress: () => void;
}

export function IconButton({ name, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={name} />
    </TouchableOpacity>
  );
}