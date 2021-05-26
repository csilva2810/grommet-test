import { Box, Text } from 'grommet';

const Label = ({ children, ...labelProps }) => (
  <Box pad={{ bottom: 'xsmall' }}>
    <Text as="label" {...labelProps} pad={{ left: 'small' }}>
      {children}
    </Text>
  </Box>
);

export default Label;
