import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./dash.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./makePDF.js";
import { Button, Box, Tab, Tabs } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PropTypes from "prop-types";
import { getUserDetails } from "../../services/registerUser";

import getEvents from "../../services/getEvents.js";
import { signout } from "../../services/SignOut";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Profile = ({ eventDetails, setUserL }) => {
  const [events, setEvents] = useState([]);

  const [userDetials, setUser] = useState({});
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSignOut = () => {
    signout({ setUserL });
  };

  const getData = async (user) => {
    const data = await getUserDetails(user);
    var evtList = data.events.map((evt) => evt.eventName);

    var groupEvents = data.groupEvents.map((evt) => evt.eventName);
    evtList = [...evtList, ...groupEvents];
    setUser(data);
    console.log(data);
    const evt = await getEvents(evtList);
    setEvents(evt);
  };

  useEffect(() => {
    const user = "dhruvmillu@gmail.com";
    getData(user);
  }, []);

  return (
    <div className="p-[50px]  text-[#fff] grid-cols-1 md:grid-cols-2 gap-x-5 grid ">
      <div className="flex flex-col align">
        <div className=" tracking-[3px] text-[30px] md:text-[40px] font-bold px-10 mb-3">
          Profile
        </div>
        <div className="p-10 border-[#0dff00] border-2 rounded-[10px]  shadow-[5px_10px_30px_-1px_#0dff00] mb-4">
          <div className="grid pf grid-cols-1">
            <div className=" text-[#0dff00] font-bold  md:text-[20px]">
              Name
            </div>
            <div className="mb-[10px]">{userDetials.name}</div>
            <div className=" text-[#0dff00] font-bold  md:text-[20px]">
              Email
            </div>
            <div className="mb-[10px]">{userDetials.email}</div>
            <div className=" text-[#0dff00] font-bold  md:text-[20px]">
              Phone
            </div>
            <div className="mb-[10px]">{userDetials.phone}</div>
            <div className=" text-[#0dff00] font-bold  md:text-[20px]">
              Phone (Whatsapp)
            </div>
            <div className="mb-[10px]">{userDetials.phoneWh}</div>
            <div className=" text-[#0dff00] font-bold  md:text-[20px]">
              College Name
            </div>
            <div className="mb-[10px]">{userDetials.collegeName}</div>
            <div className=" text-[#0dff00] font-bold  md:text-[20px]">
              City
            </div>
            <div className="mb-[10px]">{userDetials.city}</div>
            <button onClick={handleSignOut} className="text-white">
              Sign Out
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row flex-wrap justify-between align-middle">
          <div className=" tracking-[3px] text-[30px] font-bold md:px-10 my-3">
            Event Details
          </div>
          <div>
            {userDetials && events.length > 0 && (
              <Button className="p-2">
                <PDFDownloadLink
                  document={<MyDocument events={events} data={userDetials} />}
                  fileName="Acknowledgement.pdf"
                  className="hover:bg-[#0dff00] hover:text-[#000] bg-[#000] text-[#0dff00] font-bold p-1 rounded-[5px] transition-all text-[15px]"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? (
                      "Loading document..."
                    ) : (
                      <div className="border-[#0dff00] border-2 rounded-[5px] p-[10px]">
                        <FileDownloadIcon /> Download
                      </div>
                    )
                  }
                </PDFDownloadLink>
              </Button>
            )}
          </div>
        </div>
        <div className="md:pl-[20px] mb-4">
          <Box sx={{ borderBottom: 1, borderColor: "#0dff00" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="primary"
              sx={{
                "& .MuiTabs-indicator": {
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#0dff00",
                },
                "& .MuiTab-textColorPrimary": {
                  color: "#0dff00",
                },
                "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                  color: "#0dff00",
                },
                "& .MuiTab-root": {
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "15px",
                },
              }}
            >
              <Tab label="Single Events" {...a11yProps(0)} />
              <Tab label="Team Events" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="grid grid-cols-[5fr_1fr]">
              <div className=" text-[#fff] font-bold text-[15px]">
                Event Name
              </div>
              <div className="text-[#fff] font-bold text-[15px]">Fee</div>
              {userDetials.events &&
                userDetials.events.map((event) => (
                  <>
                    <div>{event.eventName}</div>
                    <div>{event.fee}</div>
                  </>
                ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="grid grid-cols-[5fr_1fr]">
              <div className=" text-[#fff] font-bold text-[15px]">
                Event Name
              </div>
              <div className="text-[#fff] font-bold text-[15px]">Fee</div>
              {userDetials.groupEvents &&
                userDetials.groupEvents.map((event) => (
                  <>
                    <div>{event.eventName}</div>
                    <div>{event.fee}</div>
                  </>
                ))}
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  eventDetails: state.eventDetails.eventDetails,
});

export default connect(mapStateToProps, null)(Profile);
