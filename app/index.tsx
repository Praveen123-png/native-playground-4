// import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  // const router = useRouter();
  const [active, setActive] = useState("phone");
  const [mobile, setMobile] = useState("");

  return (
    <SafeAreaView className="justify-center flex-1">
      <View className="flex items-center justify-start p-5">
        <Text className="text-5xl font-semibold tracking-wider text-center text-gray-900">
          Discover new experiences
        </Text>

        <Text className="mt-4">Join our community of explorers</Text>

        {/* <TouchableOpacity>
          <Text className="px-6 py-3 mt-10 text-2xl text-white bg-blue-500 rounded-2xl">
            Click me
          </Text>
        </TouchableOpacity> */}

        <View className="flex-row w-full p-1 mt-10 bg-gray-200 rounded-full">
          <TouchableOpacity
            onPress={() => setActive("phone")}
            className={`flex-1 items-center py-5 rounded-full ${
              active === "phone" ? "bg-appGreen" : ""
            }`}
          >
            <Text className="text-lg font-semibold">Phone</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActive("email")}
            className={`flex-1 items-center py-5 rounded-full ${
              active === "email" ? "bg-appGreen" : ""
            }`}
          >
            <Text className="text-lg font-semibold">Email</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row gap-5 mt-5">
          <Text className="px-8 py-5 text-xl text-gray-600 bg-gray-200 rounded-full">
            +91
          </Text>
          <TextInput
            className="flex-1 px-8 py-5 text-xl bg-gray-200 rounded-full"
            placeholder="123-456-7890"
            keyboardType="numeric"
            value={mobile}
            // onChangeText={(e) => setMobile(e.target.value)} native does this internally
            onChangeText={setMobile}
          />
        </View>

        <Text className="mx-4 mt-10 text-xl text-center text-gray-600">
          We’ll send you a verification code to confirm your number.
        </Text>

        <TouchableOpacity className="w-full py-4 mt-10 rounded-2xl bg-appGreen">
          <Text className="text-xl font-medium text-center">Continue</Text>
        </TouchableOpacity>

        <View className="flex-row items-center justify-center my-6">
          <View className="flex-1 h-[1px] bg-gray-300 " />
          <Text className="mx-3 text-center text-gray-600">or</Text>
          <View className="flex-1 h-[1px] bg-gray-300 " />
        </View>

        <TouchableOpacity className="w-full py-4 border border-gray-600 border-solid rounded-full">
          <Text className="text-xl font-medium text-center">Continue with google</Text>
        </TouchableOpacity>

        {/* <Text
          onPress={() => router.push("/explore" as any)}
          className="mt-10 text-xl underline"
        >
          Explore page
        </Text> */}
      </View>
    </SafeAreaView>
  );
}
