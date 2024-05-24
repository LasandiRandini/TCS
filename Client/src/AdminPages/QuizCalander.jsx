import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import '../../Styles/calendar.css'; 

const events = [
    { title: 'Quiz', start: '2024-04-24', clickable: true }
];

function QuizCalander() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();


    return (
        <div className='rounded-lg bg-white md:ml-72 md:px-10 py-10 w-full'>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                events={events}
                eventContent={renderEventContent}
             
                height={850}
                headerToolbar={{
                    start: 'prev,next today',
                    center: 'title',
                    end: 'addQuizButton'
                }}
                customButtons={{
                    addQuizButton: {
                        text: 'Create new quiz',
                        click: handleShow
                    }
                }}
                dayHeaderContent={renderDayHeader}
                firstDay={1} 
            />

            {show && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-1/2">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-xl font-semibold">Create new quiz</h2>
                            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">&times;</button>
                        </div>
                        <div className="p-4">
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2">Select course</label>
                                    <select className="shadow-sm focus:ring-indigo-600 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md">
                                        <option>Select a course</option>
                                        <option>Course 1</option>
                                        <option>Course 2</option>
                                        <option>Course 3</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2">Quiz title</label>
                                    <input type="text" placeholder="Enter quiz title" className="shadow-sm focus:ring-indigo-600 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="mb-4 relative">
                                    <label className="block text-gray-700 font-bold mb-2">Due date and time</label>
                                    <Datetime
                                        timeFormat={true}
                                        className="readonly block w-full mt-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center mt-8 mr-5 px-2 pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="flex justify-end items-center p-4 border-t">
                            <button onClick={handleClose} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded mr-2">Close</button>
                            <button onClick={() => {
                                handleClose();
                                navigate('/te_calender/create_quiz');
                            }} className="bg-indigo-900 hover:bg-indigo-950 text-white font-semibold py-2 px-4 rounded">Create quiz</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function renderDayHeader(arg) {
    return (
        <div className="fc-daygrid-day-number">
            {arg.text}
        </div>
    );
}

// a custom render function
function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i className="calendar-event-text">{eventInfo.event.title}</i>
        </>
    );
}

export default QuizCalander;
