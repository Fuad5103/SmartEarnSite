http://SmartEarn.azimport React from 'react';

export default function SmartEarnSite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased p-6">
      <header className="bg-white shadow p-4 rounded-md mb-6">
        <h1 className="text-3xl font-bold">SmartEarn.az</h1>
        <p className="text-gray-600">Ağıllı yollarla onlayn gəlir / Smart ways to earn online</p>
      </header>
      <main>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Ən yaxşı pul qazanma yolları</h2>
          <p className="text-gray-700 mt-2">TimeBucks, SwagBucks, AI alətləri və affiliate sistemləri haqqında təlimatlar.</p>
        </section>
        <section className="mb-6">
          <h3 className="text-xl font-semibold">Tövsiyə olunan offerlar / Offers</h3>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>ClickBank və Digistore24 affiliate linkləri</li>
            <li>TimeBucks referral linkləri</li>
          </ul>
        </section>
        <section className="mb-6">
          <h3 className="text-xl font-semibold">Ən yeni məqalələr / Latest articles</h3>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Ən yaxşı 5 pul qazanma app-i (2025)</li>
            <li>AI ilə 1 saatda 10$ necə qazanmaq olar</li>
            <li>Affiliate şəbəkələrə necə qoşulmaq olar</li>
          </ul>
        </section>
      </main>
      <footer className="bg-white border-t mt-6 p-4 rounded-md text-gray-500 text-sm">
        © 2025 SmartEarn.az. Bütün hüquqlar qorunur.
      </footer>
    </div>
  );
}
