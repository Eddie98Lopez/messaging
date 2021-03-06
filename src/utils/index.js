import { axiosWithAuth } from "./axiosWithAuth";
import { baseUrl } from "./baseUrl";

import loginSchema from "./schemas/loginSchema";
import messageSchema from "./schemas/messageSchema";

import { StoreProvider } from "./context/StoreProvider";
import { useStore } from "./context/useStore";

import { fetchMessages } from "./fetchMessages";
import { deleteMessage } from "./deleteMessage";
import { replyMessage } from "./replyMessage";
import { readMessage } from "./readMessage";

import {
  newErrAction,
  closeErrAction,
  readMsgAction,
  getMsgsAction,
  delMsgAction,
  resetReply,
  replyMsgAction
} from "../utils/context/actions";
import { sendErrMsg, deleteErrMsg, getMsgsErr } from "../utils/error_messages";

export {
  loginSchema,
  messageSchema,
  axiosWithAuth,
  StoreProvider,
  baseUrl,
  fetchMessages,
  deleteMessage,
  useStore,
  newErrAction,
  closeErrAction,
  readMsgAction,
  getMsgsAction,
  delMsgAction,
  sendErrMsg,
  deleteErrMsg,
  getMsgsErr,
  replyMessage,
  readMessage,
  resetReply, 
  replyMsgAction

};
