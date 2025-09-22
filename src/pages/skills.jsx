export default function Skills() {
  return (
    <section className="p-10 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Core Competencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="font-semibold text-lg">Accounting & Finance</h3>
          <p className="text-gray-600 mt-2">Financial reporting, budgeting, tax compliance, accounting software.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="font-semibold text-lg">Data Management</h3>
          <p className="text-gray-600 mt-2">Data analysis, record maintenance, advanced MS Excel.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="font-semibold text-lg">IT Support & Solutions</h3>
          <p className="text-gray-600 mt-2">Troubleshooting, workflow optimization, systems implementation.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="font-semibold text-lg">Fintech</h3>
          <p className="text-gray-600 mt-2">Leveraging technology to streamline financial processes.</p>
        </div>
      </div>
    </section>
  );
}