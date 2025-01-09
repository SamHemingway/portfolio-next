import { HeartFilledIcon, ListIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const skillBoxListType = defineType({
  name: "skillBoxList",
  title: "Skill Box List",
  description:
    "The skill boxes that will be displayed on the homepage in the 'about' section",
  type: "document",
  icon: HeartFilledIcon,
  fields: [
    defineField({
      name: "skillBoxes",
      title: "Skill Box References",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "skillBox" }],
          preview: {
            select: {
              title: "title",
              media: "image",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      skillBox0: "skillBoxes.0.title",
      skillBox1: "skillBoxes.1.title",
      skillBox2: "skillBoxes.2.title",
      skillBox3: "skillBoxes.3.title",
    },
    prepare({ skillBox0, skillBox1, skillBox2, skillBox3 }) {
      const boxes = [skillBox0, skillBox1, skillBox2, skillBox3].filter(
        Boolean
      );
      const subtitle = boxes.length > 0 ? boxes.join(", ") : "No skill boxes";
      return {
        title: `Skill Boxes`,
        subtitle,
        media: ListIcon,
      };
    },
  },
});
