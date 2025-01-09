import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const headerType = defineType({
  name: "header",
  title: "Header",
  type: "document",
  icon: TextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
