import React from "react";
import "./topbar.css";
import logo from "./logo.png";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"><img src={logo} alt="devHuß" height="23px" width="32px" />devHuß</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}