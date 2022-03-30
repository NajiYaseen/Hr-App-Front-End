import {
  Flex,
  Box,
  Text,
  Avatar,
  Stack,
  Divider,
  Button,
  Icon,
  VStack,
} from "@chakra-ui/react";
import {
  MdAlternateEmail,
  MdLocationPin,
  MdPersonRemove,
  MdEdit,
  MdArrowCircleDown,
  MdCalculate,
} from "react-icons/md";
import { Info } from "components/atoms";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  email: string;
  address: string;
  departmentId: string;
};

export const EmployeeItem = (props: Props) => {
  const { id, name, email, address, departmentId } = props;

  return (
    <Flex
      border="1px solid #edf2f7"
      borderRadius="10px"
      p="20px"
      direction={["column", "column", "column", "row"]}
    >
      <Flex alignItems="center" flex={0.3}>
        <VStack gap="20px">
          <Avatar
            size="xl"
            src="https://www.pngarts.com/files/3/Employee-Avatar-PNG-Free-Download.png"
          />
          <Link to={`update/${id}`}>
            <Button w="170px">
              <Icon as={MdEdit} mr="5px" /> Update profile
            </Button>
          </Link>
        </VStack>
        <Text fontSize="lg" fontWeight="bold" ml="20px">
          {name}
        </Text>
      </Flex>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        ml="20px"
        width="80%"
        direction={["column", "column", "column", "row"]}
        flex={1}
      >
        <Divider orientation="vertical" />
        <Box>
          <Flex direction="column">
            <Info label={"id"}>{id}</Info>
            <Info label={"Department"}>{departmentId}</Info>
          </Flex>
        </Box>
        <Divider orientation="vertical" />
        <Box>
          <Stack>
            <Info noBadge prefex={<Icon as={MdAlternateEmail} />} label="Email">
              {email}
            </Info>
            <Info noBadge prefex={<Icon as={MdLocationPin} />} label="Address">
              {address}
            </Info>
            <Text></Text>
          </Stack>
        </Box>
        <Divider orientation="vertical" />
        <Box>
          <Stack>
            <Link to={`/leaves/${id}`}>
              <Button w="170px">
                <Icon as={MdArrowCircleDown} mr="5px" /> Show leaves
              </Button>
            </Link>
            <Link to={`/leaves/request/${id}`}>
              <Button w="170px">
                <Icon as={MdPersonRemove} mr="5px" /> Request a leave
              </Button>
            </Link>
          </Stack>
        </Box>
        <Divider orientation="vertical" />

        <Box>
          <Stack>
            <Link to={`/claims/${id}`}>
              <Button w="170px">
                <Icon as={MdCalculate} mr="5px" /> Show claim
              </Button>
            </Link>
            <Link to={`/claims/request/${id}`}>
              <Button w="170px">
                <Icon as={MdCalculate} mr="5px" /> Request a claim
              </Button>
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};
