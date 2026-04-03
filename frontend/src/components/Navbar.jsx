import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react';
import { GrAddCircle } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { useColorMode} from "../components/ui/color-mode"
// Icons 
import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

export default function Navbar() {
  const { colorMode,toggleColorMode } = useColorMode()
  return (
    <Container maxW="1140px" px={4} >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              background: "linear-gradient(to right, cyan, blue)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              fontSize: "inherit",
            }}
          >
            Product Store🛒
          </Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button bg={"transparent"}>
              <GrAddCircle color='blue' />
            </Button>
          </Link>
          <Button
          fontSize={20}
            color={"blue"}
            bg={"transparent"}
            onClick={toggleColorMode}
            >
            {
              colorMode==="light"?<IoIosMoon/>:<MdSunny />
            }
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}
