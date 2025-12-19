import CartSummary from "@/components/booking/CartSummary";

export default function CheckoutPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <CartSummary />
      <button className="bg-black text-white px-6 py-3 mt-4">
        Proceed to Payment
      </button>
    </main>
  );
}
