import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabaseClientComponent = createClientComponentClient({
  supabaseKey: supabaseAnonKey,
  supabaseUrl: supabaseUrl,
})
