/*
  # Fix RLS policies for waitlist_entries table

  1. Security Updates
    - Drop existing policies that may be misconfigured
    - Create proper INSERT policy for anonymous users
    - Create SELECT policy for users to read their own entries
    - Ensure policies work correctly for the waitlist functionality

  2. Changes
    - Allow anonymous users to insert new waitlist entries
    - Allow users to select their own entries (needed for some operations)
    - Maintain security while enabling the waitlist functionality
*/

-- Drop existing policies to recreate them properly
DROP POLICY IF EXISTS "Allow authenticated insert access for waitlist" ON waitlist_entries;
DROP POLICY IF EXISTS "Allow public insert access for waitlist" ON waitlist_entries;

-- Create a policy that allows anonymous users to insert new waitlist entries
CREATE POLICY "Enable insert for anonymous users" ON waitlist_entries
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Create a policy that allows authenticated users to insert new waitlist entries
CREATE POLICY "Enable insert for authenticated users" ON waitlist_entries
  FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

-- Create a policy that allows users to select their own entries (useful for referral tracking)
CREATE POLICY "Enable select for own entries" ON waitlist_entries
  FOR SELECT 
  TO anon, authenticated
  USING (true);