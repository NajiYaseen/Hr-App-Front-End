import { ClaimItem } from "components/claims";
import {
  Stack,
  Accordion,
  Heading,
} from "@chakra-ui/react";

import { useClaims } from "api";

export const Claims = () => {
    const { claims, } = useClaims();

  return (
    <Stack gap="20px" mb="100px">
      <Heading as="h2" my="20px">
        Expense Claims
      </Heading>

      {claims.map((claim) => (
        <Accordion>
          <ClaimItem key={claim.id} {...claim} />
        </Accordion>
      ))}
    </Stack>
  );
};
