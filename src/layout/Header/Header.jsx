import { AppBar as MuiAppBar, styled, Toolbar } from '@mui/material';
import SidebarToggleButton from './components/SidebarToggleButton';

const Header = (props) => {
  const {color = 'secondary'} = props
  return  (
    <StyleAppBar>
      <Toolbar>
        <SidebarToggleButton />
      </Toolbar>
    </StyleAppBar>
  )
}

const PREFIX = 'AceAppBar';

export const AppBarClasses = {
  appBar: `${PREFIX}-appBar`,
  title:`${PREFIX}-title`
}

const StyleAppBar = styled(MuiAppBar, {
  name: PREFIX,
  overridesResolver: (props, style) => StyleSheet.root,
})(({ theme }) => ({}));

export default Header