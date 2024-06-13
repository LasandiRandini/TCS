


// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import 'react-datetime/css/react-datetime.css';
// import magazine from "../assets/Mag.jpg";

// const PHome = () => {
//   const [events, setEvents] = useState([]);
//   const [notices, setNotices] = useState([]);
//   const [eventsError, setEventsError] = useState(null);
//   const [noticesError, setNoticesError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user"));
//   console.log(user);

//   const handleEventClick = (clickInfo) => {
//     const { type } = clickInfo.event.extendedProps;
//     if (type === 'practical') {
//       navigate('/Practical');
//     } else if (type === 'quiz') {
//       navigate('/Quiz');
//     } else {
//       navigate('/PHome');
//     }
//   };

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get('http://localhost:8800/api/events/getAllEvents', {
//           params: { academicYear: user.al_year }
//         });
//         setEvents(response.data);
//       } catch (err) {
//         setEventsError(err.response ? err.response.data.message : 'Network Error');
//       }
//     };

//     const fetchNotices = async () => {
//       try {
//         const response = await axios.get('http://localhost:8800/api/Notices/getNotice');
//         setNotices(response.data);
//       } catch (err) {
//         setNoticesError(err.response ? err.response.data.message : 'Network Error');
//       }
//     };

//     Promise.all([fetchEvents(), fetchNotices()]).finally(() => setLoading(false));
//   }, [user.al_year]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="md:px-12 p-4 mt-20">
     
   

//       <div className="rounded-s-3xl bg-white md:px-5 w-500 z-5">
//         {eventsError ? (
//           <p className="text-red-500">Error: {eventsError}</p>
//         ) : (
//           <FullCalendar
//             plugins={[dayGridPlugin]}
//             initialView="dayGridMonth"
//             events={events}
//             eventContent={renderEventContent}
//             eventClick={handleEventClick}
//             height={600}
//             headerToolbar={{
//               start: 'prev,next',
//               center: 'title',
//               end: 'today'
//             }}
//             dayHeaderContent={renderDayHeader}
//             firstDay={1} // Start the week on Monday
//           />
//         )}
//       </div>

//       <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
//         <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
//           {noticesError ? (
//             <p className="text-red-500">Error: {noticesError}</p>
//           ) : (
//             notices.map((notice, index) => (
//               <div key={index} className="bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl p-8 hover:-translate-y-4 transition-all duration-300">
//                 <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                   <p className="md:text-2xl text-1xl text-center font-bold mb-6 leading-relaxed">{notice.name}</p>
//                   <p className="md:text-1xl text-1xl mb-6 leading-relaxed">{notice.n_description}</p>
//                   <img src={`http://localhost:8800/public/image/${notice.image}`} alt={notice.image} className="w-full h-auto pt-6 lg:h-[400px]" />
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-24">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="md:w-1/3">
//             <img src={magazine} alt="" className="lg:h-[400px]" />
//           </div>
//           <div className="md:w-4/5">
//             <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal text-blue-800">
//               We have been improving our product <span>for many years.</span>
//             </h2>
//             <p className="text-black text-lg mb-7">
//               A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.
//             </p>
//             <button className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300">
//               View Magazine
//             </button>
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// function renderDayHeader(arg) {
//   return <div className="text-red-800 no-underline">{arg.text}</div>;
// }

// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i className="text-xs font-medium text-white text-center ml-1 overflow-hidden whitespace-nowrap text-ellipsis">{eventInfo.event.title}</i>
//     </>
//   );
// }

// export default PHome;

import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import 'react-datetime/css/react-datetime.css';

import magazine1 from "../assets/magazine1.jpg";
import magazine2 from "../assets/magazine2.jpg";
import CLASS from '../assets/class.png';

const PHome = () => {
  const [events, setEvents] = useState([]);
  const [notices, setNotices] = useState([]);
  const [eventsError, setEventsError] = useState(null);
  const [noticesError, setNoticesError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const handleEventClick = (clickInfo) => {
    const { type } = clickInfo.event.extendedProps;
    if (type === 'practical') {
      navigate('/Practical');
    } else if (type === 'quiz') {
      navigate('/Quiz');
    } else {
      navigate('/PHome');
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/events/getAllEvents', {
          params: { academicYear: user.al_year }
        });
        setEvents(response.data);
      } catch (err) {
        setEventsError(err.response ? err.response.data.message : 'Network Error');
      }
    };

    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/Notices/getNotice');
        setNotices(response.data);
      } catch (err) {
        setNoticesError(err.response ? err.response.data.message : 'Network Error');
      }
    };

    Promise.all([fetchEvents(), fetchNotices()]).finally(() => setLoading(false));
  }, [user.al_year]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="md:px-12 p-4  min-h-screen">
       <div
        className="background-image"
        style={{ backgroundImage: `url(${CLASS})` }}
      ></div>
      

        <div className="container my-20 px-2 md:px-12 p-4 min-h-screen rounded-lg shadow-md   mx-auto  bg-gray-300 bg-opacity-80">
          {eventsError ? (
            <p className="text-white font-bold">Error: {eventsError}</p>
          ) : (
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={events}
              eventContent={renderEventContent}
              eventClick={handleEventClick}
              height={600}
              headerToolbar={{
                start: 'prev,next today',
                center: 'title',
                end: ''
              }}
              dayHeaderContent={renderDayHeader}
              firstDay={1}
              displayEventTime={false}
            />
          )}
        </div>
   

      <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
          {noticesError ? (
            <p className="text-red-500">Error: {noticesError}</p>
          ) : (
            notices.map((notice, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="overflow-hidden">
                  <p className="md:text-2xl text-xl text-center font-bold mb-6">{notice.name}</p>
                  <p className="text-lg mb-6">{notice.n_description}</p>
                  <img src={`http://localhost:8800/public/image/${notice.image}`} alt={notice.image} className="w-full h-auto object-cover" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-2/3">
            <img src={magazine1} alt="Magazine" className="lg:h-[400px] object-cover rounded-lg shadow-md" />
          </div>
          <div className="md:w-4/5">
            <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal text-blue-200">
              Engineering Technology<span className="text-red-300"> MCQ BOOK</span>
            </h2>
            <p className="text-white text-2xl mb-7">
            විභාගයට අනුමාන MCQ ප්‍රශ්න 500 ක් ඇතුලත් ප්‍රශ්නෝත්තර සංග්‍රහය.විවරණ ET LABS අපගේ Youtube චැනලය හරහා නැරඹීමට හැක.


            </p>
            <h className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300">
            නිවසට ගෙන්වා ගැනිමට හා වැඩි විස්තර සදහා සම්බන්ධ වන්න.
            071 299 8333/076 277 2448 (whatsapp)
            h>
          </div>
        </div>
      </div> */}
      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-24">
  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
    <div className="md:w-2/3">
      <img src={magazine1} alt="Magazine" className="lg:h-[400px] object-cover rounded-lg shadow-md" />
    </div>
    <div className="md:w-4/5">
      <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal text-blue-200">
        Engineering Technology<span className="text-red-300"> MCQ BOOK</span>
      </h2>
      <p className="text-white text-2xl mb-7">
        විභාගයට අනුමාන MCQ ප්‍රශ්න 500 ක් ඇතුලත් ප්‍රශ්නෝත්තර සංග්‍රහය. විවරණ ET LABS අපගේ Youtube චැනලය හරහා නැරඹීමට හැක.
      </p>
      <p className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-500 transition-all duration-300">
        නිවසට ගෙන්වා ගැනිමට හා වැඩි විස්තර සදහා සම්බන්ධ වන්න.
        071 299 8333/076 277 2448 (whatsapp)
      </p>
    </div>
  </div>
</div>

      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="md:w-4/5">
            <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal text-blue-200">
             Engineering Technology <span className="text-red-300"> Management</span>
            </h2>
            <p className="text-white text-lg mb-7">
            මෙම පොත මගින් managment සම්පූර්ණ විෂය මාලාව ආවරණය කර ඇත.

            </p>
            <p className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-500 transition-all duration-300">
        නිවසට ගෙන්වා ගැනිමට හා වැඩි විස්තර සදහා සම්බන්ධ වන්න.
        071 299 8333/076 277 2448 (whatsapp)
      </p>
          </div>
          <div className="md:w-1/3">
            <img src={magazine2} alt="Magazine" className="lg:h-[400px] object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

function renderDayHeader(arg) {
  return <div className="text-blue-800 font-bold">{arg.text}</div>;
}

function renderEventContent(eventInfo) {
  const eventType = eventInfo.event.extendedProps.type;
  const bgColor = eventType === 'practical' ? 'bg-green-500' : eventType === 'quiz' ? 'bg-yellow-500' : 'bg-blue-500';

  return (
    <div className={`px-2 py-1 rounded ${bgColor} text-white text-center`}>
      <b>{eventInfo.timeText}</b>
      <i className="text-xs font-medium ml-1">{eventInfo.event.title}</i>
    </div>
  );
}

export default PHome;
