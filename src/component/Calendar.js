import React from "react";
import "./Calendar.css";
import { Link, Router } from "react-router-dom";
import { BiPlusCircle } from "react-icons/bi";
import { FaSearch } from 'react-icons/fa';

function Calendar() {
  return (
    <>
      <div className="Calendar-component">
        <div className="month">
          <div className="month-top">
            <div className="November">November 2021</div>
            <div className="month-top-center">Tody<br/><span className="span-month-top">18,Mon</span></div>
            <div>
              <input type="text" placeholder="Search.." name="search" className="search-bar" />
              <span className="icon-search" ><FaSearch/></span>
            </div>
          </div>

          <br />
          <div className="date-month">
            <li className="prev">&#10094;</li>
            <li>Day</li>
            <li>Week</li>
            <li>Month</li>
            <li className="next">&#10095;</li>
          </div>
        </div>

        <ul className="weekdays">
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
          <li>Su</li>
        </ul>

        <ol className="days-calender">
          <li className="days-calender1"> `</li>
          <li title="Book Rerurn Ticket"> .</li>
          <li title="Book Rerurn Ticket"> .</li>
          <li title="Book Rerurn Ticket"> .</li>
          <li title="Book Rerurn Ticket"> .</li>
          <li title="Book Rerurn Ticket">1</li>
          <li title="Book Rerurn Ticket">2</li>
          <li title="Book Rerurn Ticket">3</li>
          <li title="Book Rerurn Ticket">4</li>
          <li title="Book Rerurn Ticket">5</li>
          <li title="Book Rerurn Ticket">6</li>
          <li title="Book Rerurn Ticket">7</li>
          <li title="Book Rerurn Ticket">8</li>
          <li title="Book Rerurn Ticket">9</li>
          <li title="Book Rerurn Ticket">10</li>
          <li title="Book Rerurn Ticket">11</li>
          <li title="Book Rerurn Ticket">12</li>
          <li title="Book Rerurn Ticket">13</li>
          <li title="Book Rerurn Ticket">14</li>
          <li title="Book Rerurn Ticket">15</li>
          <li title="Book Rerurn Ticket">16</li>
          <li title="Book Rerurn Ticket">17</li>
          <li title="Book Rerurn Ticket">18</li>
          <li title="Book Rerurn Ticket">19</li>
          <li title="Book Rerurn Ticket">20</li>
          <li title="Book Rerurn Ticket">21</li>
          <li title="Book Rerurn Ticket">22</li>
          <li title="Book Rerurn Ticket">23</li>
          <li title="Book Rerurn Ticket">24</li>
          <li title="Book Rerurn Ticket">25</li>
          <li title="Book Rerurn Ticket">26</li>
          <li title="Book Rerurn Ticket">27</li>
          <li title="Book Rerurn Ticket">28</li>
          <li title="Book Rerurn Ticket">29</li>
          <li title="Book Rerurn Ticket">30</li>
          <li className="days-calender2">31</li>
        </ol>
      </div>
    </>
  );
}

export default Calendar;
