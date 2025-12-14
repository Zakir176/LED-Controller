<template>
  <div class="min-h-screen bg-black text-white overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8 z-10">
          <span class="inline-block px-4 py-2 bg-gray-800 rounded-full text-sm uppercase tracking-wider">
            LED Light Controller
          </span>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Discovery<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Smart Light
            </span><br />
            Technology
          </h1>
          <p class="text-gray-300 text-lg max-w-md">
            Experience the convenience of adjusting your lighting with just a tap command!
          </p>
          <button class="px-10 py-5 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-200 transition shadow-2xl">
            Explore
          </button>
        </div>
        <div class="relative flex justify-center">
          <img src="https://via.placeholder.com/600x800/1a1a1a/ffffff?text=iPhone+Mockup" 
               alt="iPhone App"
               class="rounded-3xl shadow-2xl w-full max-w-md transform -rotate-12" />
          <img src="https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Light+Bulb" 
               alt="Smart Bulb"
               class="absolute -right-20 top-20 rounded-2xl shadow-2xl w-64 transform rotate-6" />
        </div>
      </div>
    </section>

    <!-- Multiple Platforms -->
    <section class="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900">
      <div class="max-w-5xl mx-auto text-center space-y-12">
        <h2 class="text-4xl md:text-5xl font-bold">Multiple Platforms</h2>
        <p class="text-gray-300 text-lg">
          Experience the convenience of adjusting your lighting with just a tap command!
        </p>
        <div class="flex justify-center gap-8">
          <img src="https://via.placeholder.com/80x80/333333/ffffff?text=" class="rounded-xl" alt="Apple" />
          <img src="https://via.placeholder.com/80x80/333333/ffffff?text=▶" class="rounded-xl" alt="Play" />
        </div>

        <div class="grid md:grid-cols-3 gap-12 mt-20">
          <img src="https://via.placeholder.com/400x600/1a1a1a/ffffff?text=iPhone" class="rounded-3xl shadow-2xl mx-auto" />
          <img src="https://via.placeholder.com/600x400/1a1a1a/ffffff?text=MacBook" class="rounded-3xl shadow-2xl mx-auto" />
          <div class="flex flex-col justify-center space-y-12">
            <img src="https://via.placeholder.com/300x600/1a1a1a/ffffff?text=iPad+Color+Wheel" class="rounded-3xl shadow-2xl mx-auto" />
            <img src="https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Watch" class="rounded-3xl shadow-2xl mx-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-24 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div class="glass-card">
          <div class="text-6xl font-bold text-blue-400">499,999</div>
          <p class="text-gray-300">Connected Devices</p>
        </div>
        <div class="glass-card">
          <div class="text-6xl font-bold text-purple-400">99,999</div>
          <p class="text-gray-300">Happy Users</p>
        </div>
        <div class="glass-card">
          <div class="text-6xl font-bold text-teal-400">4999</div>
          <p class="text-gray-300">Decorations</p>
        </div>
      </div>
    </section>

    <!-- Easy Control -->
    <section class="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div class="max-w-6xl mx-auto text-center space-y-12">
        <h2 class="text-4xl md:text-5xl font-bold">Easy Light Control</h2>
        <p class="text-gray-300 text-lg">
          Control your lights with a simple tap! It's super easy and convenient!
        </p>
        <img src="https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Control+Interface" 
             class="rounded-3xl shadow-2xl mx-auto" />
      </div>
    </section>

    <!-- Pricing -->
    <section class="py-24 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="glass-card p-12 text-center space-y-8">
          <h2 class="text-4xl font-bold">Choose the perfect plan for your home decoration</h2>
          <div class="space-y-6 max-w-lg mx-auto">
            <div class="flex justify-between items-center bg-gray-800 rounded-2xl p-4">
              <span>Weekly plan</span>
              <span class="text-2xl font-bold">$1.99 / week</span>
            </div>
            <div class="flex justify-between items-center bg-gray-800 rounded-2xl p-4">
              <span>Yearly plan</span>
              <span class="text-2xl font-bold">$199.99 / year</span>
            </div>
            <div class="flex justify-between items-center bg-gray-700 rounded-2xl p-4">
              <span>Lifetime</span>
              <span class="text-2xl font-bold">$100.99</span>
            </div>
          </div>
          <div class="flex justify-center gap-6 flex-wrap text-sm">
            <span class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-blue-400"></div> Connect all lights</span>
            <span class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-blue-400"></div> Unlock all features</span>
            <span class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-blue-400"></div> Unlimited area</span>
            <span class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-blue-400"></div> Remove ads</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">What Our Customers Say</h2>
        <div class="grid md:grid-cols-3 gap-12">
          <div class="glass-card p-8 space-y-4">
            <img src="https://via.placeholder.com/400x400" class="rounded-2xl w-full" />
            <p class="italic text-gray-300">"Thanks to this app! With just a tap, I can control all my lights..."</p>
            <div class="flex items-center gap-3">
              <img src="https://via.placeholder.com/40x40" class="rounded-full" />
              <div>
                <p class="font-semibold">Sarah Lebert</p>
                <p class="text-yellow-400">★★★★★</p>
              </div>
            </div>
          </div>
          <!-- Repeat for other two testimonials -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.glass-card {
  @apply bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl p-10 text-center shadow-2xl;
}
</style>