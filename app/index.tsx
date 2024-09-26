import { FloatingCircle } from '@/components/FloatingCircle';
import { FloatingCircleItem } from '@/components/FloatingCircle/FloatingCircleItem';
import { SafeAreaView, Text } from 'react-native';

const FLOATING_CIRCLE_ITEMS = [
  {
    x: 100,
    y: 100,
    r: 70,
    color: 'red',
    duration: 2000,
    animationSize: -25,
  },
  {
    x: 700,
    y: 300,
    r: 50,
    color: 'green',
    duration: 3000,
    animationSize: 35,
  },
  {
    x: 350,
    y: 250,
    r: 40,
    color: 'pink',
    duration: 2500,
    animationSize: -30,
  },
  {
    x: 500,
    y: 50,
    r: 60,
    color: 'yellow',
    duration: 3500,
    animationSize: 40,
  },
] as const;

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Floating Circle App</Text>
      <FloatingCircle>
        {FLOATING_CIRCLE_ITEMS.map(
          ({ x, y, r, color, animationSize, duration }) => (
            <FloatingCircleItem
              key={x + y}
              x={x}
              y={y}
              r={r}
              color={color}
              duration={duration}
              animationSize={animationSize}
            />
          )
        )}
      </FloatingCircle>
    </SafeAreaView>
  );
}
