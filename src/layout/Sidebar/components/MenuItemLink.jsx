import { MenuItem, styled } from '@mui/material';

const PREFIX = 'AceMenuItemLink';

export const MenuItemLinkClasses = {
  active: `${PREFIX}-active`,
  icon: `${PREFIX}-icon`,
};

const StyledMenuItem = styled(MenuItem, {
  name: PREFIX,
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
