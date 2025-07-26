import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  Heart, 
  Stethoscope, 
  Calendar, 
  Pill, 
  BarChart3, 
  Video, 
  AlertTriangle, 
  TrendingUp,
  Globe,
  Menu,
  X,
  MapPin,
  ShoppingCart,
  Shield
} from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ui/theme-toggle';
import { useState } from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { path: '/', icon: Heart, label: t('home') },
    { path: '/symptoms', icon: Stethoscope, label: t('symptoms') },
    { path: '/appointments', icon: Calendar, label: t('appointments') },
    { path: '/reminders', icon: Pill, label: t('reminders') },
    { path: '/dashboard', icon: BarChart3, label: t('dashboard') },
    { path: '/teleconsultation', icon: Video, label: t('teleconsultation') },
    { path: '/alerts', icon: AlertTriangle, label: t('alerts') },
    { path: '/trends', icon: TrendingUp, label: t('trends') },
    { path: '/medicine-hub', icon: ShoppingCart, label: 'Medicine Hub' },
    { path: '/hospital-locator', icon: MapPin, label: 'Hospitals' },
    { path: '/insurance', icon: Shield, label: 'Insurance' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              MediCare AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-foreground/70 hover:text-foreground hover:bg-accent'
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container py-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-md text-sm font-medium transition-colors
                      ${isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-accent'
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="w-full justify-start space-x-2 mt-4"
              >
                <Globe className="h-4 w-4" />
                <span>Language: {language.toUpperCase()}</span>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-primary" />
                <span className="font-semibold">MediCare AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted AI-powered healthcare companion for better health management.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Symptom Analysis</li>
                <li>Appointment Booking</li>
                <li>Health Monitoring</li>
                <li>Teleconsultation</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Emergency</h4>
              <p className="text-sm text-muted-foreground">
                For medical emergencies, call 108 for ambulance services.
              </p>
              <Button 
                variant="destructive" 
                size="sm" 
                className="w-full"
                onClick={() => window.location.href = 'tel:108'}
              >
                Emergency: 108
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 MediCare AI. All rights reserved. Built for healthcare innovation.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;