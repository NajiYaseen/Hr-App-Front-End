import { useState } from "react";
import { LeaveItem } from "components/leaves";
import { DatesFilter } from "components/filters";
import {
  Stack,
  Heading,
  Spinner,
  Center,
  Alert,
  AlertTitle,
} from "@chakra-ui/react";
import { useLeaves } from "api";

export const Leaves = () => {
  const [from, setFrom] = useState<string>();
  const [to, setTo] = useState<string>();
  const { leaves, isLoading, isError } = useLeaves({ from, to });

  const onFilter = (from: Date, to: Date) => {
    setFrom(from.toString().replaceAll("-", "/"));
    setTo(to.toString().replaceAll("-", "/"));
  };

  return (
    <Stack gap="20px">
      <Heading as="h2" my="20px">
        Leaves
      </Heading>
      <DatesFilter onFilter={onFilter} />
      {isLoading && (
        <Center>
          <Spinner size="xl" />
        </Center>
      )}
      {leaves &&
        leaves.map((leave) => <LeaveItem key={leave.leaveId} {...leave} />)}
      {isError && (
        <Alert status="error">
          <AlertTitle>Error Loading leaves</AlertTitle>
        </Alert>
      )}
    </Stack>
  );
};
