import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./eventDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
// import getEventDetails from "../../../services/getEventDetails";
import { clearEventDetails, getEventDetailsStart } from "./actions";
import { HashLink } from "react-router-hash-link";
import moment from "moment";
function EventDetails({
  getEventDetailsStart,
  eventDetails,
  loading,
  clearEventDetails,
  // eventId,
}) {
  const location = useLocation();
  const data = location.state?.data;

  const [eventId, setEventId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const pathname = window.location.pathname;
    const eventId = atob(pathname.split("/").pop()); // get the last part of the pathname
    setEventId(eventId);
    getEventDetailsStart(eventId);
    return () => {
      clearEventDetails();
    };
  }, []);

  console.log(eventDetails);
  console.log(eventId);

  // console.log(data.team_size);

  return loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: 32,
        }}
      >
        <div class='wrapper'>
          <div class='circle'></div>
          <div class='circle'></div>
          <div class='circle'></div>
          <div class='shadow'></div>
          <div class='shadow'></div>
          <div class='shadow'></div>
        </div>
      </h1>
    </div>
  ) : eventDetails ? (
    <div className='max-w-7xl mx-auto h-screen'>
      <div className=' p-[120px] pt-[50px] flex items-center justify-between'>
        <div className='flex self-start flex-col gap-4'>
          <img
            src={eventDetails.img}
            alt='ima'
            className='h-[250px] w-[250px]'
          />
          {moment().format("YYYY-MM-DD, h:mm:ss a") <
          "2023-03-13, 5:00:00 pm" ? (
            <button
              className='reg ml-4'
              onClick={() =>
                alert("Registration will start from 13th March 2023, 5 pm")
              }
            >
              Register Now
            </button>
          ) : (
            <HashLink to='/register'>
              <button className='reg'>Register Now</button>
            </HashLink>
          )}
        </div>
        <div className='h-auto ml-10 w-[800px]'>
          <h1 className='event_name pt-0 pb-0 p-10 text-[35px] tracking-[1px] font-bold text-white'>
            {eventDetails.name}
          </h1>
          <h1 className='text-[30px] pt-0 mt-4 pb-0 font-space p-10'>
            Mode: {eventDetails.mode}
          </h1>
          <div className='flex flex-col gap-3 p-10 pt-0 mt-4 text-[18px] font-medium pb-0'>
            <p>Venue : {eventDetails.Venue}</p>
            <p>Time : {eventDetails.Time}</p>
            <p>Date : {eventDetails.Date}</p>
            <p>Duration : {eventDetails.Duration}</p>
            <h2>Registration Fee : {eventDetails.registrationFees}</h2>
            <div className=''>
              <h2 className='text-[#09ff00] text-[20px] underline py-2'>
                FacultyCoordinator
              </h2>
              <p className='p-3'>
                {eventDetails?.facultyCoordinator?.map(x => (
                  <div>
                    <div>
                      <li>Name : {x.Name}</li>
                    </div>
                  </div>
                ))}
              </p>
            </div>
            <h2 className='text-[#09ff00] text-[20px] underline py-2'>
              StudentCoordinator
            </h2>
            <div className='p-3'>
              <div className='flex gap-5'>
                {eventDetails?.studentCoordinator?.map(x => (
                  <div className=''>
                    <div className=''>
                      <p>Name : {x.Name}</p>
                      <p>Department: {x.Dept}</p>
                      <p>Year: {x.Year}</p>
                      <p>Contact: {x.contact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=''>
              <h1 className='text-[30px] mb-3 text-[#09ff00] underline font-space'>
                Description
              </h1>
              <p className=' text-[16px] py-2 w-full text-justify'>
                {eventDetails.description}
              </p>
              <h1 className='text-[30px] mb-3 mt-3 underline font-space text-[#09ff00] '>
                Rules
              </h1>
              <p className='w-full'>{eventDetails.rules}</p>
              {/* {eventId.subString(ece)} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    navigate("/events")
  );
}

const mapStateToProps = state => ({
  eventDetails: state.eventDetails.eventDetails,
  loading: state.eventDetails.isFetching,
  eventId: state.eventSetter.eventId,
});

const mapDispatchToProps = dispatch => ({
  getEventDetailsStart: eventId => dispatch(getEventDetailsStart(eventId)),
  clearEventDetails: () => dispatch(clearEventDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
