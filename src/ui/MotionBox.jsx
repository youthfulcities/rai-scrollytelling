import { motion } from 'framer-motion';

import { composedHelpers } from '/Box.jsx';

export const MotionBox = styled(motion.div)`
  ${composedHelpers}
`;

MotionBox.defaultProps = {};