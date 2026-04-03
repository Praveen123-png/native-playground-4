import Button from "@/components/atom/Button";
import CustomText from "@/components/atom/CustomText";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  const [active, setActive] = useState("phone");
  const [mobile, setMobile] = useState("");

  return (
    <SafeAreaView className="justify-center flex-1">
      <View className="flex items-center justify-start p-5">
        {/* <Text className="text-5xl font-semibold tracking-wider text-center text-gray-900">
          Discover new experiences
        </Text> */}

        <CustomText variant="h1" className="text-center">
          Discover new experiences
        </CustomText>

        <CustomText className="mt-4">Join our community of explorers</CustomText>

        <View className="flex-row w-full p-1 mt-10 bg-gray-200 rounded-full">
          <TouchableOpacity
            onPress={() => setActive("phone")}
            className={`flex-1 items-center py-5 rounded-full ${
              active === "phone" ? "bg-appGreen" : ""
            }`}
          >
            <CustomText variant="button">Phone</CustomText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActive("email")}
            className={`flex-1 items-center py-5 rounded-full ${
              active === "email" ? "bg-appGreen" : ""
            }`}
          >
            <CustomText variant="button">Email</CustomText>
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
            onChangeText={setMobile}
          />
        </View>

        <Text className="mx-4 mt-10 text-xl text-center text-gray-600">
          We’ll send you a verification code to confirm your number.
        </Text>

        {/* <TouchableOpacity className="w-full py-4 mt-10 rounded-2xl bg-appGreen">
          <Text className="text-xl font-medium text-center">Continue</Text>
        </TouchableOpacity> */}

        <Button title="Continue" className="mt-10" />

        <View className="flex-row items-center justify-center my-6">
          <View className="flex-1 h-[1px] bg-gray-300 " />
          <Text className="mx-3 text-center text-gray-600">or</Text>
          <View className="flex-1 h-[1px] bg-gray-300 " />
        </View>

        <TouchableOpacity className="w-full py-4 border border-gray-600 border-solid rounded-full">
          <Text className="text-xl font-medium text-center">Continue with google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
