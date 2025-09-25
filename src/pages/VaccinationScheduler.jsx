import React, { useState } from "react";
import { CardNavbar } from "../components/CardNavbar";
import { Footer } from "../components/Footer";

const sampleVaccinationData = [
  { patientName: "Pranav Balaji P MA", vaccinationDate: "2025-09-16", vaccinationName: "COVID-19 Booster", hospitalName: "Apollo Hospital, Chennai" },
  { patientName: "Priya", vaccinationDate: "2025-09-16", vaccinationName: "Hepatitis B", hospitalName: "Fortis Healthcare, Delhi" },
  { patientName: "Dharnesh", vaccinationDate: "2025-09-16", vaccinationName: "Polio", hospitalName: "AIIMS Hospital, Delhi" },
  { patientName: "Jai Mithran", vaccinationDate: "2025-09-16", vaccinationName: "Typhoid", hospitalName: "KIMS Hospital, Kochi" },
  { patientName: "Krishna", vaccinationDate: "2025-09-16", vaccinationName: "Tetanus", hospitalName: "Manipal Hospital, Bangalore" },
  { patientName: "Surya Kumar", vaccinationDate: "2025-09-16", vaccinationName: "Chickenpox", hospitalName: "Fortis Healthcare, Hyderabad" },
  { patientName: "Kavya", vaccinationDate: "2025-09-16", vaccinationName: "HPV", hospitalName: "Medanta Hospital, Gurgaon" },
];

const VaccinationScheduler = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState(""); // hospital | vaccine | date
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // ✅ Filter by search term
  let filteredData = sampleVaccinationData.filter((entry) =>
    Object.values(entry)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // ✅ Filter by date range
  if (startDate && endDate) {
    filteredData = filteredData.filter((entry) => {
      const date = new Date(entry.vaccinationDate);
      return date >= new Date(startDate) && date <= new Date(endDate);
    });
  }

  // ✅ Sort by selected field
  if (sortKey === "hospital") {
    filteredData.sort((a, b) => a.hospitalName.localeCompare(b.hospitalName));
  } else if (sortKey === "vaccine") {
    filteredData.sort((a, b) => a.vaccinationName.localeCompare(b.vaccinationName));
  } else if (sortKey === "date") {
    filteredData.sort((a, b) => new Date(a.vaccinationDate) - new Date(b.vaccinationDate));
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <CardNavbar />

      <main className="container mx-auto px-4 pt-32 pb-16 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Vaccination Scheduler
        </h1>

        {/* 🔍 Search & Sort Controls */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search by patient, vaccine, or hospital..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
          />

          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            <option value="">Sort By</option>
            <option value="hospital">Hospital</option>
            <option value="vaccine">Vaccine Name</option>
            <option value="date">Vaccination Date</option>
          </select>

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
          />

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>

        {/* 📋 Table */}
        <div className="overflow-x-auto bg-white border border-gray-300 rounded shadow-sm">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 border-b border-gray-300 text-left">Patient Name</th>
                <th className="px-4 py-3 border-b border-gray-300 text-left">Vaccination Date</th>
                <th className="px-4 py-3 border-b border-gray-300 text-left">Vaccine Name</th>
                <th className="px-4 py-3 border-b border-gray-300 text-left">Hospital</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((entry, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b border-gray-300 text-left">{entry.patientName}</td>
                    <td className="px-4 py-3 border-b border-gray-300 text-left">{entry.vaccinationDate}</td>
                    <td className="px-4 py-3 border-b border-gray-300 text-left">{entry.vaccinationName}</td>
                    <td className="px-4 py-3 border-b border-gray-300 text-left">{entry.hospitalName}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center px-4 py-6 text-gray-500"
                  >
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VaccinationScheduler;
