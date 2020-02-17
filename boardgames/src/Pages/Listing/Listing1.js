import React, { useEffect, useState } from 'react';
import { Label, Card, Rating, Icon, Feed, Segment, Divider, Image, Header, Button, Grid, Confirm } from "semantic-ui-react";

const Listing = ({val}) => {
  return (
      <Card>
        <Image src='./test.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>{val.game}</Card.Header>
          <Card.Meta>{val.minPlayers + "-" + val.maxPlayers + " Players"}</Card.Meta>
          <Card.Description>
            {val.description}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <h4> Tags </h4>
          <div>
            <Button compact size='mini'>Family friendly</Button>
            <Button compact size='mini'>Funny</Button>
          </div>
        </Card.Content>
        <Card.Content>
          <Feed>
            <h4> Owner </h4>
            <Feed.Event>
              <Feed.Label image='./test.jpg' />
              <Feed.Content>
                <Feed.Summary>
                  John Smith<br />
                  <Feed.Date content='johnsmith335' />
                  <br />
                  <Rating defaultRating={3} maxRating={5} disabled />
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
        <Card.Content>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Button attached='left'>Contact User</Button>
            <Button color='yellow' attached='right'>Request Rental</Button>
          </div>
        </Card.Content>
      </Card>
  );
}
export default Listing;