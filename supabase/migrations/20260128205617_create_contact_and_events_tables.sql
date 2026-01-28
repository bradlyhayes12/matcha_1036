/*
  # Create Matcha Pop-up Website Database Schema

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `name` (text) - Contact's full name
      - `email` (text) - Contact's email address
      - `message` (text) - Message from the contact
      - `created_at` (timestamptz) - Timestamp of when the contact was submitted
      
    - `events`
      - `id` (uuid, primary key) - Unique identifier for each event
      - `title` (text) - Event title/name
      - `location` (text) - Event location
      - `event_date` (timestamptz) - Date and time of the event
      - `description` (text) - Event description (optional)
      - `is_active` (boolean) - Whether the event should be displayed
      - `created_at` (timestamptz) - Timestamp of when the event was created

  2. Security
    - Enable RLS on both tables
    - Public can insert contact submissions
    - Public can view active events
    - Only authenticated users can manage events (for future admin panel)
*/

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  location text NOT NULL,
  event_date timestamptz NOT NULL,
  description text DEFAULT '',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Contacts policies: Anyone can submit a contact form
CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Events policies: Anyone can view active events
CREATE POLICY "Anyone can view active events"
  ON events
  FOR SELECT
  TO anon
  USING (is_active = true);

-- Authenticated users can manage all events
CREATE POLICY "Authenticated users can view all events"
  ON events
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert events"
  ON events
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update events"
  ON events
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete events"
  ON events
  FOR DELETE
  TO authenticated
  USING (true);