'use client';

import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const offices = [
  {
    location: 'Islamabad Office',
    address: '13 Street 3A, Sector D DHA Phase II, Islamabad',
    phone: '+92-XXX-XXXXXXX',
    email: 'islamabad@asca.com',
  },
  {
    location: 'Sialkot Office',
    address: 'Office No. 14 & 15, 2nd Floor, City Mall Plaza, Kutchehry Road, Sialkot',
    phone: '+92-XXX-XXXXXXX',
    email: 'sialkot@asca.com',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/10 via-black to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-4">
            <span className="text-yellow-400 text-sm font-medium">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Visit our offices or send us a message. We're here to help with all your financial needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {offices.map((office, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-yellow-400/50 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-400">{office.location}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{office.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <p className="text-gray-300">{office.phone}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <p className="text-gray-300">{office.email}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gray-900/50 border-gray-800 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">Send Us a Message</CardTitle>
            <CardDescription className="text-center">
              Fill out the form below and we'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <Input
                    placeholder="Your name"
                    className="bg-black border-gray-700 text-white focus:border-yellow-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-black border-gray-700 text-white focus:border-yellow-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Subject</label>
                <Input
                  placeholder="What can we help you with?"
                  className="bg-black border-gray-700 text-white focus:border-yellow-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <Textarea
                  placeholder="Tell us more about your needs..."
                  rows={5}
                  className="bg-black border-gray-700 text-white focus:border-yellow-400"
                />
              </div>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 hover:scale-105">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-16 text-center">
          <Card className="bg-yellow-400/10 border-yellow-400/20 inline-block">
            <CardContent className="flex items-center space-x-4 p-6">
              <Clock className="w-8 h-8 text-yellow-400" />
              <div className="text-left">
                <p className="text-white font-semibold">Office Hours</p>
                <p className="text-gray-300 text-sm">Monday to Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-300 text-sm">Sunday: By Appointment</p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8">
            <a
              href="https://wa.me/92XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
