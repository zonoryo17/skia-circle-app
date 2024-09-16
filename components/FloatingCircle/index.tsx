import { Canvas, Circle } from '@shopify/react-native-skia';
import React, { useEffect } from 'react';
import {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export const FloatingCircle = () => {
  const r = 150;
  const canvasSize = r * 2;
  const x = r;
  const y = r;

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    // X軸のアニメーション
    translateX.value = withRepeat(
      withTiming(20, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );

    // Y軸のアニメーション
    translateY.value = withRepeat(
      withTiming(20, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, [translateX, translateY]);
  return (
    <Canvas
      style={{
        width: canvasSize,
        height: canvasSize,
        backgroundColor: 'blue',
      }}
    >
      <Circle cx={x} cy={y} r={r} color="yellow" />
    </Canvas>
  );
};
