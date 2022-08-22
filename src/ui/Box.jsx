import styled from 'styled-components';

import {
  background,
  border,
  bottom,
  boxShadow,
  color,
  compose,
  layout,
  left,
  position,
  right,
  space,
  top,
  typography,
} from 'styled-system';

const composedHelpers = compose(
  background,
  layout,
  border,
  space,
  color,
  typography,
  top,
  bottom,
  left,
  right,
  position,
  boxShadow,
);

const Box = styled.div`
  ${composedHelpers}
`;

Box.defaultProps = {};

export default { composedHelpers, Box };