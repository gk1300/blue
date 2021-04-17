import React, { useState } from "react";
import CampaignTable from "../components/CampaignTable";
import Modal from "../components/Modal";

const Campaigns = () => {
  const [tab, setTab] = useState("upcoming");
  const changeTab = (evt) => {
    setTab(evt.currentTarget.id);
    let i, tablinks;

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
  };
  return (
    <div style={{ marginBottom: "5%" }}>
      <Modal />
      <h1 className="content" style={{ color: "#2B416C" }}>
        Manage Campaigns
      </h1>
      <div className="tab content">
        <button
          className="tablinks active"
          id="upcoming"
          onClick={(e) => changeTab(e)}
        >
          Upcoming Campaigns
        </button>
        <button className="tablinks" id="live" onClick={changeTab}>
          Live Campaigns
        </button>
        <button className="tablinks" id="past" onClick={changeTab}>
          Past Campaigns
        </button>
      </div>
      <CampaignTable tab={tab} />
    </div>
  );
};

export default Campaigns;
