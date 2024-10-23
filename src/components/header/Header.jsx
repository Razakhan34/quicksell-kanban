import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as DownIcon } from "../../assets/icons/down.svg";
import { ReactComponent as DisplayIcon } from "../../assets/icons/Display.svg";
import "./Header.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="header">
      <div className="header-options" ref={dropdownRef}>
        <button
          className="display-button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="icon">
            <DisplayIcon />
          </span>
          Display
          <span className="icon">
            <DownIcon />
          </span>
        </button>
        {showDropdown && (
          <div className="dropdown">
            <div className="dropdown-item">
              <label htmlFor="grouping">Grouping: </label>
              <select id="grouping">
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-item">
              <label htmlFor="ordering">Ordering: </label>
              <select id="ordering">
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
