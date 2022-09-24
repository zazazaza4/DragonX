import { Flex, Heading, Image, Text, View } from "@aws-amplify/ui-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ItemListProps } from "./ItemList.props";

const ItemList: FC<ItemListProps> = ({ dragon }) => {
  const trunc = (str: string, length: number = 40) => {
    if (str.length > length) {
      return str.slice(0, length) + "...";
    }
    return str;
  };

  return (
    <Flex maxHeight="500px" justifyContent="space-between" alignItems="center">
      <Flex alignItems="center" justifyContent="flex-start">
        <Link to={`/dragons/${dragon.id}`}>
          <Image
            borderRadius="20px"
            objectFit="cover"
            height="20rem"
            width="50rem"
            alt={dragon?.name}
            src={dragon.flickr_images[0]}
          />
        </Link>
        <View>
          <Link to={`/dragons/${dragon.id}`}>
            <Heading level={2}>{dragon?.name}</Heading>
          </Link>
          <Text>{trunc(dragon?.description, 120)}</Text>
        </View>
      </Flex>
      <View>Top</View>
    </Flex>
  );
};

export default ItemList;
