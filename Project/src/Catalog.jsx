import {
  Box,
  Button,
  Card,
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
} from "@chakra-ui/react";
import { useState } from "react";
import KeyWords from "./components/catalog-boxes/KeyWords";
import { FaSearch } from "react-icons/fa";
import CatalogFooter from "./components/footers/CatalogFooter";
import SearchBox from "./components/catalog-boxes/SearchBox";

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
