import EventList from "@/components/events/event-list";
import { useRouter } from "next/router";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler}></EventsSearch>
      <EventList items={events}></EventList>
    </div>
  );
}

export default AllEventsPage;
