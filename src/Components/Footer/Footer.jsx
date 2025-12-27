import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-neutral-content mt-20">
      
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-10
                      flex flex-col gap-10
                      md:flex-row md:justify-between">

        {/* Services */}
        <div className="text-center md:text-left">
          <h6 className="font-semibold mb-3 uppercase tracking-wide text-sm">
            Services
          </h6>
          <ul className="space-y-2">
            <li className="link link-hover">Branding</li>
            <li className="link link-hover">Design</li>
            <li className="link link-hover">Marketing</li>
            <li className="link link-hover">Advertisement</li>
          </ul>
        </div>

        {/* Company */}
        <div className="text-center md:text-left">
          <h6 className="font-semibold mb-3 uppercase tracking-wide text-sm">
            Company
          </h6>
          <ul className="space-y-2">
            <li className="link link-hover">About us</li>
            <li className="link link-hover">Contact</li>
            <li className="link link-hover">Jobs</li>
            <li className="link link-hover">Press kit</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="text-center md:text-left">
          <h6 className="font-semibold mb-3 uppercase tracking-wide text-sm">
            Legal
          </h6>
          <ul className="space-y-2">
            <li className="link link-hover">Terms of use</li>
            <li className="link link-hover">Privacy policy</li>
            <li className="link link-hover">Cookie policy</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-blue-800"></div>

      {/* Copyright */}
      <div className="text-center py-4 text-sm text-blue-300">
        © {new Date().getFullYear()} AppVerse Inc. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
