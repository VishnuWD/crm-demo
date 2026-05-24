export const stats = [
  { label: "Total Revenue", value: "₹12.4L", change: "+18.2%" },
  { label: "Active Bookings", value: "248", change: "+12.7%" },
  { label: "Guest Satisfaction", value: "96.4%", change: "+1.8%" },
  { label: "Occupancy Rate", value: "82%", change: "+9.1%" },
];

export const monthlyRevenue = [
  { month: "Jan", revenue: 220 },
  { month: "Feb", revenue: 310 },
  { month: "Mar", revenue: 275 },
  { month: "Apr", revenue: 430 },
  { month: "May", revenue: 520 },
  { month: "Jun", revenue: 610 },
  { month: "Jul", revenue: 580 },
  { month: "Aug", revenue: 690 },
];

export const occupancyByProperty = [
  { name: "Lake House", occupancy: 91 },
  { name: "Forest Villa", occupancy: 84 },
  { name: "Skyline Stay", occupancy: 76 },
  { name: "Garden Retreat", occupancy: 88 },
  { name: "Coastal Haven", occupancy: 69 },
];

export const guestMix = [
  { name: "Families", value: 34 },
  { name: "Couples", value: 28 },
  { name: "Corporate", value: 22 },
  { name: "Groups", value: 16 },
];

export const recentBookings = [
  {
    id: "BK-2041",
    guest: "Aarav Mehta",
    property: "Lake House Villa",
    dates: "Jun 12 – Jun 15",
    amount: "₹48,000",
    status: "Confirmed",
  },
  {
    id: "BK-2042",
    guest: "Sara Khan",
    property: "Forest View Retreat",
    dates: "Jun 14 – Jun 16",
    amount: "₹31,500",
    status: "Pending",
  },
  {
    id: "BK-2043",
    guest: "Rohit Bansal",
    property: "Skyline Stay",
    dates: "Jun 18 – Jun 21",
    amount: "₹62,000",
    status: "Checked In",
  },
  {
    id: "BK-2044",
    guest: "Ananya Rao",
    property: "Garden Villa",
    dates: "Jun 20 – Jun 22",
    amount: "₹27,500",
    status: "Confirmed",
  },
];

export const guests = [
  {
    name: "Aarav Mehta",
    type: "VIP",
    visits: 6,
    spend: "₹2.4L",
    lastStay: "2 weeks ago",
    city: "Mumbai",
  },
  {
    name: "Sara Khan",
    type: "Returning",
    visits: 3,
    spend: "₹1.1L",
    lastStay: "1 month ago",
    city: "Hyderabad",
  },
  {
    name: "Rohit Bansal",
    type: "Corporate",
    visits: 8,
    spend: "₹3.8L",
    lastStay: "5 days ago",
    city: "Delhi",
  },
  {
    name: "Ananya Rao",
    type: "New",
    visits: 1,
    spend: "₹27K",
    lastStay: "Booked now",
    city: "Bengaluru",
  },
  {
    name: "Kabir Shah",
    type: "VIP",
    visits: 12,
    spend: "₹5.2L",
    lastStay: "Yesterday",
    city: "Pune",
  },
];

export const properties = [
  {
    name: "Lake House Villa",
    location: "Kodaikanal",
    type: "Villa",
    occupancy: 91,
    nightlyRate: "₹18,000",
    rooms: 4,
    status: "Live",
  },
  {
    name: "Forest View Retreat",
    location: "Coorg",
    type: "Retreat",
    occupancy: 84,
    nightlyRate: "₹14,500",
    rooms: 6,
    status: "Live",
  },
  {
    name: "Skyline Stay",
    location: "Goa",
    type: "Penthouse",
    occupancy: 76,
    nightlyRate: "₹24,000",
    rooms: 3,
    status: "High Demand",
  },
  {
    name: "Garden Villa",
    location: "Lonavala",
    type: "Villa",
    occupancy: 88,
    nightlyRate: "₹16,500",
    rooms: 5,
    status: "Live",
  },
];

export const messages = [
  {
    from: "Aarav Mehta",
    subject: "Request for early check-in",
    preview: "Would it be possible to arrange early check-in for my booking next week?",
    time: "10:42 AM",
    unread: true,
  },
  {
    from: "Operations Team",
    subject: "Villa cleaning completed",
    preview: "Lake House Villa is ready. Photos updated in the shared folder.",
    time: "9:18 AM",
    unread: false,
  },
  {
    from: "Sara Khan",
    subject: "Special anniversary setup",
    preview: "Please add flowers and a cake to the room before arrival.",
    time: "Yesterday",
    unread: true,
  },
  {
    from: "Property Manager",
    subject: "Maintenance update",
    preview: "The AC issue has been fixed and the room is now available.",
    time: "Yesterday",
    unread: false,
  },
];

export const tasks = [
  { title: "Confirm weekend bookings", done: false, priority: "High" },
  { title: "Send guest welcome messages", done: true, priority: "Medium" },
  { title: "Review villa pricing", done: false, priority: "High" },
  { title: "Update property photos", done: true, priority: "Low" },
  { title: "Assign housekeeping schedule", done: false, priority: "Medium" },
];