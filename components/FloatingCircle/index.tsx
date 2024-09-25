import { Canvas } from '@shopify/react-native-skia';

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

export const FloatingCircle: React.FC<Props> = ({ children }) => {
  return (
    <Canvas
      style={{
        flex: 1,
        backgroundColor: 'blue',
      }}
    >
      {children}
    </Canvas>
  );
};
