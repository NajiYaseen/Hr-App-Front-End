import { useEffect, useState } from "react";
import { Box, Stack, Input, Button, Alert, AlertTitle } from "@chakra-ui/react";
import { useCreateOrUpdateEmployee, useEmployees } from "api";
import {useParams} from 'react-router-dom'
type EmployeePayload = {
  name: string;
  email: string;
  address: string;
  departmentId: string;
};

export const EmployeeForm = () => {
  const {id} = useParams()
  const { createOrUpdateEmployee, isSuccess, isError } = useCreateOrUpdateEmployee(id);
  const {employees} = useEmployees()
const employee = employees[0]
  const [payload, setPayload] = useState<EmployeePayload>( {
    name: "",
    email: "",
    address: "",
    departmentId: "",
  });

  useEffect(() => {
    if(employee && id) {
      setPayload(employee)
    }
  }, [employee])

  const [valid, setValid] = useState(true);

  const onChange = (key: string) => (e: any) => {
    setPayload((payload) => ({ ...payload, [key]: e.target.value }));
  };

  const onSubmit = () => {
    console.log({ payload });
    if (
      !payload.name ||
      !payload.address ||
      !payload.email ||
      !payload.departmentId
    ) {
      setValid(false);
      return;
    }
    setValid(true);
    createOrUpdateEmployee(payload);
  };
  console.log({employee, id})
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  });

  return (
    <Box border="1px solid #edf2f7" borderRadius="10px" p="10px">
      <Stack>
        <Input
          name="name"
          placeholder="Employee name"
          onChange={onChange("name")}
          value={payload.name}
        />
        <Input
          name="email"
          placeholder="Employee email"
          onChange={onChange("email")}
          value={payload.email}
        />
        <Input
          name="address"
          placeholder="Employee address"
          onChange={onChange("address")}
          value={payload.address}
        />
        <Input
          name="departmentId"
          placeholder="Department Id"
          onChange={onChange("departmentId")}
          value={payload.departmentId}
        />
        <Button onClick={onSubmit}>Submit</Button>
        {!valid && (
          <Alert status="error">
            <AlertTitle>Please fill all fields</AlertTitle>
          </Alert>
        )}
        {isSuccess && (
          <Alert status="success">
            <AlertTitle>
              Employee {payload.name} created successfully!
            </AlertTitle>
          </Alert>
        )}
        {isError && (
          <Alert status="error">
            <AlertTitle>
              Error while creating Employee {payload.name}, please try again!
            </AlertTitle>
          </Alert>
        )}
      </Stack>
    </Box>
  );
};
