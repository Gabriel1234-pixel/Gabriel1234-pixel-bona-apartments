import Image from "next/image";

interface Apartment {
  id: number;
  apartment_name: string;
  apartment_type: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  status: string;
  image: string;
  description: string;
}

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ApartmentDetails({ params }: Props) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/apartments/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <main className="max-w-5xl mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold text-red-600">
          Apartment Not Found
        </h1>
      </main>
    );
  }

  const apartment: Apartment = await res.json();

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2">

        <div>
          <div className="rounded-xl overflow-hidden shadow-lg">
  <img
  src={`/images/${apartment.image}`}
  alt={apartment.apartment_name}
  className="w-full h-[450px] object-cover rounded-xl shadow-lg"
/>
</div>
        </div>

        <div>
          <h1 className="mb-4 text-5xl font-bold text-blue-700">
            {apartment.apartment_name}
          </h1>

          <p className="mb-6 text-3xl font-bold text-green-600">
            KSh {Number(apartment.price).toLocaleString()}
          </p>

          <div className="space-y-4 text-lg">
            <p>
              <strong>Apartment Type:</strong> {apartment.apartment_type}
            </p>

            <p>
              <strong>Bedrooms:</strong> {apartment.bedrooms}
            </p>

            <p>
              <strong>Bathrooms:</strong> {apartment.bathrooms}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`font-semibold ${
                  apartment.status === "Available"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {apartment.status}
              </span>
            </p>
          </div>

          <div className="mt-8">
            <h2 className="mb-3 text-2xl font-bold">
              Description
            </h2>

            <p className="leading-8 text-gray-700">
              {apartment.description}
            </p>
          </div>

          <button className="mt-10 rounded-lg bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800">
            Book a Viewing
          </button>
        </div>

      </div>
    </main>
  );
}