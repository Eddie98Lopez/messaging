import { axiosWithAuth } from "./axiosWithAuth";
import loginSchema from "./schemas/loginSchema";
import { MessagesContext, MessagesProvider, useStore } from "./context/MessageListContext";
import messageSchema from "./schemas/messageSchema";
import { baseUrl } from "./baseUrl";
import { fetchMessages } from "./fetchMessages";
import {deleteMessage} from './deleteMessage'

export {
  loginSchema,
  messageSchema,
  axiosWithAuth,
  MessagesContext,
  MessagesProvider,
  baseUrl,
  fetchMessages,
  deleteMessage,
  useStore
};
