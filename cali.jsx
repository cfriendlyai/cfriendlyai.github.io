import { useState } from "react";

const days = [
  {
    num: "Day 1",
    title: "Arrive Los Angeles",
    date: "Saturday, July 19",
    alert: null,
    success: null,
    events: [
      { time: "9:54 AM", name: "Land at LAX — Terminal 1", desc: "Take free shuttle to Rental Car Center. Pick up pre-booked 7-passenger SUV at Enterprise. Shuttle runs every few minutes.", tags: [{ label: "Rental car pickup", type: "drive" }] },
      { time: "11:30 AM", name: "Check in — 2319 Ashland Ave, Santa Monica", desc: "~25 min drive from LAX via I-405 N to CA-1. About 8 blocks from the beach.", tags: [{ label: "Drive 25 min", type: "drive" }, { label: "Check in", type: "stay" }] },
      { time: "1:00 PM", name: "Lunch — Blue Daisy", desc: "609 Broadway, Santa Monica · Rating 4.4 · Open until 3 PM · Turkish breakfast plates, waffles, great casual first meal.", tags: [{ label: "Lunch", type: "food" }] },
      { time: "2:30 PM", name: "Santa Monica Beach & Pier", desc: "Walk to the beach — about 8 blocks from the Airbnb. Explore the pier, Pacific Park, watch the sunset.", tags: [{ label: "Beach", type: "activity" }] },
      { time: "7:00 PM", name: "Dinner — Elephante Rooftop", desc: "1332 2nd St, Santa Monica · Italian with ocean views · Rating 4.3 · Make a reservation. Great pasta and sunset views of the Pacific.", tags: [{ label: "Dinner", type: "food" }, { label: "Reserve ahead", type: "alert" }] },
    ],
  },
  {
    num: "Day 2",
    title: "Surf Lessons + Venice Beach",
    date: "Sunday, July 20",
    alert: null,
    success: null,
    events: [
      { time: "8:00 AM", name: "Breakfast — Sweet Maple", desc: "1705 Ocean Ave, Santa Monica · Rating 4.5 · Tornado omelets, soufflés, huge portions. Get there early to avoid waits.", tags: [{ label: "Breakfast", type: "food" }] },
      { time: "9:00 AM", name: "Kapowui Surf Lessons — 2-hour beginner session", desc: "2701 Barnard Way, Parking Lot 5 South · +1 310-985-4577 · kapowui.com · 5-star rated, 4,000+ reviews. ~$85–100/person. Boards and wetsuits included.", tags: [{ label: "Surfing", type: "activity" }, { label: "Pre-book required", type: "alert" }] },
      { time: "12:00 PM", name: "Lunch — La Isla Bonita taco truck", desc: "Near Ocean Front Walk, Venice · Rating 4.8 · Best ceviche tostada in LA, fish tacos, carne asada. Opens 11:30 AM.", tags: [{ label: "Lunch", type: "food" }] },
      { time: "1:00 PM", name: "Venice Beach Boardwalk", desc: "Skate park, Muscle Beach, street performers, murals. About 2 miles total — one of the most unique spots in LA.", tags: [{ label: "Explore", type: "activity" }] },
      { time: "7:00 PM", name: "Dinner — LouLou Santa Monica", desc: "395 Santa Monica Place #300 · Rating 4.3 · Open Sunday · French Mediterranean with live music. Grilled octopus is a standout.", tags: [{ label: "Dinner", type: "food" }] },
    ],
  },
  {
    num: "Day 3",
    title: "UCLA Formal Tour → Drive to San Francisco",
    date: "Monday, July 21",
    alert: "Check-out day — pack all bags and load the car before the UCLA tour. You won't be returning to the Santa Monica Airbnb.",
    success: null,
    events: [
      { time: "9:30 AM", name: "Check out & load the car", desc: "Pack everything before leaving. Drive ~20 min to UCLA. Grab coffee on the way.", tags: [{ label: "Check-out day", type: "alert" }] },
      { time: "10:00 AM", name: "UCLA Formal Admissions Tour", desc: "405 Hilgard Ave, Los Angeles · ~90 minutes · Arrive 15 min early. Royce Hall quad, residence halls, student life Q&A. Book: +1 310-825-4321 · admission.ucla.edu", tags: [{ label: "Campus tour", type: "activity" }, { label: "Pre-book required", type: "alert" }] },
      { time: "12:00 PM", name: "Lunch — Westwood Village", desc: "Just off campus on Broxton Ave. Stan's Donuts, Diddy Riese cookies, or sit-down lunch. Fuel up for the drive north.", tags: [{ label: "Lunch", type: "food" }] },
      { time: "1:30 PM", name: "Depart for San Francisco", desc: "US-101 N is the scenic route (~6 hrs). I-5 N then I-580 W is faster. Check Google Maps for traffic at departure.", tags: [{ label: "Drive ~6 hrs", type: "drive" }] },
      { time: "4:30 PM", name: "Rest stop — Paso Robles or San Luis Obispo", desc: "About halfway. Gas, snacks, stretch. Downtown SLO is worth a quick 30-min stop.", tags: [{ label: "Rest stop", type: "drive" }] },
      { time: "7:30 PM", name: "Arrive — 242 Capp St #A, San Francisco", desc: "Mission District. Street parking available — check signs carefully for street cleaning.", tags: [{ label: "Check in", type: "stay" }] },
      { time: "8:30 PM", name: "Dinner — Flour + Water or Sangria & Salt", desc: "Both walking distance from the Airbnb. Flour + Water (2401 Harrison St) — incredible pasta, reserve ahead. Sangria & Salt (2327 Mission St) — Latin, lively, walk-in friendly.", tags: [{ label: "Dinner", type: "food" }] },
    ],
  },
  {
    num: "Day 4",
    title: "Berkeley Formal Tour + SF Evening",
    date: "Tuesday, July 22",
    alert: "Book UC Berkeley 10:00 AM formal tour NOW — +1 510-642-5215 · visit.berkeley.edu",
    success: "Berkeley tour in the morning, then a free evening to explore San Francisco before your flight tomorrow.",
    events: [
      { time: "8:00 AM", name: "Breakfast in the Mission", desc: "La Lengua (2730 Mission St) or Tartine Manufactory (595 Alabama St). Or grab coffee and pastries to go.", tags: [{ label: "Breakfast", type: "food" }] },
      { time: "9:00 AM", name: "Drive to UC Berkeley", desc: "~30 min via Bay Bridge (I-80 E to I-580 E). Park in Telegraph-Channing Garage (2450 Durant Ave) or visitor lots.", tags: [{ label: "Drive 30 min", type: "drive" }] },
      { time: "10:00 AM", name: "UC Berkeley Formal Admissions Tour", desc: "Koret Visitor Center, 2227 Piedmont Ave, Room 141 · ~90 minutes · Stunning campus with Bay views. +1 510-642-5215 · visit.berkeley.edu", tags: [{ label: "Campus tour", type: "activity" }, { label: "Pre-book required", type: "alert" }] },
      { time: "11:45 AM", name: "Lunch — Farmhouse Kitchen Thai, Berkeley", desc: "1549 Shattuck Ave, Berkeley · Rating 4.7 · ~10 min drive from campus · Stunning patio, incredible Thai. Open from 11:30 AM.", tags: [{ label: "Lunch", type: "food" }] },
      { time: "1:30 PM", name: "Return to San Francisco — explore the city", desc: "~25 min via Bay Bridge. Options: Golden Gate Bridge, Fisherman's Wharf, Lands End hike, Mission murals, or just wander.", tags: [{ label: "Drive 25 min", type: "drive" }, { label: "Explore SF", type: "activity" }] },
      { time: "7:00 PM", name: "Dinner — Skates on the Bay", desc: "100 Seawall Dr, Berkeley · Rating 4.3 · Seafood with stunning Bay and Golden Gate views · Kid-friendly · Great last-night dinner spot.", tags: [{ label: "Dinner", type: "food" }] },
    ],
  },
  {
    num: "Day 5",
    title: "San Francisco Morning → SFO → Fly Home",
    date: "Wednesday, July 23",
    alert: null,
    success: null,
    events: [
      { time: "Morning", name: "Relaxed morning — last look at SF", desc: "Grab breakfast near the Airbnb. Walk Dolores Park (2 blocks from Capp St), grab coffee on Valencia St, or visit the Mission murals.", tags: [{ label: "Explore", type: "activity" }] },
      { time: "1:30 PM", name: "Check out & drive to SFO — return rental car", desc: "~20 min from Mission District. Follow signs for Rental Car Return. Agents check you in curbside (~15 min). Photograph fuel gauge before handing over keys.", tags: [{ label: "Drive 20 min", type: "drive" }, { label: "Return rental car", type: "alert" }] },
      { time: "2:30 PM", name: "Free AirTrain to Terminal 1 & check in", desc: "AirTrain runs every 3–5 min from Rental Car Center to Terminal 1 (~8 min). Sun Country departs Terminal 1. TSA can be 30–45 min — be through security by 5:00 PM.", tags: [{ label: "AirTrain to terminal", type: "drive" }] },
      { time: "6:05 PM", name: "Depart SFO — Sun Country SY 396", desc: "~3 hrs 40 min flight. Arrive Minneapolis MSP 11:45 PM.", tags: [{ label: "Fly home", type: "drive" }] },
    ],
  },
];

const restaurants = {
  la: [
    { name: "Blue Daisy", loc: "609 Broadway, SM", type: "Brunch", rating: "4.4", when: "Day 1 lunch" },
    { name: "Elephante Rooftop", loc: "1332 2nd St, SM", type: "Italian, ocean views", rating: "4.3", when: "Day 1 dinner" },
    { name: "Sweet Maple", loc: "1705 Ocean Ave, SM", type: "Breakfast", rating: "4.5", when: "Day 2 breakfast" },
    { name: "La Isla Bonita", loc: "Ocean Front Walk, Venice", type: "Taco truck, ceviche", rating: "4.8", when: "Day 2 lunch" },
    { name: "LouLou Santa Monica", loc: "395 Santa Monica Place", type: "French Med, live music", rating: "4.3", when: "Day 2 dinner" },
  ],
  sf: [
    { name: "Flour + Water", loc: "2401 Harrison St, Mission", type: "Italian pasta", rating: "4.5", when: "Day 3 dinner (reserve)" },
    { name: "Sangria & Salt", loc: "2327 Mission St", type: "Latin, lively", rating: "4.8", when: "Day 3 dinner (walk-in)" },
    { name: "Farmhouse Kitchen Thai", loc: "1549 Shattuck Ave, Berkeley", type: "Thai", rating: "4.7", when: "Day 4 lunch" },
    { name: "Skates on the Bay", loc: "100 Seawall Dr, Berkeley", type: "Seafood, Bay views", rating: "4.3", when: "Day 4 dinner" },
  ],
};

const contacts = [
  { org: "UCLA admissions tours", name: "+1 310-825-4321", detail: "admission.ucla.edu\nBook Mon Jul 21 at 10 AM" },
  { org: "UC Berkeley tours", name: "+1 510-642-5215", detail: "visit.berkeley.edu\nBook Tue Jul 22 at 10 AM" },
  { org: "Kapowui surf lessons", name: "+1 310-985-4577", detail: "kapowui.com\nBook Sun Jul 20 at 9 AM" },
  { org: "Enterprise LAX", name: "+1 833-679-2047", detail: "Pick up Sat Jul 19\nDrop off SFO Wed Jul 23" },
];

const reminders = [
  "Monday Jul 21 is check-out day from Santa Monica — pack everything and load the car before the UCLA tour.",
  "The Monday drive (LA → SF) takes ~6 hours. Leave UCLA at 1:30 PM, arrive SF ~7:30 PM.",
  "Confirm the one-way rental car fee (LAX pickup, SFO drop-off) at time of booking.",
  "Kapowui surf lessons are on Sunday Jul 20 — book all 4 spots in advance at kapowui.com.",
  "Leo Carrillo State Beach sea caves are best at low tide — check tideschart.com.",
  "Street parking in the Mission is strict — check signs for street cleaning at 242 Capp St.",
  "Have boarding passes downloaded before arriving at SFO on Wed Jul 23. Be through security by 5:00 PM.",
];

const tagStyles = {
  drive: { background: "#e1f5ee", color: "#085041" },
  food: { background: "#faeeda", color: "#633806" },
  activity: { background: "#eeedfe", color: "#3c3489" },
  alert: { background: "#fcebeb", color: "#791f1f" },
  stay: { background: "#e6f1fb", color: "#0c447c" },
};

const Tag = ({ label, type }) => (
  <span style={{
    fontSize: 10, padding: "2px 8px", borderRadius: 10,
    marginRight: 4, marginTop: 3, display: "inline-block",
    fontFamily: "sans-serif", letterSpacing: "0.02em",
    ...tagStyles[type],
  }}>{label}</span>
);

const Event = ({ time, name, desc, tags }) => (
  <div style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: "0 16px" }}>
    <div style={{ fontSize: 11, fontFamily: "sans-serif", color: "#999", textAlign: "right", paddingTop: 4, paddingRight: 12, borderRight: "1px solid #e0dbd4", minHeight: 36 }}>{time}</div>
    <div style={{ paddingBottom: 14, paddingTop: 2 }}>
      <div style={{ fontSize: 13, fontFamily: "sans-serif", fontWeight: 600, color: "#1a1a1a", marginBottom: 2 }}>{name}</div>
      <div style={{ fontSize: 12, fontFamily: "sans-serif", color: "#666", lineHeight: 1.5 }}>{desc}</div>
      <div style={{ marginTop: 4 }}>{tags.map((t, i) => <Tag key={i} {...t} />)}</div>
    </div>
  </div>
);

const DayCard = ({ day, active, onClick }) => (
  <div
    onClick={onClick}
    style={{
      border: "1px solid #e8e4de", borderRadius: 8, padding: "10px 14px",
      cursor: "pointer", marginBottom: 8,
      background: active ? "#1a3a4a" : "#fff",
      color: active ? "#fff" : "#1a1a1a",
      transition: "all 0.15s",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontSize: 11, fontFamily: "sans-serif", background: active ? "rgba(255,255,255,0.2)" : "#e6f1fb", color: active ? "#fff" : "#0c447c", padding: "2px 10px", borderRadius: 20 }}>{day.num}</span>
      <span style={{ fontSize: 14, fontFamily: "Georgia,serif" }}>{day.title}</span>
      <span style={{ fontSize: 12, fontFamily: "sans-serif", color: active ? "#9fc5d8" : "#888", marginLeft: "auto" }}>{day.date}</span>
    </div>
  </div>
);

const RestTable = ({ data, title }) => (
  <div style={{ marginBottom: "1.5rem" }}>
    <div style={{ fontSize: 12, fontFamily: "sans-serif", color: "#888", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>{title}</div>
    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "sans-serif", fontSize: 13 }}>
      <thead>
        <tr>{["Restaurant", "Type", "Rating", "When"].map(h => (
          <th key={h} style={{ textAlign: "left", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.06em", color: "#999", padding: "6px 8px", borderBottom: "1px solid #e8e4de", fontWeight: 400 }}>{h}</th>
        ))}</tr>
      </thead>
      <tbody>
        {data.map((r, i) => (
          <tr key={i}>
            <td style={{ padding: "8px 8px", borderBottom: "1px solid #f0ece7" }}>
              <div style={{ fontWeight: 600, color: "#1a1a1a" }}>{r.name}</div>
              <div style={{ color: "#888", fontSize: 12 }}>{r.loc}</div>
            </td>
            <td style={{ padding: "8px 8px", borderBottom: "1px solid #f0ece7", color: "#555" }}>{r.type}</td>
            <td style={{ padding: "8px 8px", borderBottom: "1px solid #f0ece7", color: "#c8a84b" }}>{"★".repeat(Math.floor(parseFloat(r.rating)))} {r.rating}</td>
            <td style={{ padding: "8px 8px", borderBottom: "1px solid #f0ece7", color: "#555" }}>{r.when}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const sections = ["Overview", "Itinerary", "Restaurants", "Contacts"];

export default function CaliforniaTrip() {
  const [activeDay, setActiveDay] = useState(0);
  const [activeSection, setActiveSection] = useState("Overview");

  return (
    <div style={{ fontFamily: "Georgia,serif", background: "#f9f7f4", minHeight: "100vh", color: "#1a1a1a" }}>
      <div style={{ background: "#1a3a4a", color: "#fff", padding: "3rem 2rem 2.5rem", textAlign: "center" }}>
        <div style={{ fontSize: 13, color: "#9fc5d8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "sans-serif" }}>Trip itinerary</div>
        <h1 style={{ fontSize: 28, fontWeight: 400, letterSpacing: "0.02em", marginBottom: 6 }}>California College Tour</h1>
        <div style={{ fontSize: 14, color: "#9fc5d8", marginBottom: "1.5rem", fontFamily: "sans-serif" }}>July 19–23 · Los Angeles → San Francisco</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
          {["1 adult · 3 teens", "MSP → LAX · SFO → MSP", "UCLA · Berkeley", "Surfing · Malibu · Venice"].map(p => (
            <span key={p} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 20, padding: "5px 14px", fontSize: 12, color: "#d4e8f0", fontFamily: "sans-serif" }}>{p}</span>
          ))}
        </div>
      </div>

      <div style={{ background: "#fff", borderBottom: "1px solid #e8e4de", display: "flex", overflowX: "auto", position: "sticky", top: 0, zIndex: 10 }}>
        {sections.map(s => (
          <button key={s} onClick={() => setActiveSection(s)} style={{
            padding: "12px 20px", fontSize: 12, fontFamily: "sans-serif", color: activeSection === s ? "#1a3a4a" : "#666",
            background: "none", border: "none", borderBottom: activeSection === s ? "2px solid #1a3a4a" : "2px solid transparent",
            cursor: "pointer", whiteSpace: "nowrap", letterSpacing: "0.04em", textTransform: "uppercase",
          }}>{s}</button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1.5rem" }}>

        {activeSection === "Overview" && (
          <div>
            <div style={{ fontSize: 11, fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: "#888", marginBottom: "1rem" }}>Flights & logistics</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12, marginBottom: "1.5rem" }}>
              {[
                { lbl: "Outbound flight", val: "Sun Country SY 421\nMSP 7:36 AM → LAX 9:54 AM\nSaturday, July 19" },
                { lbl: "Return flight", val: "Sun Country SY 396\nSFO 6:05 PM → MSP 11:45 PM\nWednesday, July 23" },
                { lbl: "LA accommodation", val: "2319 Ashland Ave\nSanta Monica, CA 90405\nNights 1–2 (Sat–Sun)" },
                { lbl: "SF accommodation", val: "242 Capp St #A\nSan Francisco, CA 94110\nNights 3–4 (Mon & Tue)" },
                { lbl: "Rental car", val: "Pick up LAX · Drop off SFO\n7-passenger SUV\nConfirm one-way fee at booking" },
              ].map((b, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e8e4de", borderRadius: 8, padding: "1rem" }}>
                  <div style={{ fontSize: 10, fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888", marginBottom: 6 }}>{b.lbl}</div>
                  <div style={{ fontSize: 13, fontFamily: "sans-serif", color: "#1a1a1a", lineHeight: 1.6, whiteSpace: "pre-line" }}>{b.val}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "#fef3ec", borderLeft: "3px solid #c8622a", padding: "0.875rem 1rem", fontSize: 13, fontFamily: "sans-serif", color: "#7a3a18", borderRadius: "0 6px 6px 0" }}>
              Book immediately: UCLA formal tour (Mon Jul 21), UC Berkeley formal tour (Tue Jul 22), and Kapowui surf lessons (Sun Jul 20) — all fill up in advance.
            </div>
          </div>
        )}

        {activeSection === "Itinerary" && (
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              {days.map((d, i) => <DayCard key={i} day={d} active={activeDay === i} onClick={() => setActiveDay(i)} />)}
            </div>
            {days[activeDay].alert && (
              <div style={{ background: "#fef3ec", borderLeft: "3px solid #c8622a", padding: "0.875rem 1rem", fontSize: 13, fontFamily: "sans-serif", color: "#7a3a18", borderRadius: "0 6px 6px 0", marginBottom: "1rem" }}>
                {days[activeDay].alert}
              </div>
            )}
            {days[activeDay].success && (
              <div style={{ background: "#eaf3de", borderLeft: "3px solid #639922", padding: "0.875rem 1rem", fontSize: 13, fontFamily: "sans-serif", color: "#27500a", borderRadius: "0 6px 6px 0", marginBottom: "1rem" }}>
                {days[activeDay].success}
              </div>
            )}
            <div style={{ border: "1px solid #e8e4de", borderRadius: 8, padding: "1.25rem", background: "#fff" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "1rem", paddingBottom: 10, borderBottom: "1px solid #e8e4de" }}>
                <span style={{ background: "#1a3a4a", color: "#fff", fontFamily: "sans-serif", fontSize: 11, padding: "4px 12px", borderRadius: 20 }}>{days[activeDay].num}</span>
                <span style={{ fontSize: 18, fontWeight: 400 }}>{days[activeDay].title}</span>
                <span style={{ fontSize: 13, fontFamily: "sans-serif", color: "#888", marginLeft: "auto" }}>{days[activeDay].date}</span>
              </div>
              {days[activeDay].events.map((e, i) => <Event key={i} {...e} />)}
            </div>
          </div>
        )}

        {activeSection === "Restaurants" && (
          <div>
            <RestTable title="Santa Monica / Los Angeles" data={restaurants.la} />
            <RestTable title="San Francisco / Bay Area" data={restaurants.sf} />
          </div>
        )}

        {activeSection === "Contacts" && (
          <div>
            <div style={{ fontSize: 11, fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: "#888", marginBottom: "1rem" }}>Key contacts & bookings</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12, marginBottom: "2rem" }}>
              {contacts.map((c, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e8e4de", borderRadius: 8, padding: "1rem" }}>
                  <div style={{ fontSize: 10, fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888", marginBottom: 4 }}>{c.org}</div>
                  <div style={{ fontSize: 13, fontFamily: "sans-serif", fontWeight: 600, color: "#1a1a1a", marginBottom: 2 }}>{c.name}</div>
                  <div style={{ fontSize: 12, fontFamily: "sans-serif", color: "#666", whiteSpace: "pre-line" }}>{c.detail}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: "#888", marginBottom: "1rem" }}>Important reminders</div>
            <div style={{ background: "#fff", border: "1px solid #e8e4de", borderRadius: 8, padding: "1.25rem 1.5rem" }}>
              {reminders.map((r, i) => (
                <div key={i} style={{ fontSize: 13, fontFamily: "sans-serif", color: "#444", padding: "6px 0", borderBottom: i < reminders.length - 1 ? "1px solid #f0ece7" : "none", lineHeight: 1.5 }}>{r}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={{ background: "#1a3a4a", color: "#9fc5d8", textAlign: "center", padding: "2rem", fontSize: 12, fontFamily: "sans-serif", letterSpacing: "0.04em", marginTop: "3rem" }}>
        California College Tour · July 19–23 · Los Angeles & San Francisco
      </div>
    </div>
  );
}
