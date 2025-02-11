// export default {
//     name: "review",
//     title: "Review",
//     type: "document",
//     fields: [
//       {
//         name: "reviewerName",
//         title: "Reviewer Name",
//         type: "string",
//       },
//       {
//         name: "rating",
//         title: "Rating",
//         type: "number",
//       },
//       {
//         name: "comment",
//         title: "Comment",
//         type: "text",
//       },
//       {
//         name: "car",
//         title: "Car",
//         type: "reference",
//         to: [{ type: "car" }],
//       },
//       {
//         name: "createdAt",
//         title: "Created At",
//         type: "datetime",
//       },
//     ],
//   };
  
import { Rule } from "sanity";

const reviewSchema= {
  name: "review",
  type: "document",
  title: "Review",
  fields: [
    {
      name: "car",
      type: "reference",
      to: [{ type: "car" }],
      title: "Car",
      validation: (Rule: Rule) => Rule.required(), // Ensure the car reference is mandatory
    },
    {
      name: "reviewerName",
      type: "string",
      title: "Reviewer Name",
      validation: (Rule: Rule) => Rule.required().min(2).max(50), // Ensure name is required and has valid length
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      validation: (Rule: Rule) => Rule.required().min(1).max(5), // Ensure rating is between 1 and 5
    },
    {
      name: "comment",
      type: "text",
      title: "Comment",
      validation: (Rule: Rule) => Rule.required().min(10).max(500), // Optional: Ensure comments have a meaningful length
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      initialValue: () => new Date().toISOString(), // Automatically set the current date
      validation: (Rule: Rule) => Rule.required(), // Ensure createdAt is mandatory
    },
  ],
};
export default reviewSchema