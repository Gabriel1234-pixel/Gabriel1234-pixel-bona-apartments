export default function Stats() {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold text-yellow-500">5</h3>
            <p className="mt-2">Storeys Planned</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">1</h3>
            <p className="mt-2">Floor Completed</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">5</h3>
            <p className="mt-2">Apartment Units</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">24/7</h3>
            <p className="mt-2">Security</p>
          </div>
        </div>
      </div>
    </section>
  );
}