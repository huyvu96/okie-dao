import { Space } from 'antd';
import React from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { ReactComponent as Sun } from 'assets/svgs/sun.svg';
import { ReactComponent as Moon } from 'assets/svgs/moon.svg';
import Text from 'antd/es/typography/Text';

const ThemeSwitcher = () => {
  const { switcher, currentTheme } = useThemeSwitcher();

  const onChangeTheme = (theme) => {
    localStorage.setItem('theme', theme);
    switcher({ theme: theme });
  };

  const isDark = currentTheme === 'dark';
  return (
    <Space className="items-center">
      <Sun
        className="cursor-pointer"
        onClick={() => onChangeTheme('light')}
        fill={isDark ? '#828282' : '#E4948F'}
      />
      <Text type="secondary">/</Text>
      <Moon
        className="cursor-pointer"
        onClick={() => onChangeTheme('dark')}
        fill={isDark ? '#E4948F' : '#828282'}
      />
    </Space>
  );
};

export default React.memo(ThemeSwitcher);
