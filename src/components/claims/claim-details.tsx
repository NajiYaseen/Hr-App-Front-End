import { Flex, Box, Text, Divider, Stack } from "@chakra-ui/react";
import { Info } from "components/atoms";
import {format} from 'date-fns'
type ClaimDetailsProps = {
  expenseDetailId: string;
  expenseDate: string;
  description: string;
  total: string;
};
export const ClaimDetails = (props: ClaimDetailsProps) => {
  const { expenseDetailId, expenseDate, description, total } = props;

  return (
    <Flex border="1px solid #edf2f7" borderRadius="10px" p="20px">
      <Flex justifyContent="space-around" ml="20px" width="80%">
        <Box flex={1}>
          <Flex direction="column">
            <Info label="id">{expenseDetailId}</Info>
            <Info label="Date" color={"green"}>
              {format(new Date(expenseDate), "yyyy-MM-dd")}
            </Info>
            <Info label="Total">{total}</Info>
          </Flex>
        </Box>
        <Divider orientation="vertical" mx="20px" />
        <Box flex={1}>
          <Stack>
            <Info label="Description" noBadge>
              {description}
            </Info>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};
