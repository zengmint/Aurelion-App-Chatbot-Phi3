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
```



Servidor de inferencia (necesario para funcionar)
Esta app se comunica con un servidor Python local que utiliza la librería llama-cpp-python para hacer inferencia sobre un modelo descargado en formato .gguf.

Pasos para levantar el backend...

Instalá los requisitos en un entorno virtual (necesitas vs build tools para compilar):
```bash
pip install llama-cpp-python flask
```
Asegurate de tener el modelo .gguf descargado localmente (por ejemplo: phi-3-mini-4k-instruct.Q4_K_M.gguf).

Ejecutá el servidor:
```bash
python server.py
```
Este script levanta un endpoint local en:
http://localhost:8080/api/generate



<img width="342" height="384" alt="Aurelion-APP" src="https://github.com/user-attachments/assets/b2252701-2f1c-4fe3-9047-a08b29a80ab1" />
