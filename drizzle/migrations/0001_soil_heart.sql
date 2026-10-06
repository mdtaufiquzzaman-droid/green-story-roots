CREATE TABLE public.idea_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  what text NOT NULL CHECK (char_length(what) BETWEEN 1 AND 500),
  purpose text CHECK (purpose IS NULL OR char_length(purpose) <= 500),
  inspiration text CHECK (inspiration IS NULL OR char_length(inspiration) <= 300),
  material text CHECK (material IS NULL OR char_length(material) <= 100),
  size text CHECK (size IS NULL OR char_length(size) <= 100),
  image_path text,
  notes text CHECK (notes IS NULL OR char_length(notes) <= 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.idea_submissions TO anon, authenticated;
GRANT ALL ON public.idea_submissions TO service_role;
ALTER TABLE public.idea_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an idea" ON public.idea_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.feedback_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  would_create text NOT NULL CHECK (would_create IN ('Desk','Bed','Table','Shelf','Other')),
  would_pay text NOT NULL CHECK (would_pay IN ('Yes','Maybe','No')),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.feedback_responses TO anon, authenticated;
GRANT ALL ON public.feedback_responses TO service_role;
ALTER TABLE public.feedback_responses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can answer feedback" ON public.feedback_responses FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can upload idea images" ON storage.objects FOR INSERT TO anon, authenticated WITH CHECK (bucket_id = 'idea-images');