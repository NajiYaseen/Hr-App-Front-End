import { useState } from "react";
import {
  Input,
  Box,
  InputGroup,
  InputLeftAddon,
  HStack,
  Button,
  Text,
  Center,
  Alert,
  VStack,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

type DatesFilterProps = {
  onFilter(from: Date, to: Date, error: boolean): void;
};

export const DatesFilter: React.FC<DatesFilterProps> = ({ onFilter }) => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [error, setError] = useState(false);

  const onFromChange = (e: any) => {
    setFrom(e.target.value);
  };

  const onToChange = (e: any) => {
    setTo(e.target.value);
  };

  const onSubmit = () => {
    if (!from || !to) {
      setError(true);
      return;
    }
    setError(false);
    onFilter(from, to, error);
  };

  return (
    <Box border="1px solid #edf2f7" borderRadius="10px" p="20px">
      <VStack>
        <Center mb="20px">
          <Text fontWeight="bold">Filter by starting date: </Text>
        </Center>
        <HStack>
          <InputGroup>
            <InputLeftAddon children="From" w="70px" />
            <Input type="date" name="from" onChange={onFromChange} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="To" w="70px" />
            <Input type="date" name="to" onChange={onToChange} />
          </InputGroup>
          <Button width="100px" onClick={onSubmit}>
            Filter
          </Button>
        </HStack>
        <Box>
          {error && (
            <Alert status="error">
              <AlertTitle mr={2}>Wrong Dates, </AlertTitle>
              <AlertDescription>Please modify!</AlertDescription>
            </Alert>
          )}
        </Box>
      </VStack>
    </Box>
  );
};
