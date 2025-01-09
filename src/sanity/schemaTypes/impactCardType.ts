import { ConfettiIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const impactCardType = defineType({
  name: "impactCard",
  title: "Impact Card",
  description:
    "The impact cards that will be displayed on the homepage on the hero section",
  type: "document",
  icon: ConfettiIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      content: "content",
    },
    prepare: ({ title, content }) => ({
      title: title,
      subtitle: content,
      media: ConfettiIcon,
    }),
  },
});
