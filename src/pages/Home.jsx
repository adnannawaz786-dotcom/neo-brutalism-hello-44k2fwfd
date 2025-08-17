import React from 'react'
import { Button } from '../components/ui/button'

const Home = () => {
  return (
    <div className="min-h-screen bg-yellow-300 p-8">
      {/* Header Section */}
      <header className="mb-12">
        <div className="bg-black text-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
          <h1 className="text-6xl font-black uppercase tracking-tight mb-4 transform -rotate-1">
            HELLO
          </h1>
          <h2 className="text-4xl font-black uppercase text-yellow-300 transform rotate-1">
            SAMANTHA
          </h2>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Welcome Card */}
        <div className="bg-pink-400 border-8 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
          <h3 className="text-2xl font-black uppercase mb-4">WELCOME!</h3>
          <p className="text-lg font-bold">
            This is your brutalist paradise. Bold, loud, and unapologetic.
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-cyan-400 border-8 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <h3 className="text-2xl font-black uppercase mb-4">NEO BRUTAL</h3>
          <p className="text-lg font-bold">
            Sharp edges, bold colors, and maximum impact design philosophy.
          </p>
        </div>

        {/* Action Card */}
        <div className="bg-lime-400 border-8 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2 hover:rotate-0 transition-transform duration-300 md:col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-black uppercase mb-4">GET STARTED</h3>
          <p className="text-lg font-bold mb-4">
            Ready to embrace the chaos?
          </p>
          <Button className="bg-black text-white border-4 border-black font-black uppercase text-lg px-8 py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
            CLICK ME!
          </Button>
        </div>
      </main>

      {/* Feature Boxes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-orange-400 border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-white border-4 border-black p-4 mb-6 transform -rotate-1">
            <h4 className="text-xl font-black uppercase">BOLD TYPOGRAPHY</h4>
          </div>
          <ul className="space-y-2 text-lg font-bold">
            <li className="bg-black text-white p-2 border-2 border-black">✓ MAXIMUM IMPACT</li>
            <li className="bg-black text-white p-2 border-2 border-black">✓ ZERO SUBTLETY</li>
            <li className="bg-black text-white p-2 border-2 border-black">✓ PURE ATTITUDE</li>
          </ul>
        </div>

        <div className="bg-purple-400 border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-white border-4 border-black p-4 mb-6 transform rotate-1">
            <h4 className="text-xl font-black uppercase">BRUTAL COLORS</h4>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-red-500 border-4 border-black h-16 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
            <div className="bg-blue-500 border-4 border-black h-16 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
            <div className="bg-green-500 border-4 border-black h-16 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-red-400 border-8 border-black p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-12">
        <blockquote className="text-center">
          <p className="text-3xl font-black uppercase mb-6 text-white bg-black p-4 border-4 border-white transform rotate-1">
            "DESIGN IS NOT JUST WHAT IT LOOKS LIKE"
          </p>
          <p className="text-xl font-bold">
            - BUT SAMANTHA, THIS IS BRUTALISM, WE DON'T CARE ABOUT QUOTES!
          </p>
        </blockquote>
      </section>

      {/* Interactive Elements */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-teal-400 border-6 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 cursor-pointer">
          <div className="text-4xl mb-4">🔥</div>
          <h5 className="text-lg font-black uppercase">HOT TAKES</h5>
        </div>
        
        <div className="bg-rose-400 border-6 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 cursor-pointer">
          <div className="text-4xl mb-4">⚡</div>
          <h5 className="text-lg font-black uppercase">HIGH ENERGY</h5>
        </div>
        
        <div className="bg-amber-400 border-6 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 cursor-pointer">
          <div className="text-4xl mb-4">💥</div>
          <h5 className="text-lg font-black uppercase">MAXIMUM IMPACT</h5>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transform rotate-1">
        <div className="text-center">
          <h6 className="text-2xl font-black uppercase mb-4 text-yellow-300">
            SAMANTHA'S BRUTAL ZONE
          </h6>
          <p className="text-lg font-bold mb-6">
            WHERE SUBTLETY COMES TO DIE
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-yellow-300 text-black border-4 border-white font-black uppercase px-6 py-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              CONTACT
            </Button>
            <Button className="bg-pink-400 text-black border-4 border-white font-black uppercase px-6 py-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              FOLLOW
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home