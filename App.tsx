// @ts-ignore
import * as React from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, Text, Button } from "react-native";

import "./i18n";

const lngs = {
  en: { nativeName: "English (United States)" },
  "pt-BR": { nativeName: "Português (Brasil)" },
};

const ExampleComponent = () => {
  const { i18n } = useTranslation();

  return (
    <View>
      {Object.keys(lngs).map((lng) => (
        <Button
          key={lng}
          onPress={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
          title={lngs[lng as keyof typeof lngs].nativeName}
        />
      ))}
    </View>
  );
};

export default () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("Welcome to React")}</Text>
      <ExampleComponent />
      <Text>{t("key", { count: 4 })}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
});
