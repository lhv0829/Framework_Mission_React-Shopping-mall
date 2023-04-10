import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ModeSwitch = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch
      // style={}
      // style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={28}
      moonColor={'black'}
      sunColor={'white'}
    />
  );
};

export default ModeSwitch;