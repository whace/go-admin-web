const RotateIconBtn = (props) => {};

const PREFIX = 'RotateIconBtn';

const StyledIconButton = styled(IconButton, {
  name: PREFIX,
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  // [`& .`]
}));
