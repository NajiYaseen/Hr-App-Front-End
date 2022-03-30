import { EmployeeForm } from "components/employee/employee-form";
import { Box, Heading } from "@chakra-ui/react";
export const AddEmployee = () => {
  return (
    <Box>
      <Heading as="h2" my="20px">
        Add Employee
      </Heading>
      <EmployeeForm />
    </Box>
  );
};
