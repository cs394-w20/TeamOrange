import React, { useState, useEffect } from "react";
import { Checkbox, Header, Image, Modal } from "semantic-ui-react";

const useStateWithLocalStorage = localStorageKey => {
  const storageValue = localStorage.getItem(localStorageKey);
  const [showInfo, setshowInfo] = useState(
    storageValue !== undefined ? storageValue === "true" : true
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, showInfo);
  }, [showInfo, localStorageKey]);
  return [showInfo, setshowInfo];
};

const ModalWindow = () => {
  const [showInfo, setShowInfo] = useStateWithLocalStorage("showInfo");
  const onChange = (event, data) => setShowInfo(!data.checked);
  console.log(showInfo, "showing info modal window");
  console.log("cookies:", localStorage);

  return (
    <Modal size="small" defaultOpen={showInfo} closeIcon>
      <Modal.Header>What is H.I.I.T.?</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/one-change-improve-hiit-workout-preformance-1513345031.jpg?resize=480:*"
        />
        <Modal.Description>
          <Header>Here's what we found</Header>
          <p>
            Cardiovascular exercise strategy alternating short periods of
            intense anaerobic exercise with less intense recovery periods.
            Sounds fun right?
          </p>
        </Modal.Description>
      </Modal.Content>
      <Checkbox
        style={{ margin: "20px", marginTop: "0px" }}
        label="Do not show on my next visit."
        onChange={onChange}
      />
    </Modal>
  );
};
export default ModalWindow;
