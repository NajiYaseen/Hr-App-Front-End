import { useState } from "react";
import { LeaveItem } from "components/leaves";
import { DatesFilter } from "components/filters";
import {
  Stack,
  Heading,
  Alert,
  AlertTitle,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useLeaves } from "api";

export const EmployeeLeaves = () => {
  const [from, setFrom] = useState<string>();
  const [to, setTo] = useState<string>();
  const { id } = useParams();
  const { isError, isLoading, leaves } = useLeaves({ from, to, id });

  const onFilter = (from: Date, to: Date) => {
    setFrom(from.toString().replaceAll("-", "/"));
    setTo(to.toString().replaceAll("-", "/"));
  };

  console.log({ leaves });
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
      {leaves.map((leave) => (
        <LeaveItem key={leave.leaveId} {...leave} />
      ))}
      {isError && (
        <Alert status="error">
          <AlertTitle>Error Loading leaves</AlertTitle>
        </Alert>
      )}
    </Stack>
  );
};
