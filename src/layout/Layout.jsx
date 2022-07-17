import { styled } from '@mui/material';

const PREFIX = "AceLayout"

const LayoutClasses = {};

const StyledLayout = styled('div', {
  name: 'Layout',
})(({ theme }) => ({
  flexDirection: 'column',
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  color: theme.palette.getContrastText(theme.palette.background.default),
  [`& .${LayoutClasses.appFrame}`]:{

  }
}));

const Layout = (props) => {
  return <StyledLayout>zsc</StyledLayout>;
};


export default Layout