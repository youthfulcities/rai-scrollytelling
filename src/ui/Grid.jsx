import styled from 'styled-components';
import Box from './Box';

import { compose, grid } from 'styled-system';

const composedHelpers = compose(grid);

const Grid = styled(Box)`
  ${composedHelpers}
`;

Grid.defaultProps = {
  display: 'grid',
};

export default Grid;