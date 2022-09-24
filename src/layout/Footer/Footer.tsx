import { FooterProps } from "./Footer.props";

import { Flex, Heading, Text, useTheme, View } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

import styles from "../../styles/global.module.css";

export const Footer = ({ className = "" }: FooterProps) => {
  const { tokens } = useTheme();
  const navigate = useNavigate();

  return (
    <View as="footer" className={className}>
      <Flex
        padding="20px"
        backgroundColor={tokens.colors.brand.primary[80]}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          onClick={() => navigate("/")}
          color={tokens.colors.white}
          level={4}
          className={styles.link_scale}
        >
          DragonX
        </Heading>
        <Text textAlign="center" color={tokens.colors.white}>
          MadAppGang internship test – JavaScript developer intern
        </Text>
      </Flex>
    </View>
  );
};
