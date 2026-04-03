import { Text, TextProps } from "react-native";

type Variant = "h1" | "h2" | "body" | "caption" | "button";
type Colors = "primary" | "secondary";

export default function CustomText({
  children,
  variant = "body",
  color = "primary",
  className = "",
  ...props
}: TextProps & {
  variant?: Variant;
  color?: Colors;
  className?: string;
}) {
  const variantStyles = {
    h1: "text-5xl font-semibold text-gray-900",
    h2: "text-2xl font-semibold text-gray-800",
    body: "text-base text-gray-600",
    caption: "text-sm text-gray-500",
    button: "text-xl font-medium text-center",
  };

  const colorStyles = {
    primary: "text-gray-900",
    secondary: "text-gray-600",
  };

  return (
    <Text
      className={`${variantStyles[variant]} ${colorStyles[color]} ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
}
