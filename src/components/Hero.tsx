import { Coffee } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="bg-green-600 p-6 rounded-full shadow-lg">
            <Coffee className="w-16 h-16 text-white" />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          Pure Matcha
          <span className="block text-green-600 mt-2">Experience</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
          Traditional Japanese matcha, crafted with care, served wherever you are
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <div className="h-1 w-16 bg-green-600 rounded"></div>
          <div className="h-1 w-8 bg-green-400 rounded"></div>
          <div className="h-1 w-4 bg-green-300 rounded"></div>
        </div>
      </div>
    </section>
  );
}
