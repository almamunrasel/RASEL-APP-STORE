import React, { useState, useEffect } from 'react';
import Applications from '../../Components/Applications/Applications';
import { useLoaderData } from 'react-router';
import NotFound from '../../Components/NotFound/NotFound';
import AliveLoader from  '../../Components/AliveLoader/AliveLoader'

const AllApps = () => {
  const data = useLoaderData();
  const [searchText, setSearchText] = useState('');
  const [filteredApps, setFilteredApps] = useState(data);
  const [loading, setLoading] = useState(false);

  // filter apps when searchText changes
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const results = data.filter(
        (app) =>
          app.title.toLowerCase().includes(searchText.toLowerCase()) ||
          app.companyName?.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredApps(results);
      setLoading(false);
    }, 300); // small delay for smoother animation

    return () => clearTimeout(timer);
  }, [searchText, data]);

  return (
    <div className="p-5">
      {loading && (
  <div className="fixed inset-0 flex justify-center items-center bg-black/20 z-50">
    <AliveLoader size={4} />
  </div>
)}
      <div className="text-center mt-10">
        <p className="font-bold text-3xl">Our All Applications</p>
        <p className="text-[#627382] p-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search and count */}
      <div className="flex justify-between items-center mt-10">
        <div>
          <p className="font-semibold text-xl">{filteredApps.length} Apps Found</p>
        </div>
        <div className="relative">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search Apps..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="pl-8"
            />
          </label>

          {/* Loading indicator inside search */}
         
        </div>
      </div>

      {/* Results or NotFound */}
      <div className="mt-10">
        {filteredApps.length === 0 ? (
          <NotFound onShowAll={() => setSearchText('')} />
        ) : (
          <Applications data={filteredApps} />
        )}
      </div>
    </div>
  );
};

export default AllApps;
