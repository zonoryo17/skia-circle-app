import { Circle } from '@shopify/react-native-skia';
import { useFloatingCircleItem } from './useFloatingCircleItem';

type Props = {
  x: number;
  y: number;
  r: number;
  color: string;
  animationSize: number;
  duration: number;
};

export const FloatingCircleItem: React.FC<Props> = ({
  x,
  y,
  r,
  color,
  animationSize,
  duration,
}) => {
  const { cx, cy } = useFloatingCircleItem({
    x,
    y,
    animationSize,
    duration,
  });
  return <Circle cx={cx} cy={cy} r={r} color={color} />;
};
