import React from 'react'
import { Button } from './components/ui/button'
import { cn } from './lib/utils'

function App() {
  return (
    <div className="min-h-screen bg-yellow-300 p-8 font-mono">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-12">
          <div className="bg-black text-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_#000000] transform -rotate-1">
            <h1 className="text-6xl font-black uppercase tracking-wider mb-4">
              HELLO
            </h1>
            <div className="bg-red-500 text-black p-4 border-4 border-black inline-block transform rotate-2 shadow-[6px_6px_0px_0px_#000000]">
              <span className="text-3xl font-black uppercase">SAMANTHA</span>
            </div>
          </div>
        </header>

        {/* Welcome Message */}
        <section className="mb-12">
          <div className="bg-white p-8 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform rotate-1">
            <h2 className="text-4xl font-black uppercase mb-6 text-black">
              Welcome to Neo-Brutalism
            </h2>
            <p className="text-xl font-bold text-black mb-6 leading-relaxed">
              This is a bold, unapologetic design approach that embraces raw aesthetics, 
              sharp edges, and high contrast elements. Everything here is intentionally 
              loud and proud!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className={cn(
                  "bg-blue-500 hover:bg-blue-600 text-black font-black text-lg px-8 py-4",
                  "border-4 border-black shadow-[6px_6px_0px_0px_#000000]",
                  "transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#000000]",
                  "transition-all duration-150 uppercase"
                )}
              >
                Click Me!
              </Button>
              <Button 
                className={cn(
                  "bg-green-500 hover:bg-green-600 text-black font-black text-lg px-8 py-4",
                  "border-4 border-black shadow-[6px_6px_0px_0px_#000000]",
                  "transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#000000]",
                  "transition-all duration-150 uppercase"
                )}
              >
                Or Me!
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-500 p-6 border-6 border-black shadow-[10px_10px_0px_0px_#000000] transform -rotate-2">
              <h3 className="text-2xl font-black uppercase text-black mb-4">
                BOLD COLORS
              </h3>
              <p className="text-black font-bold">
                Vibrant, saturated colors that demand attention and create 
                strong visual hierarchy.
              </p>
            </div>
            <div className="bg-orange-500 p-6 border-6 border-black shadow-[10px_10px_0px_0px_#000000] transform rotate-2">
              <h3 className="text-2xl font-black uppercase text-black mb-4">
                SHARP EDGES
              </h3>
              <p className="text-black font-bold">
                No rounded corners here! Everything is angular, geometric, 
                and deliberately harsh.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Section */}
        <section className="mb-12">
          <div className="bg-pink-400 p-8 border-8 border-black shadow-[12px_12px_0px_0px_#000000]">
            <h2 className="text-3xl font-black uppercase mb-6 text-black">
              Hey Samantha! 👋
            </h2>
            <div className="bg-white p-6 border-4 border-black mb-6">
              <p className="text-xl font-bold text-black mb-4">
                This page was crafted especially for you with love and lots of 
                bold design choices!
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-red-500 text-black px-4 py-2 border-3 border-black font-black uppercase text-sm">
                  CREATIVE
                </span>
                <span className="bg-blue-500 text-black px-4 py-2 border-3 border-black font-black uppercase text-sm">
                  BOLD
                </span>
                <span className="bg-green-500 text-black px-4 py-2 border-3 border-black font-black uppercase text-sm">
                  UNIQUE
                </span>
                <span className="bg-yellow-500 text-black px-4 py-2 border-3 border-black font-black uppercase text-sm">
                  AWESOME
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="mb-12">
          <div className="bg-black text-white p-8 border-8 border-black shadow-[15px_15px_0px_0px_#ff0000] transform rotate-1">
            <blockquote className="text-2xl font-black uppercase text-center">
              "DESIGN IS NOT JUST WHAT IT LOOKS LIKE - 
              <br />
              <span className="text-yellow-400">
                DESIGN IS HOW IT WORKS!"
              </span>
            </blockquote>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center">
          <div className="bg-white p-6 border-6 border-black shadow-[8px_8px_0px_0px_#000000] transform -rotate-1">
            <p className="text-xl font-black uppercase text-black mb-4">
              Made with ❤️ and lots of CSS
            </p>
            <Button 
              className={cn(
                "bg-red-500 hover:bg-red-600 text-white font-black text-lg px-8 py-4",
                "border-4 border-black shadow-[6px_6px_0px_0px_#000000]",
                "transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#000000]",
                "transition-all duration-150 uppercase"
              )}
            >
              Say Hello Back!
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App