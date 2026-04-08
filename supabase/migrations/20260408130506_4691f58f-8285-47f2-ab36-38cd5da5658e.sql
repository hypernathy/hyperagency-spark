
-- Add new profile fields
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS contact_preference text DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS whatsapp_number text DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS telegram_handle text DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS instagram_handle text DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS linkedin_handle text DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS timezone text DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS building_description text DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS avatar_emoji text DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS avatar_url text DEFAULT NULL;

-- Create milestones table
CREATE TABLE public.milestones (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  milestone_key text NOT NULL,
  completed boolean DEFAULT false,
  completed_at timestamp with time zone DEFAULT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(user_id, milestone_key)
);

ALTER TABLE public.milestones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own milestones" ON public.milestones FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own milestones" ON public.milestones FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own milestones" ON public.milestones FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all milestones" ON public.milestones FOR SELECT USING (has_role(auth.uid(), 'admin'::app_role));

-- Create courses waitlist table
CREATE TABLE public.courses_waitlist (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  user_id uuid DEFAULT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.courses_waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can insert waitlist" ON public.courses_waitlist FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Admins can view all waitlist" ON public.courses_waitlist FOR SELECT USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Users can view own waitlist entry" ON public.courses_waitlist FOR SELECT USING (auth.uid() = user_id);
