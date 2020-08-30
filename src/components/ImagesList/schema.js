import * as Yup from "yup";

export const addFavoriteSchema = Yup.object({
  list: Yup.string().required("Please select a list to add"),
  description: Yup.string().required("Description is required"),
});
