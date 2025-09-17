import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rivtrmmeknrrjknddddn.supabase.co"; // reemplaza
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpdnRybW1la25ycmprbmRkZGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwODI1NTYsImV4cCI6MjA3MzY1ODU1Nn0.YBztvppaSNJjnbaiEIg6uVGDGSEps0gtMy_6k9M1xME"; // reemplaza

export const supabase = createClient(supabaseUrl, supabaseKey);
