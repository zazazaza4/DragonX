import { Flex, Heading, Image, View } from "@aws-amplify/ui-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ItemListProps } from "./ItemList.props";

const ItemList: FC<ItemListProps> = ({ dragon }) => {
  return (
    <Flex maxHeight="200px" justifyContent="space-between" alignItems="center">
      <Flex alignItems="center" justifyContent="flex-start">
        <Link to={`/dragons/${dragon.id}`}>
          <Image
            borderRadius="20px"
            objectFit="cover"
            width="100%"
            height="150px"
            alt={dragon?.name}
            src={dragon.flickr_images[0]}
          />
        </Link>
        <Link to={`/dragons/${dragon.id}`}>
          <Heading level={2}>{dragon?.name}</Heading>
        </Link>
      </Flex>
      <View>Top</View>
    </Flex>
  );
};

export default ItemList;
