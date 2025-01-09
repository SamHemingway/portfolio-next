import { ApiIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const skillPillType = defineType({
  name: "skillPill",
  title: "Skill Pill",
  description:
    "The skill pills that will be displayed on the homepage on the hero section",
  type: "document",
  icon: ApiIcon,
  fields: [
    defineField({
      name: "skill",
      title: "Skill",
      type: "string",
    }),
  ],
  preview: {
    select: {
      skill: "skill",
    },
    prepare({ skill }) {
      return {
        title: skill || "No skill name",
        media: ApiIcon,
      };
    },
  },
});
