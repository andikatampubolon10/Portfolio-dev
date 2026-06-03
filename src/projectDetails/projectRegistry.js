import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  "hris": lazy(() => import("./HRISDetail")),
  "cbt": lazy(() => import("./CBTDetail")),
  "sis": lazy(() => import("./SISDetail")),
  floodsegmen: lazy(() => import("./FloodSegmenDetail")),
  qmeal: lazy(() => import("./QMealDetail")),
  lostandfound: lazy(() => import("./LostAndFoundDetail")),
  imageclas: lazy(() => import("./ImageClasDetail")),
  "financial-assistant-bot": lazy(() => import("./FinancialAssistantDetail")),
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}
