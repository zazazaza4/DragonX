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
        backgroundColor={tokens.colors.blue[60]}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          onClick={() => navigate("/")}
          color={tokens.colors.white}
          level={4}
          className={styles.link}
        >
          DragonX
        </Heading>
        <Text textAlign="center" color={tokens.colors.white}>
          MadAppGang internship test – JavaScript developer intern
        </Text>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="center"
        padding="5px 30px"
        backgroundColor={tokens.colors.blue[80]}
        direction="row"
      >
        <View color={tokens.colors.white}>
          Copyright © 2020 - {new Date().getFullYear()} DragonX
        </View>
        <View></View>
      </Flex>
    </View>
  );
};
