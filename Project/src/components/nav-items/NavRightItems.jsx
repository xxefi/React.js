export default function NavRightItems({
  Wrap,
  WrapItem,
  Tooltip,
  Link,
  FaUser,
  CiSettings,
}) {
  return (
    <div className="flex flex-shrink-0 items-center space-x-4">
      <Wrap spacing={6}>
        <WrapItem>
          <Tooltip label="Profile" bgColor="white" color="black" padding={2}>
            <Link to="/">
              <FaUser color="white" size="20px" />
            </Link>
          </Tooltip>
        </WrapItem>
        <WrapItem>
          <Tooltip label="Settings" bgColor="white" color="black" padding={2}>
            <Link to="/">
              <CiSettings color="white" size="23px" />
            </Link>
          </Tooltip>
        </WrapItem>
      </Wrap>
    </div>
  );
}
