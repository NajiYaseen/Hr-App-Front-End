import { LeaveForm } from "components/leaves";
import { Heading, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const LeaveRequest = () => {
  const { id } = useParams();
  return (
    <Box>
      <Heading as="h2" my="10px">
        Request a leave - (id: {id})
      </Heading>
      <LeaveForm />
    </Box>
  );
};
