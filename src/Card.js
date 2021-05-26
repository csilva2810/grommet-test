import styled from 'styled-components';
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Box,
  Paragraph,
  Heading,
} from 'grommet';
import { Favorite } from 'grommet-icons';

const CardActionButton = styled(Button)`
  border-radius: 0 0 12px 12px;
`;

const MyCard = () => (
  <Card width="medium">
    <CardBody pad="medium">
      <Heading level="4" margin="0">
        Heading
      </Heading>

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, earum!
      </Paragraph>
    </CardBody>
    <CardFooter pad="none">
      <CardActionButton primary fill>
        <Box
          direction="row"
          justify="center"
          align="center"
          pad="small"
          gap="small"
        >
          Action
          <Favorite color="white" />
        </Box>
      </CardActionButton>
    </CardFooter>
  </Card>
);

export default MyCard;
