import { Tooltip } from "@chakra-ui/react";
import { TextField } from "@mui/material";

export default function SearchBox({
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FaSearch,
}) {
  return (
    <div className="flex justify-center items-center">
      <Tooltip
        bgColor="#fefefe"
        color="black"
        label="Press to search"
        aria-label="Press to search"
      >
        <InputGroup width="350px" marginTop="15px">
          <Input
            focusBorderColor="black"
            color="gray"
            width="350px"
            placeholder="Search..."
            borderRadius="25px"
          />
          <InputRightElement>
            <Button variant="ghost" size="sm" borderRadius="50%" right={1}>
              <FaSearch color="gray" size={20} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Tooltip>
    </div>
  );
}
