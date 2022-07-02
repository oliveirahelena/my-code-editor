import { Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/Brightness2';
import LightModeIcon from '@mui/icons-material/Brightness7';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { toggleDarkMode } from '../../../store/slices/dark-mode/darkMode';

const DarkModeSwitch = () => {
  const isDarkModeEnabled = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();

  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
      {isDarkModeEnabled ? (<DarkModeIcon />) : (<LightModeIcon />)}
      <Switch color="default" checked={isDarkModeEnabled} onChange={onChangeDarkMode} />
    </>
  );
};

export default DarkModeSwitch;
