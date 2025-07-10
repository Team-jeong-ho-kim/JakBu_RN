import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

export const CheckIcon = () => {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path d="M13.125 14H0.875V0H13.125V14Z" stroke="#E5E7EB" />
      <G clip-path="url(#clip0_549_153)">
        <Path
          d="M12.8661 2.88135C13.2079 3.22314 13.2079 3.77822 12.8661 4.12002L5.86611 11.12C5.52432 11.4618 4.96924 11.4618 4.62744 11.12L1.12744 7.62002C0.785645 7.27822 0.785645 6.72314 1.12744 6.38135C1.46924 6.03955 2.02432 6.03955 2.36611 6.38135L5.24814 9.26064L11.6302 2.88135C11.972 2.53955 12.5271 2.53955 12.8688 2.88135H12.8661Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_549_153">
          <Path d="M0.875 0H13.125V14H0.875V0Z" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
