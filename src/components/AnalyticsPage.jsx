// components/AnalyticsPage.jsx
import React from 'react';
import { Analytics } from "@vercel/analytics/react";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Statistiques du site</h1>
      
      <p className="text-gray-600 mb-4">
        Tracking actif avec Vercel Analytics
      </p>

      <Analytics />
    </div>
  );
}
