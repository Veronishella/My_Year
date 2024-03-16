import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uznrsrtqyelspaqkqziu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6bnJzcnRxeWVsc3BhcWtxeml1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0MTEwOTMsImV4cCI6MjAyNDk4NzA5M30.Yo5p-JWUFq8qfh0wrwov8rdgHptJDSBikOZBQVSd94k"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;