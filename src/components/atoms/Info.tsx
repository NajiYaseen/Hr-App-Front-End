import { Box, Text, Badge, HStack } from "@chakra-ui/react";

type InfoProps = {
  label: string;
  prefex?: any;
  color?: string;
  noBadge?: boolean;
};

export const Info: React.FC<InfoProps> = (props) => {
  const { prefex, label, color, children, noBadge } = props;

  return (
    <HStack>
      {prefex && <Box mr="5px">{prefex}</Box>}
      <Text fontWeight="bold">{label}</Text>
      {noBadge ? (
        <Text>{children}</Text>
      ) : (
        <Badge colorScheme={color}>{children}</Badge>
      )}
    </HStack>
  );
};
