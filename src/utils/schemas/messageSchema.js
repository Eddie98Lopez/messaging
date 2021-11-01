import * as Yup from "yup";

const messageSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  receiver: Yup.string().required("Recipient is required"),
  body: Yup.string().required("Message is required"),
});

export default messageSchema;
