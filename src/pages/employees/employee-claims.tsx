import { ClaimItem } from "components/claims";
import {
    Stack,
    Accordion,
    Heading,
} from "@chakra-ui/react";
import { useParams } from 'react-router-dom'
import { useClaims } from "api";

export const EmployeeClaims = () => {
    const { id } = useParams()
    const { claims } = useClaims(id);

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
