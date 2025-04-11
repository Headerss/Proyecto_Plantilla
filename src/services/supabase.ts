// Conexion con supabase aqui va el api key y la url

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = ' ';
const supabaseAnonKey = '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
