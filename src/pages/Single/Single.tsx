import {
  Divider,
  Flex,
  Heading,
  Link as LinkAws,
  Loader,
  Text,
  useTheme,
  View,
} from "@aws-amplify/ui-react";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "../../components";
import { withLayout } from "../../layout/Layout";
import { useGetDragonQuery } from "../../redux/api/dragonApi";

const Single: FC = () => {
  const { tokens } = useTheme();
  const param = useParams();

  const id = param?.id || "";
  const { isError, data: dragon, isLoading } = useGetDragonQuery(id);

  if (isLoading) {
    return (
      <Flex height="100vh" justifyContent="center" alignItems="center">
        <Loader width="10rem" />
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
        <Flex
          padding="20px 10px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading level={6}>{title}</Heading>
          <Text fontWeight={700}>
            {value} {unit}
            <Text as="span" color={tokens.colors.neutral[80]}>
              {" / "}
              {subValue} {subUnit}
            </Text>
          </Text>
        </Flex>
        <Divider />
      </>
    );
  };

  const overviewDragonEl = dragon && [
    renderRow(
      "HEIGHT",
      dragon?.height_w_trunk.meters,
      "m",
      dragon?.height_w_trunk.feet,
      "ft"
    ),
    renderRow(
      "DIAMETER",
      dragon.diameter.meters,
      "m",
      dragon.diameter.feet,
      "ft"
    ),
    renderRow(
      "CAPSULE VOLUME",
      dragon.pressurized_capsule.payload_volume.cubic_meters,
      "m",
      dragon.pressurized_capsule.payload_volume.cubic_feet,
      "ft"
    ),
    renderRow(
      "TRUNK VOLUME",
      dragon.trunk.trunk_volume.cubic_meters,
      "m",
      dragon.trunk.trunk_volume.cubic_feet,
      "ft"
    ),
    renderRow(
      "LAUNCH PAYLOAD MASS",
      dragon.launch_payload_mass.kg,
      "kg",
      dragon.launch_payload_mass.lb,
      "lb"
    ),
  ];

  return (
    <View as="main">
      <View padding="10px 20px 40px">
        <Carousel images={dragon?.flickr_images || []} />
        <Heading textAlign="center" marginBottom="10px" level={2}>
          {dragon?.name || " "}
        </Heading>
        <Text marginBottom="20px">
          {dragon?.description || " "}
          <LinkAws href={dragon?.wikipedia || " "}>Wikipedia</LinkAws>
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
