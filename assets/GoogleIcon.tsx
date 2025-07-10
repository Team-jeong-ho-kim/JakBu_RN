import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export const GoogleIcon = () => {
  return (
    <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
      <G clip-path="url(#clip0_545_1396)">
        <G clip-path="url(#clip1_545_1396)">
          <Path
            d="M15.25 8.68125C15.25 13.1031 12.2219 16.25 7.75 16.25C3.4625 16.25 0 12.7875 0 8.5C0 4.2125 3.4625 0.75 7.75 0.75C9.8375 0.75 11.5938 1.51562 12.9469 2.77813L10.8375 4.80625C8.07812 2.14375 2.94688 4.14375 2.94688 8.5C2.94688 11.2031 5.10625 13.3938 7.75 13.3938C10.8188 13.3938 11.9688 11.1938 12.15 10.0531H7.75V7.3875H15.1281C15.2 7.78437 15.25 8.16562 15.25 8.68125Z"
            fill="#525252"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_545_1396">
          <Rect
            width="15.25"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </ClipPath>
        <ClipPath id="clip1_545_1396">
          <Path d="M0 0.5H15.25V16.5H0V0.5Z" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
