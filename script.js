const supabaseUrl = "https://shfrpnybnlvgckvhhdif.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoZnJwbnlibmx2Z2NrdmhoZGlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5NDYxMTEsImV4cCI6MjA3NjUyMjExMX0.0hZPFvLFdJw3fNhlbudc0tcCajGfVVXBU0RxDW34NA8";
const supabase = supabaseJs.createClient(supabaseUrl, supabaseKey);

const chat = document.getElementById("chat");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("send");

// メッセージ取得
async function fetchMessages() {
  const { data } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: true });
  
  chat.innerHTML = "";
  data.forEach(m => {
    const p = document.createElement("p");
    p.textContent = `${m.user_id.slice(0,6)}: ${m.content}`;
    chat.appendChild(p);
  });
}

// メッセージ送信
sendBtn.addEventListener("click", async () => {
  const msg = messageInput.value;
  if (!msg) return;
  await supabase.from("messages").insert([{ content: msg, user_id: "guest" }]);
  messageInput.value = "";
  fetchMessages();
});

fetchMessages();

