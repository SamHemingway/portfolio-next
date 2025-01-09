import { defineQuery } from "next-sanity";

export const HEADER_QUERY = defineQuery(`*[_type == "header"][0]{
  title
}`);

export const IMPACT_CARD_QUERY = defineQuery(`*[_type == "impactCard"]`);

export const SKILL_PILL_QUERY = defineQuery(`*[_type == "skillPill"]`);

export const SKILL_BOX_QUERY = defineQuery(`*[_type == "skillBox"]`);

export const SKILL_PILL_LIST_QUERY =
  defineQuery(`*[_type == "skillPillList"][0]{
  skillPills[]->{
    skill
  }
}`);

export const SKILL_BOX_LIST_QUERY = defineQuery(`*[_type == "skillBoxList"][0]{
  skillBoxes[]->{
    title,
    content,
    image
  }
}`);

export const EXPERIENCE_BLOCK_QUERY = defineQuery(
  `*[_type == "experienceBlock"]`
);

export const SOFT_SKILLS_QUERY =
  defineQuery(`*[_type == "skillPillList" && skillPills[]->skill match "*deep discovery*"][0]{
  skillPills[]->{
    skill
  }
}`);

export const HARD_SKILLS_QUERY =
  defineQuery(`*[_type == "skillPillList" && skillPills[]->skill match "*react*"][0]{
  skillPills[]->{
    skill
  }
}`);
