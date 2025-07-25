const input = document.getElementById("input");
const enviarBtn = document.getElementById("enviar");
const chat = document.getElementById("chat");
const estadoSelect = document.getElementById("estado");

let contexto = []; // Ventana de contexto conversacional

function agregarMensaje(texto, clase = "guido") {
  const div = document.createElement("div");
  div.classList.add("mensaje", clase);
  div.textContent = texto;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

const estadoGeneracion = document.getElementById("estado-generacion");

function enviarMensaje() {
  const mensaje = input.value.trim();
  if (!mensaje) return;

  agregarMensaje(mensaje, "guido");
  contexto.push({ role: "user", content: mensaje });
  if (contexto.length > 4) contexto = contexto.slice(-4); // mantener últimas 4 entradas

  input.value = "";
  input.disabled = true;
  enviarBtn.disabled = true;

  // 🟡 Mostrar cartel "Respondiendo..."
  const estadoGeneracion = document.getElementById("estado-generacion");
  estadoGeneracion.textContent = "Respondiendo...";

  const payload = {
    model: "Phi3",
    messages: [...contexto],
    temperature: 0.7,
    max_tokens: 512
  };

  fetch("http://127.0.0.1:8080/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(data => {
      const respuesta = data.choices?.[0]?.message?.content || "[Sin respuesta]";
      agregarMensaje(respuesta, "aurelion");
      contexto.push({ role: "assistant", content: respuesta });
      if (contexto.length > 4) contexto = contexto.slice(-4);
    })
    .catch(err => {
      agregarMensaje("[Error al conectar con AURELION-Φ]", "sistema");
      console.error(err);
    })
    .finally(() => {
      input.disabled = false;
      enviarBtn.disabled = false;
      estadoGeneracion.textContent = ""; // 🔵 Ocultar cartel
      input.focus();
    });
}

enviarBtn.addEventListener("click", enviarMensaje);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") enviarMensaje();
});







