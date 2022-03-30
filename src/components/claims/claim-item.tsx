import {
  Flex,
  Box,
  Stack,
  Divider,
  Icon,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Info } from "components/atoms";
import { FaMoneyBill } from "react-icons/fa";
import { ClaimDetails } from "./claim-details";
import {format} from 'date-fns'

type ClaimDetail = {
  expenseDetailId: string;
  expenseDate: string;
  description: string;
  total: string;
};

type ClaimItemProps = {
  id: string;
  date: string;
  description: string;
  total: string;
  status: string;
  details: ClaimDetail[];
};

export const ClaimItem = (props: ClaimItemProps) => {
  const { id, date, description, total, status, details } = props;
  return (
    <AccordionItem w="100%">
      <AccordionButton w="100%">
        <Flex p="20px" width="100%">
          <Flex justifyContent="space-around" ml="20px" width="100%">
            <Box>
              <Icon as={FaMoneyBill} w="70px" h="70px" />
            </Box>
            <Divider orientation="vertical" mx="20px" />
            <Box flex={1}>
              <Flex direction="column">
                <Info label="id">{id}</Info>
                <Info label="Date" color={"green"}>
                  {format(new Date(date), "yyyy-MM-dd")}
                </Info>
              </Flex>
            </Box>
            <Divider orientation="vertical" mx="20px" />
            <Box flex={1}>
              <Stack>
                <Info label="Status">{status}</Info>
                <Info label="Description" noBadge>
                  {description}
                </Info>
              </Stack>
            </Box>
            <Divider orientation="vertical" mx="20px" />
            <Box flex={1}>
              <Stack>
                <Text fontSize="2xl">Total</Text>
                <Text fontSize="2xl" color="red.500">
                  {total}
                </Text>
              </Stack>
            </Box>
          </Flex>
        </Flex>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel p="10px">
        {details.map((detail) => (
          <Box mb="10px">
            <ClaimDetails key={detail.expenseDetailId} {...detail} />
          </Box>
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
};
