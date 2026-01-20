import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Initialize the client only if credentials are available to avoid build-time errors
export const supabase =
    supabaseUrl && supabaseUrl !== 'YOUR_SUPABASE_URL_HERE' && supabaseAnonKey && supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY_HERE'
        ? createClient(supabaseUrl, supabaseAnonKey)
        : null
