import { FC } from 'react';
import { Text, View } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';

import styles from '../../styles/global.module.css';
import { MAIN_ROUTE } from '../../utils/consts';

const Error: FC = () => {
  return (
    <View fontSize="3rem" textAlign="center" margin="10px">
      Something went wrong
      <Text fontSize="2rem">
        <Link
          to={MAIN_ROUTE}
          data-testid="go-to-home"
          className={styles.link}
          style={{ color: '#233', textDecoration: 'underline' }}>
          Go to Home
        </Link>
      </Text>
    </View>
  );
};

export default Error;
