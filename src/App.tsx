import {
  Button,
  ChakraProvider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  extendTheme,
  useDisclosure,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = extendTheme({
    colors: {
      white: { 500: "hsl(0, 0%, 100%)" },
    },
  });
  return (
    <>
      <ChakraProvider theme={theme}>
        <Flex flexGrow={1} minHeight={"100%"} width={"100%"}>
          {" "}
          <Flex>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Bacon ipsum dolor amet hamburger pancetta pork kielbasa pig,
                  cupim venison tongue. Ham hock bacon ribeye kevin pork loin
                  boudin drumstick buffalo brisket pancetta cupim ground round.
                  Buffalo pork picanha, ribeye sausage turkey pancetta
                  prosciutto chicken pastrami venison salami flank t-bone
                  meatloaf. Doner swine bacon brisket pancetta. Capicola t-bone
                  venison, bresaola filet mignon ground round cow turkey buffalo
                  kevin frankfurter meatloaf landjaeger beef ribs spare ribs.
                  Cow spare ribs ground round tongue brisket sausage boudin
                  cupim pork loin corned beef shankle salami pig. Kielbasa
                  salami prosciutto jerky meatball shankle alcatra.
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default App;
