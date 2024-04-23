import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

////////////////////////////////

const AdminDashboard = () => {
  const [employees, setemployees] = useState([]);
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/admindashboard")
      .then((employees) => setemployees(employees.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getImage")
      .then((users) => setusers(users.data))
      .catch((err) => console.log(err));
  }, []);
          {/* http://localhost:3001/Images/file_1713765501781.jpeg */}  


 

  return (
    <div className="antialiased h-full">
      <Navbar />
      <div className="h-full w-full flex overflow-hidden antialiased text-gray-800">
        <div className="flex-1 flex flex-col">
       {/* {users.map((user) => {
        return(
          <>
            <img src={user.image} />
          </>
        )
       })} */}

          {/* <!-- section body header --> */}
          <header
            aria-label="page caption"
            className="flex-none flex h-16 bg-gray-100 border-t px-4 items-center"
          >
            <h1 id="page-caption" className="font-semibold text-lg">
              Admin Dashboard
            </h1>
          </header>

          {/* <!-- main content --> */}
          <main className="flex-grow flex min-h-0 border-t">
            {/* <!-- section content --> */}
            <section
              aria-label="main content"
              className="flex min-h-0 flex-col flex-auto border-l"
            >
              <nav className="bg-gray-100 flex p-4">
                <section
                  aria-labelledby="open-tickets-tabs-label"
                  className="mr-4 focus:outline-none"
                >
                  <label
                    id="open-tickets-tabs-label"
                    className="font-semibold block mb-1 text-sm"
                  >
                    Employee
                    <span className="font-normal text-gray-700">(current)</span>
                  </label>
                  <ul className="flex">
                    <li>
                      <button className="focus:outline-none focus:bg-yellow-200 p-2 rounded-l-md border border-r-0 bg-white flex flex-col items-center w-24">
                        <p className="font-semibold text-lg">6</p>
                        <p className="text-sm uppercase text-gray-600">You</p>
                      </button>
                    </li>
                    <li>
                      <button className="focus:outline-none focus:bg-yellow-200 p-2 border rounded-r-md bg-white flex flex-col items-center w-24 cursor-pointer">
                        <p className="font-semibold text-lg">23</p>
                        <p className="text-sm uppercase text-gray-600">
                          Groups
                        </p>
                      </button>
                    </li>
                  </ul>
                </section>
                {/* <!-- stats nav --> */}
              </nav>

              {/* <!-- content caption --> */}
              <header className="bg-white border-t flex items-center py-1 px-4">
                <div className="flex">
                  <h2 id="content-caption" className="font-semibold">
                    Employee requiring your attention
                  </h2>
                  <span className="ml-3 group relative">
                    <button
                      role="details"
                      aria-controls="info-popup"
                      className="text-blue-700 border-b border-dotted border-blue-700 focus:outline-none text-sm"
                    >
                      What is this?
                    </button>
                    <div
                      role="tooltip"
                      id="info-popup"
                      className="absolute pt-1 rounded-md rounded-t-lg right-0 transform translate-x-40 mx-auto hidden group-hover:block z-50"
                    >
                      <div className="border rounded-md rounded-t-lg shadow-lg bg-white max-w-xs w-screen">
                        <header className="font-semibold rounded-t-lg bg-gray-300 px-4 py-2">
                          People are waiting for replies!
                        </header>
                        <div className="p-4 border-t">
                          <p className="mb-4">
                            These are new or open tickets that are assigned to
                            you, unassinged in your group(s) or not assigned to
                            any group.
                          </p>
                          <p className="mb-1">
                            They are ordered by priority and requester update
                            date (oldest first).
                          </p>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
                <div className="ml-auto">
                  <button
                    title="See available tickets in this view"
                    aria-label="play"
                    className="border rounded-md px-3 py-2 leading-none"
                  >
                    Play
                  </button>
                </div>
              </header>
              {/* 
            <!-- content overflow section 
                remove table and thead but keep tbody and change tbody to section, in order
                to have scrollable overflow section --> */}
              <table
                aria-describedby="info-popup"
                aria-label="open tickets"
                className="border-t w-full min-h-0 h-full flex flex-col"
              >
                <thead className="flex w-full flex-col px-4">
                  <tr className="border-b flex">
                    <th className="font-semibold text-left py-3 px-1 w-24 truncate">
                      S.No
                    </th>

                    <th className="font-semibold text-left py-3 px-1 w-24 truncate">
                      Name
                    </th>
                    <th className="font-semibold text-left py-3 px-1 w-full max-w-xs xl:max-w-lg truncate">
                      Email
                    </th>
                    <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
                      Company
                    </th>
                    <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
                      Date
                    </th>
                    <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
                      mobile
                    </th>
                    <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
                      No.of Employee
                    </th>
                  </tr>
                </thead>
                <tbody className="flex w-full flex-col flex-1 min-h-0 overflow-hidden px-4">
                  {employees.map((employee) => {
                    return (
                      <>
                        <tr
                          role="row"
                          className="hover:bg-blue-100 border-b flex cursor-pointer"
                        >
                          <td
                            role="cell"
                            headers="select"
                            className="py-3 pl-3 pr-1 w-24 flex items-start"
                          >
                            <input className="mt-1" type="checkbox" />
                            <div className="ml-auto relative group">
                              <span
                                style={{
                                  padding: "2px 5px",
                                  fontSize: "0.7rem",
                                  position: "relative",
                                  bottom: "2px",
                                }}
                                className="font-mono rounded-sm bg-blue-400 text-white leading-none"
                              >
                                O
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-1 w-28 max-w-xs xl:max-w-lg">
                            <div className="relative group w-full">
                              <p className="w-full truncate">{employee.name}</p>
                            </div>
                          </td>
                          <td className="py-3 px-1 w-full max-w-xs xl:max-w-lg">
                            <div className="relative group w-full">
                              <p className="w-full truncate">
                                {employee.email}
                              </p>
                            </div>
                          </td>
                          <td className="py-3 px-1 flex-1 truncate">
                            {employee.company}
                          </td>
                          <td className="py-3 px-1 flex-1 truncate"></td>
                          <td className="py-3 px-1 flex-1 truncate">
                            {employee.phone}
                          </td>
                          <td className="py-3 px-1 flex-1 truncate">
                            {employee.numberofemployee}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>

              {/* <!-- content footer, currently hidden --> */}
              <footer
                aria-label="content footer"
                className="flex p-3 bg-red-500 border-t hidden"
              >
                footer
              </footer>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
