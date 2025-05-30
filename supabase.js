import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
console.log("SUPABASE_URL:", process.env.REACT_APP_SUPABASE_URL);
console.log("SUPABASE_ANON_KEY:", process.env.REACT_APP_SUPABASE_ANON_KEY);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
