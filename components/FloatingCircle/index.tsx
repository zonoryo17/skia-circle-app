import { Canvas } from '@shopify/react-native-skia';
import { FloatingCircleItem } from './FloatingCircleItem';

type Props = {
  items: React.ComponentProps<typeof FloatingCircleItem>[];
};

export const FloatingCircle: React.FC<Props> = ({ items }) => {
  return (
    <Canvas
      style={{
        flex: 1,
        backgroundColor: 'blue',
      }}
    >
      {items.map(({ x, y, r, color, animationSize, duration }) => (
        <FloatingCircleItem
          key={x + y}
          x={x}
          y={y}
          r={r}
          color={color}
          duration={duration}
          animationSize={animationSize}
        />
      ))}
    </Canvas>
  );
};
