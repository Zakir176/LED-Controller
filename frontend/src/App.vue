<template>
  <div class="min-h-screen bg-black text-white overflow-x-hidden">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">Diamond</div>
        <span class="text-xl font-bold">LightControl</span>
      </div>
      <div class="hidden md:flex gap-12 text-gray-400">
        <a href="#home" class="hover:text-white transition">Home</a>
        <a href="#features" class="hover:text-white transition">Features</a>
        <a href="#pricing" class="hover:text-white transition">Pricing</a>
        <a href="#support" class="hover:text-white transition">Support</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div class="space-y-10">
          <span class="inline-block px-6 py-3 bg-gray-800/60 backdrop-blur-md rounded-full text-sm uppercase tracking-widest border border-gray-700">
            LED Light Controller
          </span>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Discovery<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Smart Light
            </span><br />
            Technology
          </h1>
          <p class="text-gray-300 text-lg max-w-lg">
            Experience the convenience of adjusting your lighting with just a tap command!
          </p>
          <button class="px-12 py-6 bg-white text-black rounded-full text-xl font-semibold hover:scale-105 transition-shadow shadow-2xl">
            Explore
          </button>
        </div>

        <!-- Hero Images -->
        <div class="relative">
          <img 
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" 
            alt="iPhone App"
            class="rounded-3xl shadow-2xl w-full max-w-md transform -rotate-12"
          />
          <img 
            src="https://images.unsplash.com/photo-1593359737037-3f0f4f69c9c0?w=600&q=80" 
            alt="Smart Bulb"
            class="absolute -right-20 top-20 rounded-2xl shadow-2xl w-64 transform rotate-12"
          />
        </div>
      </div>
    </section>

    <!-- Multiple Platforms -->
    <section id="features" class="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div class="max-w-6xl mx-auto text-center space-y-16">
        <div>
          <h2 class="text-5xl md:text-6xl font-bold mb-6">Multiple Platforms</h2>
          <p class="text-gray-300 text-xl">
            Experience the convenience of adjusting your lighting with just a tap command!
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          <img src="https://images.unsplash.com/photo-1512941675423-6b0f2e6908e0?w=800&q=80" alt="iPhone" class="rounded-3xl shadow-2xl mx-auto" />
          <img src="https://images.unsplash.com/photo-1541807083403-7914b9fde0dc?w=1000&q=80" alt="MacBook" class="rounded-3xl shadow-2xl mx-auto" />
          <div class="space-y-16">
            <img src="https://images.unsplash.com/photo-1588075592446-4d0c6e6f9c6c?w=800&q=80" alt="iPad Color Wheel" class="rounded-3xl shadow-2xl mx-auto" />
            <img src="https://images.unsplash.com/photo-1546868871-7041f2b81fdc?w=600&q=80" alt="Apple Watch" class="rounded-3xl shadow-2xl mx-auto w-48" />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-32 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div class="glass-card">
          <div class="text-6xl font-bold text-blue-400">499,999</div>
          <p class="text-gray-300 text-xl mt-4">Connected Devices</p>
        </div>
        <div class="glass-card">
          <div class="text-6xl font-bold text-purple-400">99,999</div>
          <p class="text-gray-300 text-xl mt-4">Happy Users</p>
        </div>
        <div class="glass-card">
          <div class="text-6xl font-bold text-teal-400">4999</div>
          <p class="text-gray-300 text-xl mt-4">Decorations</p>
        </div>
      </div>
    </section>

    <!-- Easy Light Control -->
    <section class="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div class="max-w-6xl mx-auto text-center space-y-16">
        <h2 class="text-5xl md:text-6xl font-bold">Easy Light Control</h2>
        <p class="text-gray-300 text-xl max-w-3xl mx-auto">
          Control your lights with a simple tap! It's super easy and convenient!
        </p>
        <img src="https://images.unsplash.com/photo-1558002038-42a3c8c4a99a?w=1400&q=80" alt="Control Interface" class="rounded-3xl shadow-2xl mx-auto max-w-5xl" />
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="py-32 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="glass-card-large p-16 text-center space-y-12">
          <h2 class="text-4xl md:text-5xl font-bold">Choose the perfect plan for your home decoration</h2>
          <div class="space-y-8 max-w-md mx-auto">
            <div class="pricing-item">Weekly plan <span>$1.99 / week</span></div>
            <div class="pricing-item">Yearly plan <span>$199.99 / year</span></div>
            <div class="pricing-item highlighted">Lifetime <span>$100.99</span></div>
          </div>
          <div class="flex justify-center flex-wrap gap-8 text-sm text-gray-300">
            <span class="flex items-center gap-3">Dot Connect all lights</span>
            <span class="flex items-center gap-3">Dot Unlock all features</span>
            <span class="flex items-center gap-3">Dot Unlimited area</span>
            <span class="flex items-center gap-3">Dot Remove ads</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-5xl md:text-6xl font-bold mb-20">What Our Customers Say</h2>
        <div class="grid md:grid-cols-3 gap-12">
          <div class="glass-card p-10 space-y-6">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Bedroom" class="rounded-2xl w-full" />
            <p class="italic text-gray-300">"Thanks to this app! With just a tap I can control all my lights..."</p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gray-600 rounded-full"></div>
              <div class="text-left">
                <p class="font-semibold">Sarah Lebert</p>
                <p class="text-yellow-400">5 stars</p>
              </div>
            </div>
          </div>

          <div class="glass-card p-10 space-y-6">
            <img src="https://images.unsplash.com/photo-1618773912064-20c1d3526c98?w=800&q=80" alt="Living room" class="rounded-2xl w-full" />
            <p class="italic text-gray-300">"I love this app! It simplifies so many tasks..."</p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gray-600 rounded-full"></div>
              <div class="text-left">
                <p class="font-semibold">Emily Carter</p>
                <p class="text-yellow-400">5 stars</p>
              </div>
            </div>
          </div>

          <div class="glass-card p-10 space-y-6">
            <img src="https://images.unsplash.com/photo-1618220048045-10a6dbdfc8d2?w=800&q=80" alt="Modern room" class="rounded-2xl w-full" />
            <p class="italic text-gray-300">"This app is awesome! No more walking into a dark house..."</p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gray-600 rounded-full"></div>
              <div class="text-left">
                <p class="font-semibold">Michael Thompson</p>
                <p class="text-yellow-400">5 stars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Everything is good now!
</script>

<style scoped>
.glass-card {
  @apply bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 text-center shadow-2xl;
}
.glass-card-large {
  @apply bg-white/5 backdrop-blur-3xl border border-white/20 rounded-3xl;
}
.pricing-item {
  @apply flex justify-between items-center bg-white/5 backdrop-blur-md rounded-2xl px-8 py-6 text-xl border border-white/10;
}
.pricing-item.highlighted {
  @apply bg-white/10 border-white/30 transform scale-105 shadow-xl;
}
.pricing-item span {
  @apply text-3xl font-bold;
}
.dot {
  @apply w-3 h-3 rounded-full bg-blue-400;
}
</style>