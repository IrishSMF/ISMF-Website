import * as React from "react";
import { useMemo, useState } from "react";

import {
  addDays,
  addMinutes,
  eachDayOfInterval,
  format,
  isBefore,
  isSameDay,
  startOfDay,
  startOfToday,
} from "date-fns";

import data from '../../data/events.json'
import { ArrowUpRight, CalendarCheck2, CalendarDays, Clock, ExternalLink, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type EventCategory =
  | "Flagship"
  | "Workshop"
  | "Networking"
  | "Briefing"
  | "Conference"
  | "Competition";

type DeliveryMode = "In person" | "Virtual" | "Hybrid";

export type CalendarEvent = {
  id: string;
  title: string;
  description: string;
  start: string;
  end?: string;
  location: string;
  category: EventCategory;
  mode?: DeliveryMode;
  registrationUrl?: string;
  slidesUrl?: string;
  slidesCredit?: string;
};

type HydratedEvent = CalendarEvent & {
  startDate: Date;
  endDate: Date;
};

export interface EventsCalendarProps {
  events?: CalendarEvent[];
  className?: string;
}

const defaultEvents: CalendarEvent[] = data //[
//   {
//     id: "market-movements-mar-2026",
//     title: "Monthly Market Movements Meeting",
//     description:
//       "Monthly committee touchpoint reviewing macro catalysts, cross-asset moves, and positioning updates across the fund.",
//     start: "2026-03-02T19:00:00.000Z",
//     end: "2026-03-02T20:00:00.000Z",
//     location: "Online — link provided to registered attendees",
//     category: "Briefing",
//     mode: "Virtual",
//   },
//   {
//     id: "venture-capital-webinar-2026-02-18",
//     title: "Venture Capital Webinar",
//     description:
//       "Join us online for an insights session on venture capital, hosted by the Irish Student Managed Fund.",
//     start: "2026-02-18T18:00:00.000Z",
//     end: "2026-02-18T19:00:00.000Z",
//     location: "Online — link provided to registered attendees",
//     category: "Workshop",
//     mode: "Virtual",
//     slidesUrl: "reports/venture-capital-webinar-feb-2026-slides.pdf",
//     slidesCredit: "Giuliano Sansone, Assistant Prof @ UCD",
//   },
//   {
//     id: "stock-pitching-competition-2026-01-30",
//     title: "The National Stage of Stock Pitching Competition",
//     description:
//       "The national stage of the Stock Pitching Competition, hosted by the Irish Student Managed Fund.",
//     start: "2026-01-30T17:00:00.000Z",
//     end: "2026-01-30T19:00:00.000Z",
//     location: "In person — venue details provided to participants",
//     category: "Competition",
//     mode: "In person",
//   },
//   {
//     id: "monthly-market-meeting-2026-01-26",
//     title: "Monthly Market Meeting",
//     description:
//       "Monthly committee touchpoint reviewing macro catalysts, cross-asset moves, and positioning updates across the fund.",
//     start: "2026-01-26T19:00:00.000Z",
//     end: "2026-01-26T20:00:00.000Z",
//     location: "Online — link provided to registered attendees",
//     category: "Briefing",
//     mode: "Virtual",
//   },
//   {
//     id: "future-of-money-2025-11-26",
//     title: "Join The Future of Money",
//     description:
//       "An evening on the future of money, hosted with Gnosis, Irish Student Managed Fund, and partners at Kennedy's Pub & Restaurant.",
//     start: "2025-11-26T18:00:00.000Z",
//     end: "2025-11-26T20:00:00.000Z",
//     location: "Kennedy's Pub & Restaurant",
//     category: "Networking",
//     mode: "In person",
//   },
//   {
//     id: "cfa-info-session-2025-10-29",
//     title: "CFA Society Ireland Info Session",
//     description:
//       "Members from CFA Society Ireland shared what the CFA qualification entails, how to navigate the pathway, and the career opportunities it can unlock. Hosted in collaboration with the University of Galway Student Managed Fund and Ulster University’s SMF.",
//     start: "2025-10-29T17:30:00.000Z",
//     end: "2025-10-29T18:30:00.000Z",
//     location: "Online — link provided to registered attendees",
//     category: "Briefing",
//     mode: "Virtual",
//     registrationUrl: "https://lnkd.in/eDHRSFGn",
//   },
// ];

const modeColorMap: Record<DeliveryMode, string> = {
  "In person": "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  Hybrid: "bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300",
  Virtual: "bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
};

function hydrateEvents(events: CalendarEvent[]): HydratedEvent[] {
  return events
    .map((event) => {
      const startDate = new Date(event.start);
      const endDate = event.end ? new Date(event.end) : addMinutes(startDate, 60);
      return { ...event, startDate, endDate };
    })
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
}

function getCalendarModifiers(events: HydratedEvent[]) {
  const eventDays = events.flatMap((event) =>
    eachDayOfInterval({
      start: startOfDay(event.startDate),
      end: startOfDay(event.endDate),
    }),
  );

  return {
    event: eventDays,
  };
}

export function EventsCalendar({ events = defaultEvents, className }: EventsCalendarProps) {
  const today = startOfToday();
  const hydratedEvents = useMemo(() => hydrateEvents(events), [events]);

  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const nextUpcoming = hydratedEvents.find((event) => !isBefore(event.startDate, today));
    return nextUpcoming?.startDate ?? today;
  });

  const upcomingEvents = useMemo(
    () =>
      hydratedEvents.filter((event) => !isBefore(startOfDay(event.startDate), today)),
    [hydratedEvents, today],
  );

  const recentEvents = useMemo(
    () =>
      hydratedEvents
        .filter((event) => isBefore(startOfDay(event.startDate), today))
        .slice(-4)
        .reverse(),
    [hydratedEvents, today],
  );

  const eventsOnSelectedDate = useMemo(
    () => hydratedEvents.filter((event) => isSameDay(event.startDate, selectedDate)),
    [hydratedEvents, selectedDate],
  );

  const modifiers = useMemo(() => getCalendarModifiers(hydratedEvents), [hydratedEvents]);

  return (
    <div
      className={cn(
        // Visual: neutral container background (no blue tint) while keeping shape and shadow
        "w-full rounded-3xl border border-border/60 bg-white p-6 shadow-sm backdrop-blur-sm transition-colors sm:p-8",
        "dark:bg-muted/20",
        className,
      )}
    >
      {/* Spacing: generous top padding and header spacing for a clear page intro */}
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <Badge className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-primary-foreground/80">
          <CalendarDays className="h-4 w-4" />
          Events Dashboard
        </Badge>
        <span className="text-sm text-muted-foreground">
          Stay close to upcoming opportunities across the ISMF community.
        </span>
      </div>
      {/* Spacing: increased column gap for clearer separation between calendar and side panels */}
      <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.35fr_1fr]">
        {/* Visual: remove internal beige behind the Calendar heading and content */}
        <Card className="border-0 bg-white shadow-none dark:bg-card">
          {/* Spacing: bottom padding to separate heading from calendar surface */}
          <CardHeader className="px-0 pt-0 pb-4">
            <CardTitle className="text-3xl font-semibold text-foreground">Calendar</CardTitle>
            <CardDescription>
              Browse upcoming sessions, workshops, and competitions. Select a date to view details.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            {/* Spacing: inner calendar card padding normalized to 24px (p-6); light blue background retained around the calendar grid */}
            <div className="rounded-2xl border border-border/60 bg-muted/40 p-6 dark:bg-muted/30">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                className="w-full"
                modifiers={modifiers}
                modifiersClassNames={{
                  event:
                    "bg-primary/20 text-primary-foreground ring-2 ring-primary/50 hover:bg-primary/30 hover:text-primary-foreground",
                }}
                classNames={{
                  months: "grid grid-cols-1",
                }}
              />
            </div>
            {/* Spacing: more breathing room below the calendar and between content blocks on white surface */}
            <div className="mt-5 space-y-4 rounded-2xl border border-border/60 bg-white p-5 dark:bg-muted/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Selected date</p>
                  <p className="text-lg font-semibold text-foreground">{format(selectedDate, "EEEE, MMMM d")}</p>
                </div>
                <Badge variant="outline" className="flex items-center gap-2">
                  <CalendarCheck2 className="h-4 w-4" />
                  {eventsOnSelectedDate.length
                    ? `${eventsOnSelectedDate.length} event${eventsOnSelectedDate.length > 1 ? "s" : ""}`
                    : "No events"}
                </Badge>
              </div>
              <div className="space-y-3">
                {eventsOnSelectedDate.length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    No scheduled events on this date. Check the upcoming list to plan ahead.
                  </p>
                )}
                {eventsOnSelectedDate.map((event) => (
                  <EventListItem key={event.id} event={event} accent="primary" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Spacing: consistent vertical rhythm between Upcoming and Recent Highlights */}
        <div className="space-y-8">
          <Card className="border border-border/60">
            <CardHeader className="px-5 pt-5 pb-3">
              <CardTitle className="flex items-center gap-2 text-xl font-semibold text-foreground">
                <Clock className="h-5 w-5 text-primary" />
                Upcoming
              </CardTitle>
              <CardDescription>
                Confirm your spot and mark your calendar — seats for in-person sessions fill quickly.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-5 pb-5">
              {/* iframe wrapper follows same visual language as the card content */}
              <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                <iframe
                  title="Events Calendar"
                  src="https://luma.com/embed/calendar/cal-10H6yZGRxciSe3l/events"
                  className="w-full h-[380px] min-h-[240px] rounded-lg border border-border/60 bg-transparent"
                  frameBorder="0"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/60 bg-muted/30">
            {/* Spacing: mirror Upcoming card padding for consistent side-panel rhythm */}
            <CardHeader className="px-5 pt-5 pb-3">
              <CardTitle className="flex items-center gap-2 text-xl font-semibold text-foreground">
                <CalendarDays className="h-5 w-5 text-primary" />
                Recent Highlights
              </CardTitle>
              <CardDescription>
                Catch up on the latest committee activity and member-led initiatives.
              </CardDescription>
            </CardHeader>
            {/* Spacing: extra space between recent highlight items for readability */}
            <CardContent className="space-y-6 px-5 pb-5">
              {recentEvents.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  Our most recent events will appear here once the season kicks off.
                </p>
              )}
              {recentEvents.map((event) => (
                <EventListItem key={event.id} event={event} compact />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function EventDialog({ event }: { event: HydratedEvent }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          // Layout: larger, more prominent event boxes in Upcoming list
          // - px-6 and increased py give more breathing room vertically
          // - min-h ensures the light-blue sections feel taller even for short content
          // - flex-col + gap-4 preserves spacing between title/date row and tags row
          className="group flex w-full min-h-[96px] flex-col items-stretch gap-4 rounded-2xl border-border/70 bg-background/60 px-6 py-5 text-left hover:border-primary/60 hover:bg-primary/5 md:min-h-[110px] md:py-6"
        >
          {/* Row 1: title + date/time with arrow aligned right and vertically centered */}
          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                {event.title}
              </p>
              <p className="text-xs text-muted-foreground">
                {format(event.startDate, "EEE, MMM d")} · {format(event.startDate, "HH:mm")} -{" "}
                {format(event.endDate, "HH:mm")}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
          </div>

          {/* Row 2: tags row kept inside the rounded box; flex-wrap so all badges stay contained */}
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="border-transparent bg-primary/10 text-primary">
              {event.category}
            </Badge>
            {event.mode ? (
              <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", modeColorMap[event.mode])}>{event.mode}</span>
            ) : null}
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        {/* Spacing: looser vertical stack inside dialog for a calmer reading experience */}
        <DialogHeader className="space-y-4">
          <Badge variant="outline" className="w-fit border-primary/40 text-primary">
            {event.category}
          </Badge>
          <DialogTitle className="text-2xl">{event.title}</DialogTitle>
          <DialogDescription className="space-y-3 text-base text-muted-foreground">
            <p>{event.description}</p>
            <div className="grid gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>
                  {format(event.startDate, "EEEE, MMMM d")} · {format(event.startDate, "HH:mm")} — {format(event.endDate, "HH:mm")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{event.location}</span>
              </div>
              {event.mode ? (
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  <span>{event.mode}</span>
                </div>
              ) : null}
            </div>
          </DialogDescription>
        </DialogHeader>
        {event.registrationUrl ? (
          <Button asChild className="w-full">
            <a href={event.registrationUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              Register now
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        ) : null}
        {event.slidesUrl ? (
          <div className="space-y-1">
            <Button asChild variant="outline" className="w-full">
              <a
                href={`${import.meta.env.BASE_URL}${event.slidesUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View slides (PDF)
              </a>
            </Button>
            {event.slidesCredit ? (
              <p className="text-xs text-muted-foreground text-center">Slides: {event.slidesCredit}</p>
            ) : null}
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

function EventListItem({
  event,
  accent = "muted",
  compact = false,
}: {
  event: HydratedEvent;
  accent?: "muted" | "primary";
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        // Spacing: standard 20–24px padding on event cards for consistent rhythm
        "rounded-2xl border border-border/60 bg-background/60 p-5 transition-colors hover:border-primary/60 hover:bg-primary/5",
        accent === "primary" && "border-primary/40 bg-primary/5 hover:bg-primary/10",
        compact && "p-4",
      )}
    >
      {/* Spacing: vertical gaps between title, description, and meta data */}
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-foreground">{event.title}</p>
            <p className="text-xs text-muted-foreground">
              {format(event.startDate, "EEE, MMM d")} · {format(event.startDate, "HH:mm")} - {format(event.endDate, "HH:mm")}
            </p>
          </div>
          <Badge variant="outline" className="border-transparent bg-primary/10 text-primary">
            {event.category}
          </Badge>
        </div>
        <p className={cn("text-sm text-muted-foreground", compact && "line-clamp-2")}>{event.description}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{event.location}</span>
          {event.mode ? (
            <>
              <span className="mx-1 text-muted-foreground">•</span>
              <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", modeColorMap[event.mode])}>{event.mode}</span>
            </>
          ) : null}
        </div>
        {event.slidesUrl ? (
          <div className="flex flex-col gap-1 pt-1 border-t border-border/60">
            <a
              href={`${import.meta.env.BASE_URL}${event.slidesUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1.5"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View slides (PDF)
            </a>
            {event.slidesCredit ? (
              <p className="text-xs text-muted-foreground">Slides: {event.slidesCredit}</p>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default EventsCalendar;

