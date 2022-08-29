import styled from 'styled-components';
import { compose, flexbox } from 'styled-system';

import Box from './Box.jsx';


const composedHelpers = compose(flexbox);

const Flex = styled(Box)`
  display: flex;
  ${composedHelpers}
`;

Flex.defaultProps = {};

export default Flex;