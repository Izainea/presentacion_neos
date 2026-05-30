# Estadística · La ciencia de decidir con datos

Presentación interactiva en HTML para **aspirantes al pregrado en Estadística** de la
**Universidad Santo Tomás (USTA)**. Muestra no solo el programa académico, sino la
**necesidad de estudiar esta ciencia hoy** en el mundo de los datos, la IA y la analítica,
e incluye la promoción de los **posgrados** (Maestría en Estadística Aplicada y Maestría
en Ciencia de Datos).

## ✨ Características

- **Reveal.js 5** como motor de diapositivas (sin paso de compilación).
- Tipografía **Roboto / Roboto Slab / Roboto Mono** (Google Fonts).
- **Diagramas tipo SmartArt** construidos con CSS + JavaScript:
  - Procesos en *chevrons*, ciclo radial generado por JS, pirámide, hexágonos, tarjetas.
- **Gráficas en vivo con Chart.js** (crecimiento de datos y demanda laboral).
- **Contadores animados** y diseño responsive (móvil y escritorio).
- Paleta institucional USTA (azul + dorado).

## 📑 Contenido (16 diapositivas)

1. Portada
2. El mundo habla en datos (cifras)
3. ¿Qué hace un estadístico? (proceso)
4. Por qué estudiar estadística hoy (ciclo)
5. Campos de impacto (hexágonos)
6. Una profesión en expansión (gráficas)
7. El programa USTA (ficha)
8. Énfasis del programa
9. Plan de estudios (ruta por áreas)
10. Perfil del aspirante (pirámide)
11. Perfil del egresado (proceso)
12. Campo ocupacional (tarjetas)
13. ¿Por qué la Santo Tomás?
14. Ruta académica completa
15. **Posgrados**: Maestría en Estadística Aplicada y Maestría en Ciencia de Datos
16. Cierre / llamado a la acción

## 🚀 Cómo verla localmente

Al usar CDNs, basta con abrir `index.html` en el navegador. Para evitar restricciones de
algunos navegadores, puedes servirla con un servidor local:

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

### Controles
- `→` / `Espacio`: siguiente · `←`: anterior
- `Esc`: vista general (mapa de diapositivas) · `F`: pantalla completa
- `S`: notas del ponente

## 🌐 Publicar en GitHub Pages

1. Sube esta rama y haz *merge* a `main` (o publica desde la rama que prefieras).
2. En GitHub: **Settings → Pages**.
3. En *Source* elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
4. Guarda. En 1–2 minutos estará disponible en:
   `https://<usuario>.github.io/<repositorio>/`

> El archivo `.nojekyll` ya está incluido para que GitHub Pages sirva los assets sin
> procesarlos con Jekyll.

## 📁 Estructura

```
.
├── index.html            # Presentación (todas las diapositivas)
├── .nojekyll             # Evita el procesamiento Jekyll en Pages
└── assets/
    ├── css/styles.css    # Tema USTA + componentes SmartArt
    └── js/main.js        # Reveal init, diagramas, contadores y Chart.js
```

## 🔗 Enlaces oficiales

- Pregrado en Estadística — https://usantotomas.edu.co/estadistica
- Facultad de Estadística — https://facultadestadistica.usta.edu.co
- Maestría en Estadística Aplicada — https://usantotomas.edu.co/maestria-en-estadistica-aplicada
- Maestría en Ciencia de Datos (virtual) — https://santotovirtual.edu.co/maestria-en-ciencia-de-datos/

---

*Las cifras macro (volumen de datos, demanda laboral) son ilustrativas de tendencias
ampliamente documentadas y sirven como apoyo pedagógico.*
