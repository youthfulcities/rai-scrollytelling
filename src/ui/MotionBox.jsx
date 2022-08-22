import { motion } from 'framer-motion';

import { composedHelpers } from './Box';

const MotionBox = styled(motion.div)`
  ${composedHelpers}
`;

MotionBox.defaultProps = {}; 

export default MotionBox;