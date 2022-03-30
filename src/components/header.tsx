import { HStack, Box, Text, Divider, Heading, Icon } from "@chakra-ui/react";
import { MdBook } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

type HeaderLinkProps = {
  to: string;
  label: string;
  active: boolean;
};

const HeaderLink = (props: HeaderLinkProps) => {
  const { to, label, active } = props;
  return (
    <Box>
      <Link to={to}>
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="#EDF2F7"
          p="5px"
          borderBottom={active ? "2px solid #EDF2F7" : "none"}
        >
          {label}
        </Text>
      </Link>
    </Box>
  );
};
export const Header = () => {
  const { pathname } = useLocation();

  return (
    <Box h="80px" w="100%" bgColor="blue.500" mb="30px" py="20px">
      <HStack maxW="80%" m="auto" gap="20px">
        <Icon as={MdBook} w="50px" h="50px" color="#EDF2F7" />
        <HeaderLink
          to="/employees"
          label="Employees"
          active={pathname.includes("employees")}
        />
        <Divider orientation="vertical" h="20px" />
        <HeaderLink
          to="/leaves"
          label="Leaves"
          active={pathname.includes("leaves")}
        />
        <Divider orientation="vertical" h="20px" />
        <HeaderLink
          to="/claims"
          label="Claims"
          active={pathname.includes("claims")}
        />
      </HStack>
    </Box>
  );
};
