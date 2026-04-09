// atoms/TextInput.tsx
import { KeyboardTypeOptions, TextInput } from "react-native";

type Size = "sm" | "md" | "lg" | "xl";
type Rounded = "none" | "sm" | "md" | "full";

const sizeVariants: Record<Size, string> = {
  //   sm: "text-sm px-3 py-1.5",
  //   md: "text-base px-4 py-2",
  //   lg: "text-lg px-5 py-3",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const roundedVariants: Record<Rounded, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-lg",
  full: "rounded-full",
};

interface TextInputProps {
  size?: Size;
  rounded?: Rounded;
  value?: string;
  className?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

export default function CustomInput({
  size = "md",
  rounded = "md",
  className = "",
  ...rest
}: TextInputProps) {
  return (
    <TextInput
      className={`
        px-8 py-5 text-black bg-gray-200
        ${sizeVariants[size]}
        ${roundedVariants[rounded]}
        ${className}
      `}
      {...rest}
    />
  );
}
