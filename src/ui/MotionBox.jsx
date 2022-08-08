import { motion } from 'framer-motion';
import styled from 'styled-components';

import { composedHelpers } from './Box';

const MotionBox = styled(motion.div)`
  ${composedHelpers}
`;

MotionBox.defaultProps = {};

export default MotionBox;
