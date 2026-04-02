import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  const router = useRouter();

  return (
    <SafeAreaView className="items-center justify-center flex-1">
      <View className="items-center justify-start flex-1 p-5">
        <Text className="text-2xl text-center text-sky-500">
          This is the explore page after the file structure of next.js
        </Text>

        <TouchableOpacity>
          <Text className="px-8 py-3 mt-10 text-2xl text-white bg-green-600 rounded-2xl">
            Hello world
          </Text>
        </TouchableOpacity>

        <Text onPress={() => router.back()} className="mt-10">
          Go back corona
        </Text>
      </View>
    </SafeAreaView>
  );
}
