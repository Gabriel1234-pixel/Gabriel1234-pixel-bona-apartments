"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ReceiptPage() {
  const params = useParams();

  const [payment, setPayment] = useState<any>(null);

  useEffect(() => {
    loadReceipt();
  }, []);

  async function loadReceipt() {
    const res = await fetch(`/api/payments/${params.id}`);
    const data = await res.json();
    setPayment(data);
  }

  if (!payment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading receipt...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div
        id="receipt"
        className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-10"
      >

        <div className="text-center border-b pb-6">

          <h1 className="text-4xl font-bold text-blue-700">
            Bona Apartments
          </h1>

          <p className="text-gray-600">
            Official Payment Receipt
          </p>

        </div>

        <div className="mt-8 grid grid-cols-2 gap-6">

          <div>
            <p className="font-semibold">Receipt No</p>
            <p>#{payment.id}</p>
          </div>

          <div>
            <p className="font-semibold">Payment Date</p>
            <p>{payment.payment_date}</p>
          </div>

          <div>
            <p className="font-semibold">Tenant</p>
            <p>{payment.full_name}</p>
          </div>

          <div>
            <p className="font-semibold">Apartment</p>
            <p>{payment.apartment_name}</p>
          </div>

          <div>
            <p className="font-semibold">Amount Paid</p>
            <p className="text-green-700 font-bold">
              KSh {Number(payment.amount).toLocaleString()}
            </p>
          </div>

          <div>
            <p className="font-semibold">Payment Method</p>
            <p>{payment.payment_method}</p>
          </div>

          <div>
            <p className="font-semibold">Status</p>

            <span
              className={`px-3 py-1 rounded-full text-white ${
                payment.status === "Paid"
                  ? "bg-green-600"
                  : "bg-yellow-600"
              }`}
            >
              {payment.status}
            </span>

          </div>

        </div>

        <div className="mt-12 border-t pt-6 text-center text-gray-600">

          <p>
            Thank you for your payment.
          </p>

          <p className="mt-2">
            Bona Apartments Management System
          </p>

        </div>

      </div>

      <div className="text-center mt-8">

        <button
          onClick={() => window.print()}
          className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800"
        >
          🖨 Print Receipt
        </button>

      </div>

    </div>
  );
}