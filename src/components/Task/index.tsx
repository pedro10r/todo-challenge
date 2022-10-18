import { Dispatch, SetStateAction, useState } from "react";
import { Pressable } from "react-native";
import { useTheme } from "styled-components";

import { Container, Description, Icon, Items, DescriptionCompleted } from "./styles";

interface Props {
  description: string;
  onRemove: () => void;
  setCountCompleted: Dispatch<SetStateAction<number>>;
};

export function Task({ description, onRemove, setCountCompleted }: Props) {
  const [ onSelect, setOnSelect ] = useState(false);

  const theme = useTheme();
  
  const onSelectTask = (select: boolean) => {
    if (select) {
      setOnSelect(true);
      setCountCompleted(prevState => prevState + 1);
    } else {
      setOnSelect(false);
      setCountCompleted(prevState => prevState - 1);
    }
  };

  return (
    <Container>
      <Items>
        <Pressable
          onPress={() => onSelectTask(!onSelect)}
        >
          <Icon
            name={onSelect ? "check-circle" : "circle"}
            color={onSelect ? theme.purpleDark : theme.blue}
          />
        </Pressable>

        {onSelect ?
          <DescriptionCompleted>{description}</DescriptionCompleted> : <Description>{description}</Description>
        }

        <Pressable
          onPress={onRemove}
          style={({ pressed }) => [
            pressed && {
              backgroundColor: theme["gray-400"],
              borderRadius: 4
            }
          ]}
        >
          {({ pressed }) => (
            <Icon
              name="trash"
              color={pressed ? theme.danger : theme["gray-300"]}
            />
          )}
        </Pressable>
      </Items>
    </Container>
  );
}