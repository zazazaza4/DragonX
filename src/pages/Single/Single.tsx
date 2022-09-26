import {
  Divider,
  Flex,
  Heading,
  Link as LinkAws,
  Loader,
  Text,
  useTheme,
  View
} from '@aws-amplify/ui-react';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel, Error } from '../../components';
import { IDragon } from '../../interfaces/dragon.interface';
import { withLayout } from '../../layout/Layout';
import { useGetDragonQuery } from '../../redux/api/dragonApi';

import { useCache } from '../../hooks/useCache';

const Single: FC = () => {
  const [dragon, setDragon] = useState<IDragon | null | undefined>();
  const { tokens } = useTheme();

  const param = useParams();
  const id = param?.id || '';

  const { data, isError } = useGetDragonQuery(id);
  const { retrieveData, updateCache } = useCache(data, id);

  useEffect(() => {
    setDragon(() => retrieveData());
    updateCache(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (!dragon) {
    return (
      <Flex height="100vh" justifyContent="center" alignItems="center">
        <Loader width="10rem" />
      </Flex>
    );
  }

  if (isError) {
    return (
      <Flex height="100vh" justifyContent="center" alignItems="center">
        <Error />
      </Flex>
    );
  }

  const renderRow = (
    title: string,
    value: number,
    unit: string,
    subValue: number,
    subUnit: string
  ) => {
    return (
      <>
        <Flex key={title} padding="20px 10px" alignItems="center" justifyContent="space-between">
          <Heading level={6}>{title}</Heading>
          <Text fontWeight={700}>
            {value} {unit}
            <Text as="span" color={tokens.colors.neutral[80]}>
              {' / '}
              {subValue} {subUnit}
            </Text>
          </Text>
        </Flex>
        <Divider />
      </>
    );
  };

  const overviewDragonEl = dragon && [
    renderRow('HEIGHT', dragon?.height_w_trunk.meters, 'm', dragon?.height_w_trunk.feet, 'ft'),
    renderRow('DIAMETER', dragon.diameter.meters, 'm', dragon.diameter.feet, 'ft'),
    renderRow(
      'CAPSULE VOLUME',
      dragon.pressurized_capsule.payload_volume.cubic_meters,
      'm',
      dragon.pressurized_capsule.payload_volume.cubic_feet,
      'ft'
    ),
    renderRow(
      'TRUNK VOLUME',
      dragon.trunk.trunk_volume.cubic_meters,
      'm',
      dragon.trunk.trunk_volume.cubic_feet,
      'ft'
    ),
    renderRow(
      'LAUNCH PAYLOAD MASS',
      dragon.launch_payload_mass.kg,
      'kg',
      dragon.launch_payload_mass.lb,
      'lb'
    )
  ];

  return (
    <View as="main" data-testid="single">
      <View maxWidth="900px" margin="0 auto" padding="10px 20px 40px">
        <Carousel images={dragon?.flickr_images || []} />
        <Heading textAlign="center" marginBottom="10px" level={2}>
          {dragon?.name || ' '}
        </Heading>
        <Text marginBottom="20px">
          {dragon?.description || ' '}
          <LinkAws href={dragon?.wikipedia || ' '}>Wikipedia</LinkAws>
        </Text>
        <View>
          <Heading marginBottom="10px" level={3}>
            OVERVIEW
          </Heading>
          <View>{overviewDragonEl}</View>
        </View>
      </View>
    </View>
  );
};

export default withLayout(Single);
