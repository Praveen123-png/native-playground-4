import { useRouter } from "expo-router";
import { ActivityIndicator, Text, TouchableHighlight, View } from "react-native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex">
      <View className="flex items-center justify-start p-5">
        <Text className="inline text-4xl font-bold text-red-500">
          Hello Praveen Kumar V P
        </Text>

        <TouchableHighlight>
          <Text className="px-6 py-3 mt-10 text-2xl text-white bg-blue-500 rounded-2xl">
            Click me
          </Text>
        </TouchableHighlight>

        <ActivityIndicator className="mt-10 text-green-500" size="large" />

        <Text onPress={() => router.push("/Explore")} className="mt-10 text-xl underline">
          Explore page
        </Text>
      </View>
    </SafeAreaView>
  );
}
