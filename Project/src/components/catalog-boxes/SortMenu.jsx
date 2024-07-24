export default function SortMenu({
  ChevronDownIcon,
  ChevronUpIcon,
  Button,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  useState,
}) {
  const [sortOption, setSortOption] = useState("Sort");

  const handleMenuItemClick = (option) => {
    setSortOption(option);
  };
  return (
    <div className="flex flex-auto justify-end mr-10">
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            >
              {sortOption}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleMenuItemClick("New")}>
                New
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("Price Ascending")}>
                Price Ascending
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("Price Descending")}>
                Price Descending
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("Rating")}>
                Rating
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </div>
  );
}
