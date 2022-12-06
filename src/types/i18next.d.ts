import "i18next";
import { CustomTypeOptions } from "react-i18next";

declare module "i18next" {
  type SupportedLanguages = "pt-BR";

  type DefaultResource = Record<
    SupportedLanguages,
    CustomTypeOptions["resources"]
  >;

  interface Resource extends DefaultResource {}
}
