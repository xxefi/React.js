export default function NavItems({
  Wrap,
  WrapItem,
  Tooltip,
  FaUser,
  CiSettings,
  Button,
  Link,
}) {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
      <div className="flex flex-shrink-0 items-center space-x-4">
        <Wrap spacing={6}>
          <WrapItem>
            <Tooltip label="Home" bgColor="white" color="black" padding={2}>
              <Link to="/">
                <Button color="white" colorScheme="white" variant="ghost">
                  Home
                </Button>
              </Link>
            </Tooltip>
          </WrapItem>
          <WrapItem>
            <Tooltip label="Catalog" bgColor="white" color="black" padding={2}>
              <Link to="/catalog">
                <Button color="white" colorScheme="white" variant="ghost">
                  Catalog
                </Button>
              </Link>
            </Tooltip>
          </WrapItem>
          <WrapItem>
            <Tooltip label="News" bgColor="white" color="black" padding={2}>
              <Link to="/news">
                <Button color="white" colorScheme="white" variant="ghost">
                  News
                </Button>
              </Link>
            </Tooltip>
          </WrapItem>
          <WrapItem>
            <Tooltip label="About Us" bgColor="white" color="black" padding={2}>
              <Link to="/aboutus">
                <Button color="white" colorScheme="white" variant="ghost">
                  About us
                </Button>
              </Link>
            </Tooltip>
          </WrapItem>
        </Wrap>
      </div>
    </div>
  );
}
