# 🌌 AURELION App – Chatbot con Phi-3

**AURELION-App-Chatbot-Phi3** es una interfaz de escritorio construida con `Electron.js`, diseñada para comunicarse con un servidor de inferencia local o remoto que utilice modelos LLM en formato `gguf`.  
En este caso, la app está optimizada para el modelo `Phi-3-mini` de Microsoft, pero puede adaptarse fácilmente a otros modelos compatibles con `llama.cpp`.

---

## 🧠 Características principales

- UI amigable y funcional, sin distracciones.
- Comunicación con backend vía HTTP para enviar prompts y recibir respuestas.
- Registro local de conversaciones (JSON / TXT).
- Preparado para integrarse con MongoDB y documentar interacciones.
- Modular y fácilmente ampliable.
- Inspirado en una arquitectura multiversal de asistencia simbiótica (AURELION Φ).

---

## ⚙️ Requisitos

### Cliente (esta app)
- Node.js >= 18.x
- Electron (instalación por `npm`)
- Sistema operativo: Windows 10+, macOS o Linux

```bash
npm install
npm start
