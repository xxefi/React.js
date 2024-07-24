import {
  Box,
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useState } from "react";
import KeyWords from "../catalog-boxes/KeyWords";
import { FaSearch } from "react-icons/fa";
import CatalogFooter from "../footers/CatalogFooter";
import SearchBox from "../catalog-boxes/SearchBox";
import SortMenu from "../catalog-boxes/SortMenu";

export default function Catalog() {
  const [keywords, setKeywords] = useState(["Spring", "Smart", "Modern"]);
  const [price, setPrice] = useState([0, 500]);

  const handleRemoveKeyword = (keyword) => {
    setKeywords(keywords.filter((k) => k !== keyword));
  };

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  return (
    <div>
      <SearchBox
        InputGroup={InputGroup}
        Input={Input}
        InputRightElement={InputRightElement}
        Button={Button}
        FaSearch={FaSearch}
      />
      <SortMenu
        ChevronDownIcon={ChevronDownIcon}
        ChevronUpIcon={ChevronUpIcon}
        Button={Button}
        Menu={Menu}
        MenuList={MenuList}
        MenuButton={MenuButton}
        MenuItem={MenuItem}
        useState={useState}
      />
      <KeyWords
        Box={Box}
        Checkbox={Checkbox}
        Slider={Slider}
        SliderFilledTrack={SliderFilledTrack}
        SliderThumb={SliderThumb}
        SliderTrack={SliderTrack}
        Tag={Tag}
        TagCloseButton={TagCloseButton}
        TagLabel={TagLabel}
        Text={Text}
        handlePriceChange={handlePriceChange}
        handleRemoveKeyword={handleRemoveKeyword}
        keywords={keywords}
        price={price}
      />
      <CatalogFooter />
    </div>
  );
}
