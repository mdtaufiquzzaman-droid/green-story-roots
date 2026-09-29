CREATE TABLE public.furniture_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  furniture_slug text NOT NULL,
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  wood text,
  finish text,
  size text,
  notes text CHECK (notes IS NULL OR char_length(notes) <= 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.furniture_requests TO anon, authenticated;
GRANT ALL ON public.furniture_requests TO service_role;
ALTER TABLE public.furniture_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a custom request" ON public.furniture_requests FOR INSERT TO anon, authenticated WITH CHECK (true);