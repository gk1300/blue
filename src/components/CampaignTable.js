import React from "react";
import campData from "../sample.json";
import calender from "../assets/calendar.png";
import report from "../assets/report.png";
import file from "../assets/file.png";
import price from "../assets/Price.png";

const CampaignTable = ({ tab }) => {
  const datt = [...campData.data];

  const campaigns = datt.filter((item) => {
    let today = new Date().getTime();
    if (tab === "upcoming") {
      return item.createdOn > today;
    }
    if (tab === "past") {
      return item.createdOn < today;
    }

    if (tab === "live") {
      let itemDate = new Date(item.createdOn);
      if (
        itemDate.getFullYear() === new Date().getFullYear() &&
        itemDate.getMonth() === new Date().getMonth() &&
        itemDate.getDate() === new Date().getDate()
      ) {
        return true;
      }
    }
  });
  const monthsArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const viewPrice = () => {
    document.getElementById("myModal").style.display = "block";
  };

  const getMyDate = (item) => {
    let data = new Date(item.createdOn);
    let month = monthsArr[data.getMonth()];
    let year = data.getFullYear();
    let date = data.getDate();
    return `${month} ${year}, ${date}`;
  };
  return (
    <div className="content">
      <table className="c-table">
        <thead className="thead" style={{ paddingTop: "10px" }}>
          <tr>
            <th style={{ width: "15%" }}>DATE</th>
            <th style={{ width: "20%" }}>CAMPAIGN</th>
            <th style={{ width: "15%" }}>VIEW</th>
            <th colSpan="3">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((item, index) => (
            <tr key={index}>
              <td>
                <div>{getMyDate(item, index)}</div>
                <div style={{ color: "#7788A3" }}>
                  {tab === "upcoming"
                    ? `${
                        new Date(item.createdOn).getDate() -
                        new Date().getDate()
                      } Days to go`
                    : tab === "past"
                    ? "expired"
                    : "currently live"}
                </div>
              </td>
              <td>
                <span>
                  <img
                    src={item.image_url}
                    alt="logo"
                    style={{ width: "30%" }}
                  ></img>
                </span>
                <span>{item.name}</span>
              </td>
              <td>
                <span>
                  <img src={price} style={{ width: "15%" }} alt="$"></img>
                </span>
                <span
                  onClick={viewPrice}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.cursor = "pointer")
                  }
                >
                  View Pricing
                </span>
              </td>
              <td>
                <span>
                  <img
                    src={file}
                    style={{ width: "20%" }}
                    alt="logo-file"
                  ></img>
                </span>
                <span>CSV</span>
              </td>
              <td>
                <span>
                  <img
                    src={report}
                    style={{ width: "16%" }}
                    alt="report-img"
                  ></img>
                </span>
                <span>Report</span>
              </td>
              <td>
                <span>
                  <img
                    src={calender}
                    style={{ width: "10%" }}
                    alt="cal-logo"
                  ></img>
                </span>
                <span>Schedule Again</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignTable;
