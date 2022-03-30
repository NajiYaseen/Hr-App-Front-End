import { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Input,
  Button,
  Alert,
  AlertTitle,
  InputGroup,
  InputLeftAddon,
  Divider,
  Text,
} from "@chakra-ui/react";
import { useRequestClaim } from "api";
import { useParams } from "react-router-dom";
import { useClaimsForm } from "hooks/";
import { format } from 'date-fns'
export const ClaimsForm = () => {
  const { id } = useParams();
  const { requestClaim } = useRequestClaim(id!);
  const { state, addClaimDetails, changeClaimData, changeClaimDetails } =
    useClaimsForm();

  const [valid, setValid] = useState(true);

  const onSubmit = () => {
    if (!state.date || !state.description || !state.status) {
      setValid(false);
      return;
    }
    setValid(true);
    requestClaim(state);
  };
  const onChange = (key: string) => (e: any) => {
    if (key === "date") {
      changeClaimData(key, format(new Date(e.target.value), "yyyy-MM-dd"));
    }
    changeClaimData(key, e.target.value);
  };

  return (
    <Box border="1px solid #edf2f7" borderRadius="10px" p="10px" w="100%">
      <Stack>
        <InputGroup>
          <InputLeftAddon children="Date" w="70px" />
          <Input type="date" name="date" onChange={onChange("date")} />
        </InputGroup>
        <Input
          name="description"
          placeholder="Description"
          onChange={onChange("description")}
        />
        <Input
          name="status"
          placeholder="Status"
          onChange={onChange("status")}
        />
        {state.details.map((_: any, index: number) => (
          <Box border="1px solid grey" p="20px" key={index}>
            <DetailsForm index={index} />
          </Box>
        ))}
        <Button variant="ghosty" onClick={addClaimDetails} color="blue.500">
          Add details
        </Button>
        <Divider />
        <Button variant="outline" onClick={onSubmit}>Submit</Button>
        {!valid && (
          <Alert status="error">
            <AlertTitle>Please fill all fields</AlertTitle>
          </Alert>
        )}
      </Stack>
    </Box>
  );
};

const DetailsForm = ({ index }: { index: number }) => {
  const { changeClaimDetails } = useClaimsForm();
  const [data, setData] = useState({
    date: "",
    description: "",
    total: "",
  });

  const onChange = (key: string) => (e: any) => {
    if (key === "date") {
      setData((data) => ({ ...data, [key]: format(new Date(e.target.value), "yyyy-MM-dd") }));
    }
    setData((data) => ({ ...data, [key]: e.target.value }));
  };
  const onSubmitDetails = () => {
    if (data.date && data.description && data.total) {
      changeClaimDetails(data, index);
    }
  };
  return (
    <Box border="1px solid #edf2f7" borderRadius="10px" p="10px">
      <Text my="10px">Claim Details {index + 1}</Text>
      <Stack>
        <InputGroup>
          <InputLeftAddon children="Date" w="70px" />
          <Input type="date" name="date" onChange={onChange("date")} />
        </InputGroup>
        <Input
          name="description"
          placeholder="Description"
          onChange={onChange("description")}
        />
        <Input name="total" placeholder="Total" onChange={onChange("total")} />
        <Button onClick={onSubmitDetails}>Save details</Button>
      </Stack>
    </Box>
  );
};
