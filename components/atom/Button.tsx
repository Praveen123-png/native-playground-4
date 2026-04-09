import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import CustomText from "../atom/CustomText";

type Variant = "primary" | "outline" | "disabled";

export default function Button({
  title,
  variant = "primary",
  className = "",
  ...props
}: TouchableOpacityProps & {
  title: string;
  variant?: Variant;
  className?: string;
}) {
  const buttonStyles = {
    primary: "bg-appGreen",
    outline: "border border-gray-600",
    disabled: "bg-gray-300",
  };

  const textStyles = {
    primary: "text-black",
    outline: "text-gray-900",
    disabled: "text-gray-500",
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      // onPress={onPressProps}
      disabled={variant === "disabled"}
      className={` py-4 rounded-xl ${buttonStyles[variant]} ${className}`}
      {...props}
    >
      <CustomText variant="button" className={`${textStyles[variant]}`}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
}
