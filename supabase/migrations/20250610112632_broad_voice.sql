/*
  # Fix RLS Policy for Waitlist Entries

  1. Security Changes
    - Drop existing INSERT policy that may have incorrect conditions
    - Create new INSERT policy for anonymous users to join waitlist
    - Ensure the policy allows public access for waitlist signup

  This migration fixes the "new row violates row-level security policy" error
  by properly configuring the INSERT policy for anonymous users.
*/

-- Drop the existing policy if it exists
DROP POLICY IF EXISTS "Allow public insert access for waitlist" ON waitlist_entries;

-- Create a new policy that allows anonymous users to insert their email
CREATE POLICY "Allow public insert access for waitlist"
  ON waitlist_entries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Also allow authenticated users to insert (in case they're logged in)
CREATE POLICY "Allow authenticated insert access for waitlist"
  ON waitlist_entries
  FOR INSERT
  TO authenticated
  WITH CHECK (true);