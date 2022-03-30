import { EmployeeItem } from "components/employee";
import {
  Stack,
  Button,
  Icon,
  Box,
  Heading,
  Spinner,
  Center,
  Alert,
  AlertTitle,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEmployees } from "api";

export const Employees = () => {
  const { employees, isLoading, isError } = useEmployees();

  return (
    <Stack gap="20px" mb="100px">
      <Heading as="h2" my="20px">
        Employees
      </Heading>

      <Box>
        <Link to="add">
          <Button>
            <Icon as={MdAdd} />
            Add Employee
          </Button>
        </Link>
      </Box>
      {employees &&
        employees.map((emp) => <EmployeeItem key={emp.id} {...emp} />)}
      {isLoading && (
        <Center>
          <Spinner size="xl" />
        </Center>
      )}
      {isError && (
        <Alert status="error">
          <AlertTitle>Error loading employees</AlertTitle>
        </Alert>
      )}
    </Stack>
  );
};
