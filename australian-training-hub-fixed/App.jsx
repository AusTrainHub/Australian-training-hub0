import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

const courses = [
  { id: 'CPP20218', title: 'CPP20218 – Certificate II in Security Operations', length: '6–12 weeks', delivery: 'Face-to-face / Blended', desc: 'Entry-level security training preparing learners for roles in patrol, venue and static security.' },
  { id: 'HLTAID011', title: 'HLTAID011 – Provide First Aid', length: '1 day', delivery: 'Face-to-face', desc: 'Nationally recognised first aid course covering CPR, casualty management and emergency response.' },
  { id: 'CPCWHS1001', title: 'CPCWHS1001 – White Card (Construction Induction)', length: 'Half day', delivery: 'Face-to-face / Live online (WA rules apply)', desc: 'Mandatory construction induction training for workers on-site.' },
  { id: 'FNS40222', title: 'FNS40222 – Certificate IV in Accounting and Bookkeeping', length: '6–12 months', delivery: 'Online / Blended', desc: 'Accounting fundamentals for bookkeepers, covering BAS, ledgers and payroll basics.' },
  { id: 'BSB30120', title: 'BSB30120 – Certificate III in Business', length: '3–6 months', delivery: 'Online', desc: 'Core business skills: customer service, workplace communication and organisational tasks.' },
  { id: 'CPP41419', title: 'CPP41419 – Certificate IV in Real Estate Practice', length: '6–12 months', delivery: 'Online / Classroom', desc: 'Prepares learners for restricted or unrestricted registration in real estate practice.' },
  { id: 'SITHFAB021', title: 'SITHFAB021 – RSA (Responsible Service of Alcohol)', length: '3–6 hours', delivery: 'Face-to-face / Online (state rules vary)', desc: 'Required national unit for staff serving alcohol in hospitality venues.' },
  { id: 'BSB30719', title: 'BSB30719 – Certificate III in Work Health & Safety', length: '6–12 months', delivery: 'Blended', desc: 'Foundational WHS skills for workplace safety representatives and supervisors.' },
  { id: 'BWTM', title: 'Basic Worksite Traffic Management (BWTM)', length: '1 day', delivery: 'Face-to-face', desc: 'Traffic management principles for low-risk work sites; aligns with Main Roads WA requirements.' },
  { id: 'TC_BWTM_COMBO', title: 'Traffic Control Combo – TC/BWTM', length: '2 days', delivery: 'Face-to-face', desc: 'Combined Traffic Controller + BWTM training for flexible workforce deployment.' },
  { id: 'MINING11', title: 'Mining Induction – Standard 11 Compliant', length: '1 day', delivery: 'Face-to-face', desc: 'Site induction for entry to mining operations meeting Standard 11 requirements.' },
  { id: 'SIT20322', title: 'SIT20322 – Certificate II in Hospitality', length: '3–6 months', delivery: 'Face-to-face / Blended', desc: 'Introductory hospitality skills: barista, food service and basic kitchen operations.' }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

/* Full component code identical to the canvas document... */

export default App;
