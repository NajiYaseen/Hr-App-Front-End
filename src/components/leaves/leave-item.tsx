import { Flex, Box, Stack, Divider, Icon } from "@chakra-ui/react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { Info } from "components/atoms";
type LeaveItemProps = {
  leaveId: string;
  leaveType: string;
  from: string;
  to: string;
  note: string;
  numberOfDays: string;
};

export const LeaveItem = (props: LeaveItemProps) => {
  const { leaveId: id, leaveType, from, to, note, numberOfDays } = props;

  return (
    <Flex border="1px solid #edf2f7" borderRadius="10px" p="20px">
      <Flex justifyContent="space-around" ml="20px" width="80%">
        <Box>
          <Icon as={MdOutlineCalendarToday} w="70px" h="70px" />
        </Box>
        <Divider orientation="vertical" mx="20px" />
        <Box flex={1}>
          <Flex direction="column">
            <Info label="id">{id}</Info>
            <Info
              label="Leave type"
              color={leaveType === "Sick" ? "orange" : "green"}
            >
              {leaveType}
            </Info>
          </Flex>
        </Box>
        <Divider orientation="vertical" mx="20px" />
        <Box flex={1}>
          <Stack>
            <Info label="From" prefex={<Icon as={MdOutlineCalendarToday} />}>
              {from}
            </Info>
            <Info label="To" prefex={<Icon as={MdOutlineCalendarToday} />}>
              {to}
            </Info>
          </Stack>
        </Box>
        <Divider orientation="vertical" mx="20px" />
        <Box flex={1}>
          <Stack>
            <Info label="Number of days" color="red">
              {numberOfDays}
            </Info>
            <Info label="Note" noBadge>
              {note}
            </Info>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};
