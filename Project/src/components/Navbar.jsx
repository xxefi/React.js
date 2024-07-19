import { Button, Icon, Text, Wrap, WrapItem, Tooltip } from "@chakra-ui/react";
import { Disclosure } from "@headlessui/react";
import { CiSettings } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Disclosure as="nav" className="bg-black fixed top-0 left-0 w-full z-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <Link to="/">
              <Text color="white" fontSize="25px">
                ECOMMERCE
              </Text>
            </Link>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
              <div className="flex flex-shrink-0 items-center space-x-4">
                <Wrap spacing={6}>
                  <WrapItem>
                    <Tooltip
                      label="Home"
                      bgColor="white"
                      color="black"
                      padding={2}
                    >
                      <Link to="/">
                        <Button
                          color="white"
                          colorScheme="white"
                          variant="ghost"
                        >
                          Home
                        </Button>
                      </Link>
                    </Tooltip>
                  </WrapItem>
                  <WrapItem>
                    <Tooltip
                      label="Catalog"
                      bgColor="white"
                      color="black"
                      padding={2}
                    >
                      <Link to="/catalog">
                        <Button
                          color="white"
                          colorScheme="white"
                          variant="ghost"
                        >
                          Catalog
                        </Button>
                      </Link>
                    </Tooltip>
                  </WrapItem>
                  <WrapItem>
                    <Tooltip
                      label="News"
                      bgColor="white"
                      color="black"
                      padding={2}
                    >
                      <Link to="/news">
                        <Button
                          color="white"
                          colorScheme="white"
                          variant="ghost"
                        >
                          News
                        </Button>
                      </Link>
                    </Tooltip>
                  </WrapItem>
                  <WrapItem>
                    <Tooltip
                      label="About Us"
                      bgColor="white"
                      color="black"
                      padding={2}
                    >
                      <Link to="/aboutus">
                        <Button
                          color="white"
                          colorScheme="white"
                          variant="ghost"
                        >
                          About us
                        </Button>
                      </Link>
                    </Tooltip>
                  </WrapItem>
                </Wrap>
              </div>
            </div>
            <div className="flex flex-shrink-0 items-center space-x-4">
              <Wrap spacing={6}>
                <WrapItem>
                  <Tooltip
                    label="Profile"
                    bgColor="white"
                    color="black"
                    padding={2}
                  >
                    <Link to="/">
                      <FaUser color="white" size="20px" />
                    </Link>
                  </Tooltip>
                </WrapItem>
                <WrapItem>
                  <Tooltip
                    label="Settings"
                    bgColor="white"
                    color="black"
                    padding={2}
                  >
                    <Link to="/">
                      <CiSettings color="white" size="23px" />
                    </Link>
                  </Tooltip>
                </WrapItem>
              </Wrap>
            </div>
          </div>
        </div>
      </Disclosure>
      <div className="pt-16"></div>
    </div>
  );
}
