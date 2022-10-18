import { IconButton } from "../IconButton";

import { Container, Description, Items } from "./styles";

interface Props {
  description: string;
  onSelect?: () => void;
  onRemove: () => void;
};

export function Task({ description, onSelect, onRemove }: Props) {
  return (
    <Container>
      <Items>
        <IconButton name="circle" onPress={() => onSelect} />

        <Description>{description}</Description>

        <IconButton name="trash" onPress={onRemove} />
      </Items>
    </Container>
  );
}