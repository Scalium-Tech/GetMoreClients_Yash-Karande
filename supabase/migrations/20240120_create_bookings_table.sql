-- Create a table for Cal.com Bookings
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    
    -- Basic Info
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    
    -- Custom Strategy Call Questions
    website_url TEXT,
    company_size TEXT,
    service_interested TEXT,
    business_nature TEXT,
    marketing_challenge TEXT,
    growth_goal TEXT,
    
    -- Cal.com Metadata
    booking_time TIMESTAMPTZ,
    cal_booking_id BIGINT,
    event_type_id INT,
    status TEXT DEFAULT 'scheduled'
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (important for the website to send data)
DROP POLICY IF EXISTS "Enable insert for service role only" ON public.bookings;
CREATE POLICY "Allow public insert" ON public.bookings
    FOR INSERT WITH CHECK (true);

-- Create policy for the admin to view
CREATE POLICY "Enable select for authenticated users" ON public.bookings
    FOR SELECT USING (auth.role() = 'authenticated');
