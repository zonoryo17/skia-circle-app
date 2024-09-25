import { Circle } from '@shopify/react-native-skia';
import { useFloatingCircleItem } from './useFloatingCircleItem';

type Props = {
  position: { x: number; y: number };
  r: number;
  color: string;
  animationSize: number;
  duration: number;
};

export const FloatingCircleItem: React.FC<Props> = ({
  position,
  r,
  color,
  animationSize,
  duration,
}) => {
  const { cx, cy } = useFloatingCircleItem({
    position,
    animationSize,
    duration,
  });
  return <Circle cx={cx} cy={cy} r={r} color={color} />;
};
