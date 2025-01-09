import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { headerType } from "./headerType";
import { skillPillType } from "./skillPillType";
import { impactCardType } from "./impactCardType";
import { skillBoxType } from "./skillBoxType";
import { skillPillListType } from "./skillPillListType";
import { skillBoxListType } from "./skillBoxListType";
import { experienceBlockType } from "./experienceBlockType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    headerType,
    impactCardType,
    skillPillType,
    skillBoxType,
    skillPillListType,
    skillBoxListType,
    experienceBlockType,
  ],
};
