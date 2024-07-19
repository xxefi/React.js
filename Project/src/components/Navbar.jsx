import { Button, Icon, Text } from "@chakra-ui/react";
import { Disclosure } from "@headlessui/react";
import { CiSettings } from "react-icons/ci";
import { FaUser, FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <Disclosure as="nav" className="bg-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <a href="#">
              <Text color="white" fontSize="25px">
                ECOMMERCE
              </Text>
            </a>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <Button colorScheme="white">Home</Button>
                </Link>
                <Link to="/catalog">
                  <Button colorScheme="white">Catalog</Button>
                </Link>
                <Link to="/news">
                  <Button colorScheme="white">News</Button>
                </Link>
                <Link to="/aboutus">
                  <Button colorScheme="white">About us</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-shrink-0 items-center justify-between">
              <a href="#">
                <FaUser color="white" size="20px" />
              </a>
              <a href="#">
                <CiSettings color="white" size="23px" />
              </a>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
