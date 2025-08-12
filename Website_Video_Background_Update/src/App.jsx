import React from "react";

function App() {
  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/training.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-blue-500/50 to-black/70"></div>

      <div className="relative z-10 text-white text-center p-12">
        <h1 className="text-5xl font-bold">Australian Training Hub</h1>
        <p className="mt-4 text-lg">Empowering careers through nationally recognised training</p>
      </div>

      <main className="relative z-10 p-6 text-white">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
          <p>
            We provide nationally recognised training across various industries,
            including security, first aid, construction, and more.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Courses Offered</h2>
          <ul className="list-disc pl-6">
            <li>CPP20218 – Certificate II in Security Operations</li>
            <li>HLTAID011 – Provide First Aid</li>
            <li>CPCWHS1001 – Prepare to Work Safely in the Construction Industry</li>
            <li>FNS40222 – Certificate IV in Accounting and Bookkeeping</li>
            <li>BSB30120 – Certificate III in Business</li>
            <li>CPP41419 – Certificate IV in Real Estate Practice</li>
            <li>SITHFAB021 – Provide Responsible Service of Alcohol</li>
            <li>BSB30719 – Certificate III in Work Health and Safety</li>
            <li>Traffic Management Implementation (BWTM)</li>
            <li>Traffic Control Combo Course (TC/BWTM Combo)</li>
            <li>Mining Induction – Standard 11 Compliant</li>
            <li>SIT20322 – Certificate II in Hospitality</li>
          </ul>
        </section>
      </main>

      <footer className="relative z-10 p-6 text-center bg-black bg-opacity-50">
        <p>© {new Date().getFullYear()} Australian Training Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
