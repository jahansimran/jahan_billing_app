import Basket from "@/components/Basket";
import ProductList from "@/components/ProductList";
import Summary from "@/components/Summary";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-4xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Smart Shopping Cart
          </h1>
          <p className="text-gray-600">
            Add items and watch the savings stack up!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProductList />
          <div className="space-y-6">
            <Basket />
            <Summary />
          </div>
        </div>
      </div>
    </main>
  );
}
