import { EmployeeForm } from "components/employee/employee-form";
import { Box, Heading } from "@chakra-ui/react";

export const UpdateEmployee = () => {
  return (
    <Box>
      <Heading as="h2" my="20px">
        Update Employee
      </Heading>
      <EmployeeForm/>
    </Box>
  );
};
