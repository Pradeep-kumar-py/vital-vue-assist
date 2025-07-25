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
  Shield
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
        <div className="container text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
            <Heart className="h-10 w-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">
            {t('welcomeTitle')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            {t('welcomeSubtitle')}
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
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
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Complete Healthcare Solution</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your health in one comprehensive platform
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} to={feature.path}>
                  <Card className="medical-card hover:shadow-medical transition-all duration-300 h-full group">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                      <div className="flex items-center mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
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

      {/* Stats Section */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4 text-center">
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