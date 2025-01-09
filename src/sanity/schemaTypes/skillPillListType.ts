import { ListIcon, SparklesIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const skillPillListType = defineType({
  name: "skillPillList",
  title: "Skill Pill List",
  description:
    "The skill pill list that will be displayed on the homepage on the hero section",
  type: "document",
  icon: SparklesIcon,
  fields: [
    defineField({
      name: "skillPills",
      title: "Skill Pills",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "skillPill" }],
          preview: {
            select: {
              title: "skill",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      skill0: "skillPills.0.skill",
      skill1: "skillPills.1.skill",
      skill2: "skillPills.2.skill",
      skill3: "skillPills.3.skill",
    },
    prepare(selection) {
      const { skill0, skill1, skill2, skill3 } = selection;
      const skills = [skill0, skill1, skill2, skill3].filter(Boolean);

      const subtitle = skills.length > 0 ? skills.join(", ") : "No skills";

      return {
        title: `Skill Pills`,
        subtitle,
        media: ListIcon,
      };
    },
  },
});
