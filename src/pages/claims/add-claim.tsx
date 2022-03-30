import { Heading, VStack } from "@chakra-ui/react";
import { ClaimsForm } from "components/claims";
import { ClaimsFormProvider } from "hooks/useClaimsForm";

export const AddClaim = () => {
  return (
    <VStack>
      <Heading as="h2" mx="20px">
        Request claim
      </Heading>
      <ClaimsFormProvider>
        <ClaimsForm />
      </ClaimsFormProvider>
    </VStack>
  );
};
