import { useState } from "react";
import { Alert, FlatList } from "react-native";
import { useTheme } from "styled-components";

import {
  Body,
  Container,
  Header,
  Form,
  Input,
  Button,
  Icon,
  MarkArea,
  CounterAction,
  Created,
  Completed,
  Divider,
  Number,
  NumberArea,
  EmptyList,
  EmptyListDescriptionText,
  EmptyListDescriptionTitleText,
} from "./styles";

import { Task } from "../../components/Task";

import LogoSvg from '../../assets/logo.svg';
import ClipboardSvg from '../../assets/clipboard.svg';

export function Home(){
  const [ task, setTask ] = useState<string[]>([]);
  const [ taskDescription, setTaskDescription ] = useState('');
  const [ completedCount, setCompletedCount ] = useState<number>(0);

  const theme = useTheme();

  function handleAddTask() {
    setTask(prevState => [...prevState, taskDescription]);
    setTaskDescription('');
  }

  function handleRemoveTask(descritption: string) {
    return Alert.alert('Remover', `Deseja realmente remover essa tarefa?`, [
      {
        text: 'Sim',
        onPress: () => setTask(prevState => prevState.filter(task => task !== descritption))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <Container>
      <Header>
        <LogoSvg />
      </Header>

      <Body>
        <Form>
          <Input
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme["gray-300"]}
            onChangeText={setTaskDescription}
            value={taskDescription}
          />
          <Button
            disabled={taskDescription === ''}
            onPress={handleAddTask}
          >
            <Icon name="plus-circle" />
          </Button>
        </Form>

        <MarkArea>
          <CounterAction>
            <Created>Criadas</Created>

            <NumberArea>
              <Number>{task.length}</Number>
            </NumberArea>
          </CounterAction>

          <CounterAction>
            <Completed>Concluídas</Completed>

            <NumberArea>
              <Number>{completedCount}</Number>
            </NumberArea>
          </CounterAction>
        </MarkArea>

        <Divider />

        <FlatList
          data={task}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Task
              key={item}
              description={item}
              onRemove={() => handleRemoveTask(item)}
              setCountCompleted={setCompletedCount}
            />
          )}
          ListEmptyComponent={() => (
            <EmptyList>
              <ClipboardSvg />

              <EmptyListDescriptionTitleText>
                Você ainda não tem tarefas cadastradas
              </EmptyListDescriptionTitleText>
              <EmptyListDescriptionText>
                Crie tarefas e organize seus itens a fazer
              </EmptyListDescriptionText>
            </EmptyList>
          )}
        />
      </Body>
    </Container>
  );
}