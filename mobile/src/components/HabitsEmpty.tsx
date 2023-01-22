import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function HabitsEmpty() {

  const { navigate } = useNavigation()

  return (
    <Text className="text-zinc-400 text-base">
      Você ainda não está monitorando nenhum hábito para este dia da semana. {' '}
      <Text 
      className="text-violet-400 text-base underline"
      onPress={() => navigate('new')}
      >
        Comece cadastrando um.
      </Text>
    </Text>
  )
}