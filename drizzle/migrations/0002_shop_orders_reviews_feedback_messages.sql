CREATE TABLE public.orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text NOT NULL UNIQUE,
  name text NOT NULL, email text NOT NULL, phone text NOT NULL,
  address text NOT NULL, postcode text NOT NULL, city text NOT NULL,
  delivery_date date NOT NULL, note text,
  items jsonb NOT NULL,
  subtotal numeric(10,2) NOT NULL, delivery numeric(10,2) NOT NULL, total numeric(10,2) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.orders TO anon, authenticated;
GRANT ALL ON public.orders TO service_role;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can place an order" ON public.orders FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  plant_slug text NOT NULL,
  rating smallint NOT NULL CHECK (rating BETWEEN 1 AND 5),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  comment text NOT NULL CHECK (char_length(comment) BETWEEN 1 AND 1000),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX reviews_plant_slug_idx ON public.reviews (plant_slug, created_at DESC);
GRANT SELECT, INSERT ON public.reviews TO anon, authenticated;
GRANT ALL ON public.reviews TO service_role;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read reviews" ON public.reviews FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Anyone can add a review" ON public.reviews FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ease_rating smallint NOT NULL CHECK (ease_rating BETWEEN 1 AND 5),
  care_info text NOT NULL, would_buy text NOT NULL, improve text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.feedback TO anon, authenticated;
GRANT ALL ON public.feedback TO service_role;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can send feedback" ON public.feedback FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL, email text NOT NULL, subject text, message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.messages TO anon, authenticated;
GRANT ALL ON public.messages TO service_role;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can send a message" ON public.messages FOR INSERT TO anon, authenticated WITH CHECK (true);