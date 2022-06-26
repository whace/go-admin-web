import { styled } from '@mui/material';

const LayoutClasses = {};

const StyledLayout = styled('div', {
  name: 'Layout',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  color: theme.palette.getContrastText(theme.palette.background.default),
}));

const Layout = (props) => {
  return <StyledLayout></StyledLayout>;
};
