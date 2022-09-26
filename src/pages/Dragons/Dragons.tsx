import { Flex, Loader, View } from '@aws-amplify/ui-react';
import { FC } from 'react';
import PullToRefresh from 'react-simple-pull-to-refresh';
import { Announcement, Error, ItemList } from '../../components';
import { withLayout } from '../../layout/Layout';
import { useGetDragonsQuery } from '../../redux/api/dragonApi';

const Dragons: FC = () => {
  const { isError, data = [], isLoading, refetch } = useGetDragonsQuery();

  if (isLoading) {
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

  const handleRefresh = (): Promise<any> => new Promise((resolve) => refetch());

  return (
    <View as="main" data-testid="main">
      <View margin="0 10px">
        <Announcement>Dragons</Announcement>
        <PullToRefresh onRefresh={handleRefresh}>
          <Flex
            margin="40px auto"
            maxWidth="900px"
            alignItems="center"
            gap="40px"
            justifyContent="center"
            direction="column">
            {data.map((item) => {
              return <ItemList dragon={item} key={item.id} />;
            })}
          </Flex>
        </PullToRefresh>
      </View>
    </View>
  );
};
export default withLayout(Dragons);
