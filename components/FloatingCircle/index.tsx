import { Canvas } from '@shopify/react-native-skia';
import { type FC, memo } from 'react';
import { FloatingCircleItem } from '../FloatingCircleItem';

type CircleItem = {
  id: number;
  position: { x: number; y: number };
  r: number;
  color: string;
  duration: number;
  animationSize: number;
};

type Props = {
  circleItems: Readonly<CircleItem[]>;
};

export const FloatingCircle: FC<Props> = memo(({ circleItems }) => {
  return (
    <Canvas
      style={{
        flex: 1,
        backgroundColor: 'blue',
      }}
    >
      {circleItems.map(
        ({ id, position, r, color, animationSize, duration }) => (
          <FloatingCircleItem
            key={id}
            position={position}
            r={r}
            color={color}
            animationSize={animationSize}
            duration={duration}
          />
        )
      )}
    </Canvas>
  );
});
