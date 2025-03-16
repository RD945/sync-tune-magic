
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';
import { ArrowRight, Music, RefreshCw, Sparkles, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Index: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { toast } = useToast();

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    toast({
      title: "Authentication successful",
      description: "Welcome to SyncTunes!",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-spotify/10 blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-youtube/10 blur-3xl" />
          </div>
          
          <div className="container relative z-10 px-6 mx-auto max-w-7xl">
            <div className="max-w-4xl mx-auto text-center animate-stagger">
              <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-gray-300 bg-gray-800 rounded-full">
                <Sparkles size={14} className="mr-2" />
                Welcome to the future of music syncing
              </div>
              
              <h1 className="mb-6 font-semibold tracking-tight text-white">
                Seamlessly Transfer Your <span className="text-spotify">Spotify</span> & <span className="text-youtube">YouTube</span> Playlists
              </h1>
              
              <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-300">
                SyncTunes helps you move your favorite playlists between music platforms in seconds, keeping your music collection synced everywhere you listen.
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button 
                  onClick={() => setShowAuthModal(true)}
                  className="bg-gradient-to-r from-spotify to-primary hover:opacity-90 gap-2 px-8 py-7 text-base"
                >
                  Get Started
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto mb-16 text-center animate-stagger">
              <h2 className="mb-4 font-semibold text-white">Simple, Fast Playlist Transfers</h2>
              <p className="text-gray-300">
                SyncTunes makes it easy to move your music between platforms without the hassle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 animate-stagger">
              <div className="p-6 transition-all duration-300 glass-card hover:shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-spotify/20 rounded-xl">
                  <Music className="text-spotify" />
                </div>
                <h3 className="mb-3 text-lg font-medium">Keep Your Music In Sync</h3>
                <p className="text-gray-300">
                  Transfer playlists you've spent years curating between Spotify and YouTube Music.
                </p>
              </div>
              
              <div className="p-6 transition-all duration-300 glass-card hover:shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-youtube/20 rounded-xl">
                  <RefreshCw className="text-youtube" />
                </div>
                <h3 className="mb-3 text-lg font-medium">Bidirectional Transfers</h3>
                <p className="text-gray-300">
                  Move playlists from Spotify to YouTube Music or from YouTube Music to Spotify.
                </p>
              </div>
              
              <div className="p-6 transition-all duration-300 glass-card hover:shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-primary/20 rounded-xl">
                  <Sparkles className="text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-medium">Smart Matching</h3>
                <p className="text-gray-300">
                  Our advanced algorithm finds the best matches for each song, even if titles differ slightly.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto mb-16 text-center animate-stagger">
              <h2 className="mb-4 font-semibold text-white">How It Works</h2>
              <p className="text-gray-300">
                Transfer your playlists in three simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 animate-stagger">
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mb-6 font-bold text-white bg-spotify rounded-full">
                  1
                </div>
                <h3 className="mb-3 text-lg font-medium text-white">Sign In</h3>
                <p className="mb-4 text-gray-300">
                  Connect your accounts securely with just a few clicks.
                </p>
                
                {/* Connector line (desktop only) */}
                <div className="absolute hidden md:block top-6 left-12 w-full h-0.5 bg-gray-700" />
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mb-6 font-bold text-white bg-primary rounded-full">
                  2
                </div>
                <h3 className="mb-3 text-lg font-medium text-white">Select Playlists</h3>
                <p className="mb-4 text-gray-300">
                  Choose which playlists you want to transfer and where to.
                </p>
                
                {/* Connector line (desktop only) */}
                <div className="absolute hidden md:block top-6 left-12 w-full h-0.5 bg-gray-700" />
              </div>
              
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-6 font-bold text-white bg-youtube rounded-full">
                  3
                </div>
                <h3 className="mb-3 text-lg font-medium text-white">Enjoy Anywhere</h3>
                <p className="mb-4 text-gray-300">
                  Your playlists are now available on both platforms. It's that simple!
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-gray-900/50">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto mb-16 text-center animate-stagger">
              <h2 className="mb-4 font-semibold text-white">What Our Users Say</h2>
              <p className="text-gray-300">
                Join thousands of happy music lovers who use SyncTunes
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 animate-stagger">
              <div className="p-6 glass-card">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 overflow-hidden rounded-full">
                    <img src="https://randomuser.me/api/portraits/women/42.jpg" alt="User" className="object-cover w-full h-full" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-white">Emma Watson</h4>
                    <p className="text-sm text-gray-400">Spotify User</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "SyncTunes saved me hours of work. I was able to move my 10-year Spotify collection to YouTube Music in minutes!"
                </p>
              </div>
              
              <div className="p-6 glass-card">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 overflow-hidden rounded-full">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="object-cover w-full h-full" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-white">Alex Chen</h4>
                    <p className="text-sm text-gray-400">YouTube Music User</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "I switch between services often, and SyncTunes makes it so easy to keep my playlists in sync. Absolutely love it!"
                </p>
              </div>
              
              <div className="p-6 glass-card md:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 overflow-hidden rounded-full">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="object-cover w-full h-full" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-white">Sophia Martinez</h4>
                    <p className="text-sm text-gray-400">Music Enthusiast</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "The interface is beautiful and the transfers are incredibly accurate. I haven't lost a single track in the process."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="overflow-hidden glass-card">
              <div className="relative p-8 md:p-12 lg:p-16">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                  <Music size={300} className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 text-primary" />
                </div>
                
                <div className="relative z-10 max-w-2xl animate-stagger">
                  <h2 className="mb-4 font-semibold text-white">Ready to sync your music?</h2>
                  <p className="mb-8 text-xl text-gray-300">
                    Join SyncTunes today and never lose your carefully curated playlists again.
                  </p>
                  
                  <ul className="mb-8 space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <Check size={20} className="mr-3 text-spotify" />
                      <span>Quick setup, no technical knowledge required</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={20} className="mr-3 text-spotify" />
                      <span>Transfer unlimited playlists between platforms</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={20} className="mr-3 text-spotify" />
                      <span>Keep your music library in sync, always</span>
                    </li>
                  </ul>
                  
                  <Button 
                    onClick={() => setShowAuthModal(true)}
                    className="bg-gradient-to-r from-youtube to-primary hover:opacity-90 gap-2 px-8 py-7 text-base"
                  >
                    Get Started Now
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default Index;
