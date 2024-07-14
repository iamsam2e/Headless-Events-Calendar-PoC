import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export function EventCard({ event }) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{event.title || "Untitled Event"}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-2">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <span>
            {event.eventFields && event.eventFields.eventDate
              ? format(new Date(event.eventFields.eventDate), "dd/MM/yyyy")
              : "Date not available"}
          </span>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <ClockIcon className="h-5 w-5 text-gray-500" />
          <span>{event.eventFields?.eventTime || "Time not specified"}</span>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <MapPinIcon className="h-5 w-5 text-gray-500" />
          <span>{event.eventFields?.location || "Location not specified"}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {event.eventCategories?.nodes?.map(({ name, slug }) => (
            <Badge key={slug} variant="secondary">
              <a href={`/category/${slug}`}>{name}</a>
            </Badge>
          )) || "No categories"}
        </div>
      </CardContent>
    </Card>
  );
}
