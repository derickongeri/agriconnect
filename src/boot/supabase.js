import { createClient } from "@supabase/supabase-js";
//import userAuthUser from "src/composables/userAuthUser";

//const supabaseUrl = "https://zziuvvorxkugtbmruglb.supabase.co";
const supabaseUrl = "http://139.84.235.200:8000";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzEyMDA1MjAwLAogICJleHAiOiAxODY5NzcxNjAwCn0.ZtRT5SLA4u-pGpTsrviJfVYrXOxFn_uIyruBpNZtg0k";

const supabase = createClient(supabaseUrl, supabaseKey);

console.log('init supabase:', supabase)

// supabase.auth.onAuthStateChange((event, session) => {
//   const { user } = userAuthUser();

//   user.value = session?.user;
// });

export default function useSupabase() {
  return { supabase };
}
