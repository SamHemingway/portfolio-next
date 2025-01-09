import { HeartFilledIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const skillBoxType = defineType({
  name: "skillBox",
  title: "Skill Box",
  description:
    "The skill box that will be displayed on the homepage in the 'about' section",
  type: "document",
  icon: HeartFilledIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "No title",
        media: HeartFilledIcon,
      };
    },
  },
});
