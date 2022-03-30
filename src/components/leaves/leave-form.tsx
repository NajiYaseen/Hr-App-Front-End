import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Select,
  Alert,
  AlertTitle,
} from "@chakra-ui/react";
import { useRequestLeave, LeavePayload } from "api";

export const LeaveForm = () => {
  const { id } = useParams();
  const { isError, isSuccess, requestLeave } = useRequestLeave(id!);
  const [payload, setPayload] = useState<LeavePayload>({
    from: "",
    to: "",
    type: "Annual",
    note: "",
  });
  const [valid, setValid] = useState(true);

  const onChange = (key: string) => (e: any) => {
    let content: string = e.target.value;

    setPayload((payload) => ({ ...payload, [key]: content }));
  };

  const onSubmit = () => {
    console.log({ payload });
    if (!payload.from || !payload.to || !payload.type || !payload.note) {
      setValid(false);
      return;
    }
    setValid(true);
    requestLeave(payload);
  };

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
        <InputGroup>
          <InputLeftAddon children="From" w="70px" />
          <Input type="date" name="from" onChange={onChange("from")} />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="To" w="70px" />
          <Input type="date" name="to" onChange={onChange("to")} />
        </InputGroup>{" "}
        <InputGroup>
          <InputLeftAddon children="Type" w="70px" />
          <Select name="type" borderLeftRadius="0" onChange={onChange("type")}>
            <option value="annual">Annual</option>
            <option value="sick">Sick</option>
          </Select>
        </InputGroup>
        <Input name="note" placeholder="Note" onChange={onChange("note")} />
        <Button onClick={onSubmit}>Submit</Button>
        {!valid && (
          <Alert status="error">
            <AlertTitle>Please fill all fields</AlertTitle>
          </Alert>
        )}
        {isSuccess && (
          <Alert status="success">
            <AlertTitle>Leave submitted successfully!</AlertTitle>
          </Alert>
        )}
        {isError && (
          <Alert status="error">
            <AlertTitle>Error while submiting leave!</AlertTitle>
          </Alert>
        )}
      </Stack>
    </Box>
  );
};
