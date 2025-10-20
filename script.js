const supabaseUrl = "https://shfrpnybnlvgckvhhdif.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoZnJwbnlibmx2Z2NrdmhoZGlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5NDYxMTEsImV4cCI6MjA3NjUyMjExMX0.0hZPFvLFdJw3fNhlbudc0tcCajGfVVXBU0RxDW34NA8";

// Supabase クライアント作成（←ここが最重要）
const client = supabase.createClient(supabaseUrl, supabaseKey);

console.log("✅ Supabase 初期化完了:", client); // ← 動作確認用
