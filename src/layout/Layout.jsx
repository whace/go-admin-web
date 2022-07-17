import { styled } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import Header from './Header';
import projectConfig from '/@/config/projectConfig';

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

const Layout = ({title}) => {
  return (<StyledLayout>
    <div>
      <Header  title={title}/>
      <main>
        <Sidebar>
          
        </Sidebar>
        <ErrorBoundary>

        </ErrorBoundary>
      </main>
    </div>
  </StyledLayout>);
};

Layout.defaultProps={
  title: projectConfig.headTitle
}


export default Layout