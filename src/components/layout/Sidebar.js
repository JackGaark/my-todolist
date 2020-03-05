import React from "react";
import {
  FaChevron,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from "react-icons/fa";

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li>
        <span>FaInbox</span>
      </li>
      <li>
        <span>
          <FaRegCalendar />
        </span>
      </li>
      <li>
        <span>
          <FaRegCalendarAlt />
        </span>
      </li>
      <li>
        <span>Next 7 days</span>
      </li>
    </ul>

    <div className="sidebar__middle">
      <span>
        <FaChevronDown />
      </span>
      <h2>Projects</h2>
    </div>
  </div>
);
