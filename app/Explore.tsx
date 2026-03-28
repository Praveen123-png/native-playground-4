import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex">
      <View className="flex items-center justify-start flex-1 p-5">
        <Text className="text-2xl text-center text-sky-500">
          This is the explore page
        </Text>

        <Text onPress={() => router.back()} className="mt-10">
          Go back corona
        </Text>
      </View>
    </SafeAreaView>
  );
}
