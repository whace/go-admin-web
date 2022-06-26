import { AppBar as MuiAppBar, styled } from '@mui/material';

const Header = (props) => {
  retrun(
    <StyleAppBar>
      <Toolbar></Toolbar>
    </StyleAppBar>,
  );
};

const PREFIX = 'AppBar';

const StyleAppBar = styled(MuiAppBar, {
  name: PREFIX,
  overridesResolver: (props, style) => StyleSheet.root,
})(({ theme }) => ({}));
