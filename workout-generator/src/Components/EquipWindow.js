import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const EquipWindow = ({ name, description, url }) => (
  <Modal trigger={<Button style={{ boxShadow: "none" }} icon="question circle" size="tiny" circular basic />}>
    <Modal.Header>{ name }</Modal.Header>
    <Modal.Content image>
      <Image
        wrapped
        size="medium"
        src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
      />
      <Modal.Description>
        <Header>About</Header>
        <p>
          { description }
        </p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default EquipWindow;
