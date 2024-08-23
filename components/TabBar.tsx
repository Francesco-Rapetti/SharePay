import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme } from '@/components/useColorScheme';
import TabBarButton from '@/components/TabBarButton';

export default function TabBar({ state, descriptors, navigation, ...props }: BottomTabBarProps) {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const icon = {
    index: (props: any) => <MaterialCommunityIcons name={ state.index === 0 ? 'account-group' : 'account-group-outline'} {...props} />,
    settings: (props: any) => <MaterialCommunityIcons name={ state.index === 1 ? 'cog' : 'cog-outline'} {...props} />,
  }

  return (
    <View style={[
        styles.tabbar, 
        { flexDirection: 'row' },
        { backgroundColor: theme[colorScheme ?? 'light'].surfaceContainerHigh },
        { shadowColor: theme[colorScheme ?? 'light'].shadow },
    ]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
            <TabBarButton 
                key={route.name}
                onPress={onPress}
                onLongPress={onLongPress}
                isFocused={isFocused}
                routeName={route.name}
                label={label.toString()}
                icon={icon}
            />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 25,
        borderCurve: 'continuous',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1,
        paddingBottom: 15,
        paddingTop: 15,
        borderTopWidth: 0,
    },
})