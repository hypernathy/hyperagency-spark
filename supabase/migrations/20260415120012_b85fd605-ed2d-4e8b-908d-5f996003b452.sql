
-- Table to store quiz submissions (results + emails)
CREATE TABLE public.quiz_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  quiz_type TEXT NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  result_key TEXT NOT NULL,
  result_label TEXT,
  scores JSONB,
  intake JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.quiz_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (quiz is public, no login required)
CREATE POLICY "Anyone can submit quiz results"
  ON public.quiz_submissions
  FOR INSERT
  WITH CHECK (true);

-- No public SELECT - only accessible via admin/dashboard
CREATE POLICY "No public read access"
  ON public.quiz_submissions
  FOR SELECT
  USING (false);
