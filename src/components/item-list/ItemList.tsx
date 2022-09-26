import { Flex, Heading, Image, Text, useBreakpointValue, View } from '@aws-amplify/ui-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ItemListProps } from './ItemList.props';
import { trunc } from '../../utils/helpers';

import styles from '../../styles/global.module.css';

const ItemList: FC<ItemListProps> = ({ dragon }) => {
  const direction = useBreakpointValue({
    small: 'column',
    base: 'column',
    medium: 'row'
  });

  return (
    <Flex maxHeight="500px" justifyContent="space-between" alignItems="center">
      <Flex alignItems="center" direction={direction} justifyContent="flex-start">
        <Link to={`/dragons/${dragon.id}`}>
          <Image
            className={styles.link_opacity}
            borderRadius="20px"
            objectFit="cover"
            height="20rem"
            width="50rem"
            alt={dragon?.name}
            src={dragon.flickr_images[0]}
          />
        </Link>
        <View position="relative">
          <Link to={`/dragons/${dragon.id}`}>
            <Heading className={styles.link} level={2}>
              {dragon?.name}
            </Heading>
          </Link>
          <Text margin="20px 0">{trunc(dragon?.description, 120)}</Text>
          <View
            className={styles.link_scale}
            fontSize="1.4rem"
            position="absolute"
            top="10px"
            left="80%">
            ❤️
          </View>
        </View>
      </Flex>
    </Flex>
  );
};

export default ItemList;

