import { useCallback, useEffect } from 'react';
import {
  useSharedValue,
  withRepeat,
  withTiming,
  useDerivedValue,
  Easing,
} from 'react-native-reanimated';

type Props = {
  position: { x: number; y: number };
  animationSize: number;
  duration: number;
  isReverse?: boolean;
};

export const useFloatingCircleItem = ({
  position,
  animationSize,
  duration,
  isReverse,
}: Props) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const memoizedWithRepeat = useCallback(
    () =>
      withRepeat(
        withTiming(animationSize, {
          duration,
          easing: isReverse
            ? Easing.out(Easing.inOut(Easing.ease))
            : Easing.inOut(Easing.ease),
        }),
        -1,
        true
      ),
    [animationSize, duration, isReverse]
  );

  useEffect(() => {
    // X軸のアニメーション
    translateX.value = memoizedWithRepeat();
    // Y軸のアニメーション
    translateY.value = memoizedWithRepeat();
  });

  const cx = useDerivedValue(() => translateX.value + position.x);
  const cy = useDerivedValue(() => translateY.value + position.y);

  return { cx, cy };
};
