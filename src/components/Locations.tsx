import { useEffect, useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Event {
  id: string;
  title: string;
  location: string;
  event_date: string;
  description: string;
}

export default function Locations() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('is_active', true)
        .gte('event_date', new Date().toISOString())
        .order('event_date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Find Us</h2>
          <div className="flex justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-green-600 rounded"></div>
            <div className="h-1 w-12 bg-green-400 rounded"></div>
            <div className="h-1 w-12 bg-green-600 rounded"></div>
          </div>
          <p className="text-lg text-gray-600">
            We bring premium matcha to you. Check out our upcoming locations
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-green-600 border-t-transparent"></div>
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-md">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">
              New locations coming soon! Follow us on social media for updates.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-green-100 p-4 rounded-xl">
                      <Calendar className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-5 h-5 mr-2 text-green-600" />
                      <span className="text-lg">{event.location}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{formatDate(event.event_date)}</p>
                    {event.description && (
                      <p className="text-gray-700 leading-relaxed">{event.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
