import { Divider, Flex, Heading, Loader, View } from "@aws-amplify/ui-react";
import { FC } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";
import { Announcement, ItemList } from "../../components";
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
      <View>
        <Announcement>Dragons</Announcement>
        <PullToRefresh onRefresh={handleRefresh}>
          <Flex
            margin="20px auto"
            maxWidth="900px"
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            {data.map((item) => {
              return <ItemList dragon={item} key={item.id} />;
            })}
          </Flex>
        </PullToRefresh>
      </View>
    </View>
  );
};
export default withLayout(Main);
