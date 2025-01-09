import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Hero Section")
    .items([
      S.documentTypeListItem("header").title("Header"),
      S.documentTypeListItem("skillPillList").title("Skill Pill List"),
      S.documentTypeListItem("impactCard").title("Impact Card"),
      S.documentTypeListItem("skillBoxList").title("Skill Box List"),
      S.documentTypeListItem("experienceBlock").title("Experience Block"),
      S.divider(),
    ]);
