import "react-i18next";

import ptBR from "translations/pt-BR";

declare module "react-i18next" {
  export interface CustomTypeOptions {
    resources: typeof ptBR;
  }
}
