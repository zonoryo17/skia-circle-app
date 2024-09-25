import { FloatingCircle } from '@/components/FloatingCircle';
import { SafeAreaView, Text } from 'react-native';

const FLOATING_CIRCLE_ITEMS = [
  {
    id: 1,
    position: { x: 100, y: 100 },
    r: 70,
    color: 'red',
    duration: 2000,
    animationSize: -25,
  },
  {
    id: 2,
    position: { x: 700, y: 300 },
    r: 50,
    color: 'green',
    duration: 3000,
    animationSize: 35,
  },
  {
    id: 3,
    position: { x: 350, y: 250 },
    r: 40,
    color: 'pink',
    duration: 2500,
    animationSize: -30,
  },
  {
    id: 4,
    position: { x: 500, y: 50 },
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
      <FloatingCircle circleItems={FLOATING_CIRCLE_ITEMS} />
    </SafeAreaView>
  );
}
