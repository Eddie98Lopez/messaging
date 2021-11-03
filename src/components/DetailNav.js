import React from "react";
import { DetailButtons, Button, Icon } from "./styled-components";
import { deleteIcon, reply, backIcon } from "../design-assets";
import { useStore, deleteMessage, replyMessage } from "../utils";
import { useHistory, useParams } from "react-router";

const DetailNav = (props) => {
  const { title, sender } = props.message;
  const { folder, id } = useParams();
  const { dispatch } = useStore();
  const { push } = useHistory();

  const deleteAndGoBack = () => {
    deleteMessage(dispatch, id);
    push(`/dash/folder/${folder}`);
  };

  const toReply = (e) => {
    e.stopPropagation();
    replyMessage(dispatch,{title,sender})
    push("/dash/compose");
  };

  return (
    <DetailButtons>
      <div>
        <Button onClick={() => push(`/dash/folder/${folder}`)}>
          <Icon img={backIcon} alt="go back" />
        </Button>
      </div>

      <div>
        <Button onClick={toReply}>
          <Icon img={reply} alt="reply" />
        </Button>

        <Button onClick={deleteAndGoBack}>
          <Icon img={deleteIcon} alt="delete" />
        </Button>
      </div>
    </DetailButtons>
  );
};

export default DetailNav;
