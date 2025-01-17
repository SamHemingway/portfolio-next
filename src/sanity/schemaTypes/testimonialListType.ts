import { HeartFilledIcon, ListIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const testimonialListType = defineType({
  name: "testimonialList",
  title: "Testimonial List",
  description:
    "The testimonials that will be displayed on the homepage in the 'testimonials' section",
  type: "document",
  icon: ListIcon,
  fields: [
    defineField({
      name: "testimonials",
      title: "Testimonial References",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "testimonial" }],
          preview: {
            select: {
              title: "name",
              media: "headshot",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      testimonial0: "testimonials.0.name",
      testimonial1: "testimonials.1.name",
      testimonial2: "testimonials.2.name",
      testimonial3: "testimonials.3.name",
    },
    prepare({ testimonial0, testimonial1, testimonial2, testimonial3 }) {
      const testimonials = [
        testimonial0,
        testimonial1,
        testimonial2,
        testimonial3,
      ].filter(Boolean);
      const subtitle =
        testimonials.length > 0 ? testimonials.join(", ") : "No testimonials";
      return {
        title: `Testimonials`,
        subtitle,
        media: HeartFilledIcon,
      };
    },
  },
});
