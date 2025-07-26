import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Heart, 
  Stethoscope, 
  Calendar, 
  Pill, 
  BarChart3, 
  Video, 
  AlertTriangle, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  DollarSign,
  HandHeart
} from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Stethoscope,
      title: t('symptoms'),
      description: 'AI-powered symptom analysis and health recommendations',
      path: '/symptoms',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: t('appointments'),
      description: 'Book appointments with qualified healthcare professionals',
      path: '/appointments',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Pill,
      title: t('reminders'),
      description: 'Smart medication reminders and tracking',
      path: '/reminders',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: BarChart3,
      title: t('dashboard'),
      description: 'Comprehensive health metrics and insights',
      path: '/dashboard',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Video,
      title: t('teleconsultation'),
      description: 'Video consultations with doctors from home',
      path: '/teleconsultation',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: AlertTriangle,
      title: t('alerts'),
      description: 'Personalized health risk alerts and notifications',
      path: '/alerts',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: t('trends'),
      description: 'Community health trends and environmental data',
      path: '/trends',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-healing py-20 text-white">
        <div className="container text-center space-y-6 sm:space-y-8 px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full mb-6 sm:mb-8">
            <Heart className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t('welcomeTitle')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto px-4">
            {t('welcomeSubtitle')}
          </p>
          <p className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto px-4">
            {t('welcomeDescription')}
          </p>
          <Button size="lg" variant="secondary" className="mt-8">
            {t('getStarted')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container space-y-12">
          <div className="text-center space-y-4 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Complete Healthcare Solution</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your health in one comprehensive platform
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} to={feature.path} className="block">
                  <Card className="medical-card hover:shadow-medical transition-all duration-300 h-full group">
                    <CardHeader className="pb-3">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-3`}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors text-base sm:text-lg">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
                      <div className="flex items-center mt-3 sm:mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-medium">Explore</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <HandHeart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Support Healthcare for Everyone</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Help us provide accessible healthcare solutions to underserved communities around the world
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
              <Card className="medical-card hover:shadow-medical transition-all duration-300 group">
                <CardHeader className="text-center">
                  <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">$25</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">Provides basic health screening for 5 people</p>
                  <Button className="w-full group-hover:shadow-lg transition-all">
                    Donate $25
                  </Button>
                </CardContent>
              </Card>

              <Card className="medical-card hover:shadow-medical transition-all duration-300 group border-primary/20">
                <CardHeader className="text-center">
                  <div className="relative">
                    <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">Popular</span>
                  </div>
                  <CardTitle className="text-lg">$100</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">Funds complete healthcare package for 10 families</p>
                  <Button className="w-full group-hover:shadow-lg transition-all">
                    Donate $100
                  </Button>
                </CardContent>
              </Card>

              <Card className="medical-card hover:shadow-medical transition-all duration-300 group">
                <CardHeader className="text-center">
                  <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">$500</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">Sponsors medical equipment for remote clinics</p>
                  <Button className="w-full group-hover:shadow-lg transition-all">
                    Donate $500
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-background/80 backdrop-blur rounded-lg border p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold">Custom Donation</h3>
                  <p className="text-muted-foreground">Choose your own amount to make a difference</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <span className="text-lg font-medium mr-2">$</span>
                    <input 
                      type="number" 
                      placeholder="100" 
                      className="w-24 px-3 py-2 border rounded-md text-center"
                      min="1"
                    />
                  </div>
                  <Button variant="outline" className="whitespace-nowrap">
                    Donate Now
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                🛡️ Secure donations powered by Stripe • 💝 100% goes to healthcare initiatives
              </p>
              <p className="text-xs text-muted-foreground">
                Your donation is tax-deductible and you'll receive a receipt via email
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/20">
        <div className="container px-4">
          <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-4 text-center">
            {[
              { icon: Users, label: 'Active Users', value: '50K+' },
              { icon: Heart, label: 'Health Assessments', value: '200K+' },
              { icon: CheckCircle, label: 'Appointments Booked', value: '75K+' },
              { icon: Shield, label: 'Accuracy Rate', value: '95%' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;