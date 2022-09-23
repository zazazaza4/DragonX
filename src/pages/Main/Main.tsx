import { Divider, Flex, Heading, Loader, View } from "@aws-amplify/ui-react";
import { FC } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";
import { ItemList } from "../../components";
import { withLayout } from "../../layout/Layout";
import { useGetDragonsQuery } from "../../redux/api/dragonApi";

const Main: FC = () => {
  const { isError, data = [], isLoading, refetch } = useGetDragonsQuery();

  if (isLoading) {
    return (
      <Flex height="100vh" justifyContent="center" alignItems="center">
        <Loader width="10rem" />
      </Flex>
    );
  }

  const handleRefresh = (): Promise<any> => new Promise((resolve) => refetch());
  return (
    <View as="main" className="main">
      <PullToRefresh onRefresh={handleRefresh}>
        <View margin="20px 10px">
          <Heading textAlign="center" marginBottom="10px" level={2}>
            Dragons
          </Heading>
          <Divider marginBottom="30px" />
          <>
            {data.map((item) => {
              return <ItemList dragon={item} key={item.id} />;
            })}
          </>
        </View>
      </PullToRefresh>
    </View>
  );
};
export default withLayout(Main);
