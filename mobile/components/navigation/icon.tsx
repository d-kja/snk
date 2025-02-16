import type { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { memo } from "react";
import { View } from "tamagui";
import { NavigationButton } from "./styles";

interface NavigationIconProps
	extends Omit<
		BottomTabBarButtonProps,
		"onHoverIn" | "onHoverOut" | "onBlur" | "onFocus" | "disabled"
	> {
	focused?: boolean;
}

const NavigationIconRaw = ({ children, ...rest }: NavigationIconProps) => {
	return (
		<NavigationButton {...rest}>
			<View
				justifyContent="flex-start"
				alignItems="center"
				marginHorizontal="auto"
			>
				{children}
			</View>
		</NavigationButton>
	);
};

export const NavigationIcon = memo<NavigationIconProps>(NavigationIconRaw);
