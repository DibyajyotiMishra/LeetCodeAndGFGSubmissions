import React from "react";
import { connect } from "react-redux";
// import Workshop from "./workshop.js"
import { setEventId } from "../actions";
import "../main.css";
import { event,EceEvent } from "../../../../data/data";
import { Link } from "react-router-dom";

function EceIndex({ setEvent, isOpen }) {
  function onClick(eventId) {
    setEvent(eventId);
  }

  return (
    <>
      {EceEvent.map((det) => {
        return (
          <>
            <div className="m-4">
              <h1 className="text-white text-center p-3 text-[35px]">
                {det.category}
              </h1>
            </div>
            <div className="main1">
              <div className="container12">
                {det.gameDetails.map((details) => {
                  console.log(details.length);
                  return (
                    <div className="card">
                      <div className="imgBox">
                        <img src={details.image} alt='tech photo' />
                      </div>
                      <div className="content">
                        <div className="details">
                          <h2 className="p-2">{details.name}</h2>
                          <h3 className="p-4">{details.about}</h3>
                          <p>Mode - {details.mode}</p>
                          <Link
                            to={`/events${details.link}`}
                            state={{ data: details }}
                          >
                            <button
                              className="bg-[blue] text-white p-3 rounded-[5px] m-3"
                              onClick={() => onClick(details.documentId)}
                            >
                              Read More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEvent: (eventId) => dispatch(setEventId(eventId)),
  };
};

export default connect(null, mapDispatchToProps)(EceIndex);
