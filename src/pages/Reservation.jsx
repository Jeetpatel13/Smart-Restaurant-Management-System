import { useContext, useState } from "react";
import { AppContext } from "../AppProvider";

function Reservation() {
  const data = useContext(AppContext);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    if (name == "" || date == "" || time == "" || guests == "" || type == "") {
      setError("Please Fill all the fileds");
      return;
    }
    if (Number(guests) < 1) {
      setError("Guests must be at least 1");
      return;
    }

    setError("");
    data.setReservations([
      ...data.reservations,
      {
        id: Date.now(),
        name: name,
        date: date,
        time: time,
        guests: guests,
        type: type,
        status: "Pending",
      },
    ]);
    setName("");
    setDate("");
    setGuests("");
    setTime("");
    setType("");
  }

  return (
    <div className="page">
      <h1>Reservation - Book a Table</h1>
      <form onSubmit={onSubmit}>
        Name :
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        Date :
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        Time :
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <br />
        Guests :
        <input
          type="number"
          placeholder="No. of Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <br />
        Type :
        <input
          type="text"
          placeholder="Type of event"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <br />
        <button type="submit">Reserve</button>
      </form>

      <p className="error_message">{error}</p>
      {data.reservations.map((e) => (
        <div key={e.id} className="menu-card">
          <p>
            {e.name} - {e.date} - {e.time} - {e.guests} Guests - {e.type}
          </p>
          <p>Status : {e.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Reservation;
