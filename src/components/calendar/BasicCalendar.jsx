import moment from "moment";
import Calendar from "./Calendar";
import './calendar.scss'

const events = [
  {
    start: moment("2024-10-03T10:00:00").toDate(),
    end: moment("2024-10-03T13:00:00").toDate(),
    title: "English Class",
  },
  {
    start: moment("2024-10-06T10:00:00").toDate(),
    end: moment("2024-10-05T13:00:00").toDate(),
    title: "English Class",
  },
  {
    start: moment("2024-10-10T10:00:00").toDate(),
    end: moment("2024-10-10T13:00:00").toDate(),
    title: "English Class",
  },
  {
    start: moment("2024-10-15T10:00:00").toDate(),
    end: moment("2024-10-15T13:00:00").toDate(),
    title: "English Class",
  },
];

export default function BasicCalendar() {
  return <Calendar events={events} />;
}
