import { StarFilledIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const experienceBlockType = defineType({
  name: "experienceBlock",
  title: "Experience Block",
  description:
    "The experience blocks that will be displayed on the homepage on the 'experience & projects' section",
  type: "document",
  icon: StarFilledIcon,
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
      type: "image",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
    }),
    defineField({
      name: "main",
      title: "Is this the main experience block?",
      type: "boolean",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title: title,
      media: StarFilledIcon,
    }),
  },
});
