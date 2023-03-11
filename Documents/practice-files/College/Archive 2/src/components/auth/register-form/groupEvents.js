import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import { addTeamEvents, fetchEventsListStart } from "./redux/actions";

const GroupEvents = ({
  eventsList,
  getEventsList,
  loading,
  nextStep,
  prevStep,
  addEvents,
}) => {
  const [selectedEvents, setSelectedEvents] = React.useState([]);

  React.useEffect(() => {
    getEventsList();
  }, []);

  console.log(eventsList);

  const handleChange = e => {
    const events = [...selectedEvents, e.target.value];
    setSelectedEvents(events);
  };

  const goNext = () => {
    if (selectedEvents.length > 0) {
      let events = [];
      selectedEvents.forEach(event => {
        const eventFee = eventsList.find(
          eventItem => eventItem.eventName === event
        ).registrationFees;
        const eventObj = {
          eventName: event,
          eventFee,
        };
        events.push(eventObj);
      });
      addEvents(events);
      nextStep();
    }
  };

  return (
    <div className='parent-content'>
      <div className='individual-events-banner'>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <h2 className='mb-4'>
              Please select the <strong>Group</strong> events you want to
              participate in.
            </h2>
            <form>
              <div className='mb-1'>
                <select
                  class='form-select'
                  aria-label='Default select example'
                  multiple={true}
                  value={selectedEvents}
                  onChange={e => handleChange(e)}
                >
                  <option selected>
                    Click to select the various group events available
                  </option>
                  {eventsList.map(
                    (event, index) =>
                      event.maxTeamSize > 1 && (
                        <option key={index} value={event.eventName}>
                          {event.eventName} - Rs. {event.registrationFees}
                        </option>
                      )
                  )}
                </select>
              </div>
            </form>
            <div className='buttons mt-4'>
              <button
                onClick={prevStep}
                className=' border-2 border-[#0dff00] transition duration-500 hover:bg-[#0dff00] hover:font-bold text-[16px] hover:text-black p-2 rounded-[5px] w-[130px] mx-3'
              >
                Previous
              </button>
              <button
                onClick={goNext}
                className='border-2 border-[#0dff00] transition duration-500 hover:bg-[#0dff00] hover:font-bold text-[16px] hover:text-black p-2 rounded-[5px] w-[130px] mx-3'
              >
                Go Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  eventsList: state.eventLists.eventsList,
  loading: state.eventLists.isFetching,
});

const mapDispatchToProps = dispatch => ({
  getEventsList: () => dispatch(fetchEventsListStart()),
  addEvents: events => dispatch(addTeamEvents(events)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupEvents);
