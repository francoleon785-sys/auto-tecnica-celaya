# Paquete de Despliegue Web Completo con Imágenes Locales - Auto Técnica Automotriz

Este paquete contiene la estructura completa con la carpeta `/images/` y el archivo `index.html` actualizado con rutas relativas locales (`images/...`), de modo que al descargar o empaquetar tu carpeta en un `.zip`, **todas las imágenes ya están integradas localmente y no dependen de enlaces externos**.

---

## 📁 Estructura del Proyecto para el ZIP

```text
auto-tecnica-web/
│
├── index.html              # Código web completo con rutas relativas a /images/
├── vercel.json             # Configuración para despliegue en Vercel
├── netlify.toml            # Configuración para despliegue en Netlify
├── robots.txt              # Configuración de rastreo SEO
├── README.md               # Instrucciones paso a paso
│
└── images/                 # CARPETA DE IMÁGENES LOCALES
    ├── hero-engine.jpg     # Fondo principal Hero (vano motor con iluminación mecánica)
    ├── suspension.jpg      # 01 y 09: Amortiguadores y suspensión en banco de prueba
    ├── frenos.jpg          # 02: Disco de freno ventilado y cáliper rojo
    ├── ecu-modulo.jpg      # 03 y 04: Placa de computadora automotriz y osciloscopio
    ├── motor-ajustes.jpg   # 05: Bloque motor, válvulas y afinaciones
    ├── transmision.jpg     # 07: Engranajes helicoidales de caja de cambios
    ├── taller-bahia.jpg    # 08 y 11: Taller automotriz con elevador y herramientas
    └── scanner-diag.jpg    # 10 y Sección Confianza: Diagnóstico con escáner e ingeniero
```

---

## 📥 URLs directas para guardar las imágenes en tu carpeta `images/`

Crea una subcarpeta llamada `images` dentro de `auto-tecnica-web` y guarda los siguientes archivos con estos nombres exactos (puedes abrirlos en tu navegador y hacer clic derecho > "Guardar imagen como..."):

1. **`images/hero-engine.jpg`**
   - URL: `https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1920&q=80`
2. **`images/suspension.jpg`**
   - URL: `https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80`
3. **`images/frenos.jpg`**
   - URL: `https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80`
4. **`images/ecu-modulo.jpg`**
   - URL: `https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80`
5. **`images/motor-ajustes.jpg`**
   - URL: `https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80`
6. **`images/transmision.jpg`**
   - URL: `https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80`
7. **`images/taller-bahia.jpg`**
   - URL: `https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=800&q=80`
8. **`images/scanner-diag.jpg`**
   - URL: `https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80`

---

## 📄 Archivo 1: `index.html` (Con rutas locales `images/...`)

Guarda este código como `index.html` en la raíz de `auto-tecnica-web`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Auto Técnica Automotriz | Taller Mecánico en Celaya, Gto.</title>
  <meta name="description" content="Taller mecánico automotriz en Celaya, Guanajuato. Diagnóstico por computadora, ajuste de motor, frenos, transmisiones y módulos con respaldo de ingeniero mecánico.">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: #0c0c0e;
      color: #f3f4f6;
      overflow-x: hidden;
    }
    .accent-red { color: #ef4444; }
    .bg-accent-red { background-color: #ef4444; }
    .hover-bg-accent-red:hover { background-color: #dc2626; }
    .border-graphite { border-color: rgba(255, 255, 255, 0.08); }
    .card-dark {
      background: #141418;
      border: 1px solid rgba(255, 255, 255, 0.07);
    }
    .service-card {
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background-size: cover;
      background-position: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .service-card:hover {
      transform: translateY(-3px);
      border-color: rgba(239, 68, 68, 0.4);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
    }
    .service-overlay {
      background: linear-gradient(135deg, rgba(12, 12, 14, 0.94) 0%, rgba(12, 12, 14, 0.85) 60%, rgba(20, 20, 24, 0.65) 100%);
    }
    @keyframes pulse-subtle {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.15); }
    }
    .pulse-dot {
      animation: pulse-subtle 2s infinite ease-in-out;
    }
  </style>
</head>
<body class="selection:bg-red-500 selection:text-white">

  <!-- Header / Navbar -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-[#0c0c0e]/90 backdrop-blur-md border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <a href="#" class="flex flex-col">
        <span class="text-xl font-extrabold tracking-tight text-white uppercase">Auto Técnica</span>
        <span class="text-[11px] font-semibold tracking-widest text-neutral-400 uppercase -mt-1">Automotriz &bull; Celaya</span>
      </a>

      <nav class="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-300">
        <a href="#servicios" class="hover:text-red-400 transition-colors">Servicios</a>
        <a href="#metodo" class="hover:text-red-400 transition-colors">Método</a>
        <a href="#nosotros" class="hover:text-red-400 transition-colors">Nosotros</a>
        <a href="#confianza" class="hover:text-red-400 transition-colors">Confianza</a>
        <a href="#clientes" class="hover:text-red-400 transition-colors">Opiniones</a>
        <a href="#contacto" class="hover:text-red-400 transition-colors">Contacto</a>
      </nav>

      <a href="https://wa.me/524612066573?text=Hola,%20me%20gustar%C3%ADa%20agendar%20un%20diagn%C3%B3stico%20para%20mi%20auto" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-bold bg-[#ef4444] text-white hover:bg-red-600 transition-all shadow-lg shadow-red-500/20 active:scale-95">
        WhatsApp
      </a>
    </div>
  </header>

  <!-- Hero Section con imagen local en /images/hero-engine.jpg -->
  <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <div class="absolute inset-0 z-0 bg-cover bg-right md:bg-right-top opacity-35" style="background-image: url('images/hero-engine.jpg'); filter: brightness(0.85);"></div>
    <div class="absolute inset-0 z-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/90 to-transparent"></div>
    <div class="absolute inset-0 z-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Contenido Izquierdo -->
        <div class="lg:col-span-7">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/20 text-red-400 text-xs font-semibold tracking-wider uppercase mb-6">
            <span>Taller Mecánico</span>
            <span>&bull;</span>
            <span>Av. Tecnológico, Celaya</span>
          </div>

          <h1 class="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none mb-6">
            Primero el <br>diagnóstico. <br>
            <span class="text-red-500">Después reparamos.</span>
          </h1>

          <p class="text-lg text-neutral-300 max-w-xl mb-8 leading-relaxed">
            Te explicamos con total transparencia qué tiene tu auto antes de tocar una sola pieza. Diagnóstico especializado de un ingeniero mecánico y trabajo 100% garantizado.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="https://wa.me/524612066573?text=Hola,%20me%20gustar%C3%ADa%20agendar%20un%20diagn%C3%B3stico" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold bg-[#ef4444] text-white hover:bg-red-600 transition-all shadow-xl shadow-red-500/25 text-base">
              <span>Escríbenos por WhatsApp</span>
            </a>
            <a href="#servicios" class="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold bg-neutral-900 border border-white/10 text-white hover:bg-neutral-800 transition-all text-base">
              Ver servicios
            </a>
          </div>

          <!-- Badges -->
          <div class="flex flex-wrap items-center gap-3 text-xs text-neutral-300">
            <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <span class="text-emerald-400 font-bold">✓ 4.7 ★</span>
              <span class="text-neutral-400">&bull; 13 reseñas Google</span>
            </div>
            <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <span class="text-emerald-400 font-bold">✓</span>
              <span>Trabajos garantizados</span>
            </div>
            <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <span class="text-emerald-400 font-bold">✓</span>
              <span>ING. Mecánico</span>
            </div>
          </div>
        </div>

        <!-- Tarjeta Derecha: Información y Horarios -->
        <div class="lg:col-span-5">
          <div class="card-dark rounded-2xl p-6 sm:p-8 relative backdrop-blur-xl shadow-2xl">
            <div class="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-dot"></span>
                <span>Atendiendo de Lunes a Sábado</span>
              </div>
              <span class="text-xs text-neutral-400">Celaya, Gto.</span>
            </div>

            <div class="space-y-4 mb-6 text-sm">
              <div>
                <p class="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Horario de Taller</p>
                <p class="text-white font-medium">LUN-VIE 9:00 - 19:00 &bull; SÁB 9:00 - 13:00</p>
              </div>
              <div>
                <p class="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Ubicación en Celaya</p>
                <p class="text-white font-medium">Av. Tecnológico, Col. Paraíso, Celaya, Gto.</p>
              </div>
              <div>
                <p class="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Teléfono Directo</p>
                <a href="tel:4612066573" class="text-white font-bold text-lg hover:text-red-400 transition-colors">461 206 6573</a>
              </div>
            </div>

            <a href="https://wa.me/524612066573?text=Hola,%20deseo%20agendar%20cita%20de%20revisi%C3%B3n" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center py-3.5 px-4 rounded-xl font-bold bg-[#ef4444] text-white hover:bg-red-600 transition-all text-sm shadow-lg shadow-red-500/20">
              Agendar por WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 01 Servicios (Rutas de imágenes locales a /images/) -->
  <section id="servicios" class="py-24 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-14">
        <p class="text-xs font-bold tracking-widest text-red-500 uppercase mb-2">01 Servicios</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">Especialidades mecánicas</h2>
        <p class="text-neutral-400 text-sm sm:text-base max-w-2xl">Atención y reparación integral para vehículos particulares y de trabajo con equipamiento de nivel automotriz.</p>
      </div>

      <!-- Cuadrícula de 3 Columnas -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- 01 Ajustes de motor -->
        <div class="service-card p-6" style="background-image: url('images/motor-ajustes.jpg');">
          <div class="service-overlay absolute inset-0"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">01</span>
              <span class="text-neutral-400 text-xs">→</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Ajustes de motor</h3>
            <p class="text-xs text-neutral-300 leading-relaxed">Ajustes y reconstrucción integral de motor de combustión con especificaciones y piezas de fabricante.</p>
          </div>
        </div>

        <!-- 02 Servicios de frenos -->
        <div class="service-card p-6" style="background-image: url('images/frenos.jpg');">
          <div class="service-overlay absolute inset-0"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">02</span>
              <span class="text-neutral-400 text-xs">→</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Servicios de frenos</h3>
            <p class="text-xs text-neutral-300 leading-relaxed">Discos, balatas, calipers, rectificado y purgado de circuito con fluidos sintéticos de alto punto de ebullición.</p>
          </div>
        </div>

        <!-- 03 Fallas electrónicas -->
        <div class="service-card p-6" style="background-image: url('images/ecu-modulo.jpg');">
          <div class="service-overlay absolute inset-0"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">03</span>
              <span class="text-neutral-400 text-xs">→</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Fallas electrónicas</h3>
            <p class="text-xs text-neutral-300 leading-relaxed">Detección y resolución técnica en arneses, sensores automotrices, actuadores y redes CAN-BUS.</p>
          </div>
        </div>

        <!-- 04 Computadoras y módulos -->
        <div class="service-card p-6" style="background-image: url('images/ecu-modulo.jpg');">
          <div class="service-overlay absolute inset-0"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">04</span>
              <span class="text-neutral-400 text-xs">→</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Computadoras y módulos</h3>
            <p class="text-xs text-neutral-300 leading-relaxed">Diagnóstico y reparación a nivel componente de ECUs, BCMs, inmovilizadores y programación de interfases.</p>
          </div>
        </div>

        <!-- 05 Afinaciones mayores y menores -->
        <div class="service-card p-6" style="background-image: url('images/motor-ajustes.jpg');">
          <div class="service-overlay absolute inset-0"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">05</span>
              <span class="text-neutral-400 text-xs">→</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Afinaciones mayores y menores</h3>
            <p class="text-xs text-neutral-300 leading-relaxed">Fuel Injection, carburados, Gas LP y diésel ligero. Inyectores en tina de ultrasonido, bujías y filtros premium.</p>
          </div>
        </div>

        <!-- 06 Direcciones y cremalleras -->
        <div class="service-card p-6" style="background-image: url('images/suspension.jpg');">
          <div class="service-overlay absolute inset-0"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">06</span>
              <span class="text-neutral-400 text-xs">→</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Direcciones y cremalleras</h3>
            <p class="text-xs text-neutral-300 leading-relaxed">Reconstrucción y ajuste de cremalleras electroasistidas, hidráulicas y reemplazo de bombas de dirección.</p>
          </div>
        </div>

        <!-- 07 Transmisiones -->
        <div class="service-card p-6" style="background-image: url('images/transmision.jpg');">
          <div class="service-overlay absolute inset-0"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">07</span>
              <span class="text-neutral-400 text-xs">→</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Transmisiones automáticas y estándar</h3>
            <p class="text-xs text-neutral-300 leading-relaxed">Mantenimiento y reparación de cuerpos de válvulas, embragues, convertidores de par y sincronizadores.</p>
          </div>
        </div>

        <!-- 08 Marchas, alternadores y luces -->
        <div class="service-card p-6" style="background-image: url('images/taller-bahia.jpg');">
          <div class="service-overlay absolute inset-0"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">08</span>
              <span class="text-neutral-400 text-xs">→</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Marchas, alternadores y luces</h3>
            <p class="text-xs text-neutral-300 leading-relaxed">Diagnóstico y banco de prueba para motores de arranque, sistema de carga, batería y recableado de faros LED.</p>
          </div>
        </div>

        <!-- 09 Reparación de suspensiones -->
        <div class="service-card p-6" style="background-image: url('images/suspension.jpg');">
          <div class="service-overlay absolute inset-0"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">09</span>
              <span class="text-neutral-400 text-xs">→</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Reparación de suspensiones</h3>
            <p class="text-xs text-neutral-300 leading-relaxed">Amortiguadores, resortes, horquillas, terminales, bujes de poliuretano y rótulas para máxima estabilidad.</p>
          </div>
        </div>

        <!-- 10 Diagnósticos físicos y scanner -->
        <div class="service-card p-6" style="background-image: url('images/scanner-diag.jpg');">
          <div class="service-overlay absolute inset-0"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">10</span>
              <span class="text-neutral-400 text-xs">→</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Diagnósticos físicos y scanner</h3>
            <p class="text-xs text-neutral-300 leading-relaxed">Lectura de códigos en vivo, pruebas de compresión de cilindros, presión de combustible y análisis por osciloscopio.</p>
          </div>
        </div>

        <!-- 11 Hojalatería y pintura -->
        <div class="service-card p-6" style="background-image: url('images/taller-bahia.jpg');">
          <div class="service-overlay absolute inset-0"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">11</span>
              <span class="text-neutral-400 text-xs">→</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Hojalatería y pintura</h3>
            <p class="text-xs text-neutral-300 leading-relaxed">Endererezado de lámina, reparación estructural, pulido espejo y aplicación de pintura automotriz en cabina.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 02 Método -->
  <section id="metodo" class="py-20 bg-[#101014] border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-14">
        <p class="text-xs font-bold tracking-widest text-red-500 uppercase mb-2">02 Método</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">Cómo trabajamos</h2>
        <p class="text-neutral-400 text-sm sm:text-base">Sin sorpresas. Cuatro pasos claros y documentados desde que recibimos tu vehículo hasta que te lo entregamos listo.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="card-dark p-6 rounded-xl">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold text-red-400 uppercase">Paso 01</span>
            <span class="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-xs font-bold">1</span>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">Revisamos tu auto</h3>
          <p class="text-xs text-neutral-400 leading-relaxed">Escuchamos qué notas y aplicamos una inspección visual y técnica rigurosa antes de dar cualquier opinión apresurada.</p>
        </div>

        <div class="card-dark p-6 rounded-xl">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold text-red-400 uppercase">Paso 02</span>
            <span class="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-xs font-bold">2</span>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">Te explicamos</h3>
          <p class="text-xs text-neutral-400 leading-relaxed">Te detallamos exactamente qué encontramos, qué componentes requieren intervención y la cotización clara sin costos ocultos.</p>
        </div>

        <div class="card-dark p-6 rounded-xl">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold text-red-400 uppercase">Paso 03</span>
            <span class="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-xs font-bold">3</span>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">Reparamos</h3>
          <p class="text-xs text-neutral-400 leading-relaxed">El trabajo lo ejecuta y supervisa un ingeniero mecánico calificado, usando refacciones certificadas y el torque exacto de planta.</p>
        </div>

        <div class="card-dark p-6 rounded-xl">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold text-red-400 uppercase">Paso 04</span>
            <span class="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-xs font-bold">4</span>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">Protegiendo el trabajo</h3>
          <p class="text-xs text-neutral-400 leading-relaxed">Todo queda respaldado bajo garantía formal: si algún detalle requiere revisión, regresas al taller y lo resolvemos de inmediato.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 03 Nosotros -->
  <section id="nosotros" class="py-20 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-14">
        <p class="text-xs font-bold tracking-widest text-red-500 uppercase mb-2">03 Nosotros</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">Misión, visión y valores</h2>
        <p class="text-neutral-400 text-sm sm:text-base">El compromiso ético, la ingeniería y la disciplina que respaldan cada unidad que entra a nuestro taller en Celaya.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div class="card-dark p-6 rounded-xl">
            <span class="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 block">Propósito Central</span>
            <h3 class="text-lg font-bold text-white mb-2">Misión</h3>
            <p class="text-xs text-neutral-300 leading-relaxed">Proporcionar un servicio de calidad para brindar soluciones fiables y duraderas que conserven las unidades en estado óptimo, eficiente y seguro, por medio de personal altamente capacitado, motivado y productivo que tiene como principal interés la seguridad y satisfacción de nuestros clientes.</p>
          </div>

          <div class="card-dark p-6 rounded-xl">
            <span class="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 block">Hacia Dónde Vamos</span>
            <h3 class="text-lg font-bold text-white mb-2">Visión</h3>
            <p class="text-xs text-neutral-300 leading-relaxed">Establecer un modelo de liderazgo en el mantenimiento preventivo y correctivo de vehículos automotores; mantener un crecimiento continuo basado en la satisfacción del cliente, mejorando día a día los tiempos de respuesta y conservando los mantenimientos adecuados.</p>
          </div>
        </div>

        <div class="card-dark p-6 rounded-xl flex flex-col justify-between space-y-4">
          <div class="flex items-start gap-3">
            <span class="text-red-500 text-base font-bold mt-0.5">✓</span>
            <div>
              <h4 class="text-sm font-bold text-white">Compromiso</h4>
              <p class="text-xs text-neutral-400">Cumpliendo en tiempo y forma rigurosa con las expectativas acordadas de nuestros clientes.</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-red-500 text-base font-bold mt-0.5">✓</span>
            <div>
              <h4 class="text-sm font-bold text-white">Honestidad</h4>
              <p class="text-xs text-neutral-400">Garantizando la procedencia y buena calidad del trabajo, así como de todas las refacciones instaladas.</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-red-500 text-base font-bold mt-0.5">✓</span>
            <div>
              <h4 class="text-sm font-bold text-white">Respeto</h4>
              <p class="text-xs text-neutral-400">Conduciéndonos de una manera equitativa, transparente y atenta ante las necesidades de las personas.</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-red-500 text-base font-bold mt-0.5">✓</span>
            <div>
              <h4 class="text-sm font-bold text-white">Liderazgo</h4>
              <p class="text-xs text-neutral-400">Tomar la iniciativa técnica y la responsabilidad absoluta para entregar el mayor valor en nuestro sector.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 04 Confianza con imagen local en /images/scanner-diag.jpg -->
  <section id="confianza" class="py-20 bg-[#101014] border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-14">
        <p class="text-xs font-bold tracking-widest text-red-500 uppercase mb-2">04 Confianza</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">Un taller que <span class="text-red-500">responde</span> por su trabajo</h2>
        <p class="text-neutral-400 text-sm sm:text-base">Tecnología automotriz avanzada de diagnóstico y trato directo con el ingeniero encargado.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-6">
          <div class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img src="images/scanner-diag.jpg" alt="Ingeniero mecánico automotriz en Celaya" class="w-full h-80 object-cover">
            <div class="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs font-bold text-white">
              ⭐ 4.7 ★ de 13 reseñas verificadas en Google
            </div>
          </div>
        </div>

        <div class="lg:col-span-6 space-y-4">
          <div class="card-dark p-6 rounded-xl">
            <h3 class="text-base font-bold text-white mb-1 flex items-center gap-2">
              <span class="text-red-500">✓</span> Diagnóstico antes de reparar
            </h3>
            <p class="text-xs text-neutral-400">Nunca tocamos ni cambiamos una pieza sin explicarte primero las causas de la avería y contar con tu autorización.</p>
          </div>

          <div class="card-dark p-6 rounded-xl">
            <h3 class="text-base font-bold text-white mb-1 flex items-center gap-2">
              <span class="text-red-500">✓</span> Ingeniero mecánico competente
            </h3>
            <p class="text-xs text-neutral-400">Tu automóvil está en manos de un profesional con criterio de ingeniería aplicada, garantizando diagnósticos exactos.</p>
          </div>

          <div class="card-dark p-6 rounded-xl">
            <h3 class="text-base font-bold text-white mb-1 flex items-center gap-2">
              <span class="text-red-500">✓</span> Atención personal y con respeto
            </h3>
            <p class="text-xs text-neutral-400">Trato cercano, explicación técnica sin rodeos y el compromiso de dejar tu auto en condiciones mecánicas ideales.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 05 Reseñas -->
  <section id="clientes" class="py-20 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-14">
        <p class="text-xs font-bold tracking-widest text-red-500 uppercase mb-2">05 Clientes</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">Lo que dicen de nosotros</h2>
        <p class="text-neutral-400 text-sm">4.7 ★ con 13 opiniones en Google Maps. Opiniones reales de conductores en Celaya, palabra por palabra.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card-dark p-6 rounded-xl flex flex-col justify-between">
          <div>
            <div class="text-red-500 text-sm mb-3">★★★★★</div>
            <p class="text-xs text-neutral-200 italic mb-4">"Un buen servicio con una buena atención y trabajos garantizados."</p>
          </div>
          <div class="flex justify-between items-center text-[10px] text-neutral-500 border-t border-white/5 pt-3">
            <span>SEP 2023</span>
            <span class="font-bold text-neutral-400">Google Maps</span>
          </div>
        </div>

        <div class="card-dark p-6 rounded-xl flex flex-col justify-between">
          <div>
            <div class="text-red-500 text-sm mb-3">★★★★★</div>
            <p class="text-xs text-neutral-200 italic mb-4">"Excelente atención y orientación, son profesionales en todo lo que hacen."</p>
          </div>
          <div class="flex justify-between items-center text-[10px] text-neutral-500 border-t border-white/5 pt-3">
            <span>JUN 2023</span>
            <span class="font-bold text-neutral-400">Google Maps</span>
          </div>
        </div>

        <div class="card-dark p-6 rounded-xl flex flex-col justify-between">
          <div>
            <div class="text-red-500 text-sm mb-3">★★★★★</div>
            <p class="text-xs text-neutral-200 italic mb-4">"El ING. mecánico es muy competente, eso hace que sea un muy buen taller."</p>
          </div>
          <div class="flex justify-between items-center text-[10px] text-neutral-500 border-t border-white/5 pt-3">
            <span>JUN 2023</span>
            <span class="font-bold text-neutral-400">Google Maps</span>
          </div>
        </div>

        <div class="card-dark p-6 rounded-xl flex flex-col justify-between">
          <div>
            <div class="text-red-500 text-sm mb-3">★★★★★</div>
            <p class="text-xs text-neutral-200 italic mb-4">"Cualquier detalle excelente técnico y lo repara muy bien a la primera."</p>
          </div>
          <div class="flex justify-between items-center text-[10px] text-neutral-500 border-t border-white/5 pt-3">
            <span>SEP 2021</span>
            <span class="font-bold text-neutral-400">Google Maps</span>
          </div>
        </div>

        <div class="card-dark p-6 rounded-xl flex flex-col justify-between">
          <div>
            <div class="text-red-500 text-sm mb-3">★★★★★</div>
            <p class="text-xs text-neutral-200 italic mb-4">"Muy buena atención y buen trato. Da tranquilidad dejar el auto aquí."</p>
          </div>
          <div class="flex justify-between items-center text-[10px] text-neutral-500 border-t border-white/5 pt-3">
            <span>ENE 2019</span>
            <span class="font-bold text-neutral-400">Google Maps</span>
          </div>
        </div>

        <div class="card-dark p-6 rounded-xl flex flex-col justify-between">
          <div>
            <div class="text-red-500 text-sm mb-3">★★★★★</div>
            <p class="text-xs text-neutral-200 italic mb-4">"Servicio 100% honesto. Te explican antes de reparar y no te meten piezas de más."</p>
          </div>
          <div class="flex justify-between items-center text-[10px] text-neutral-500 border-t border-white/5 pt-3">
            <span>AGO 2023</span>
            <span class="font-bold text-neutral-400">Google Maps</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 06 Contacto y Ubicación -->
  <section id="contacto" class="py-20 bg-[#101014] border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-6">
          <p class="text-xs font-bold tracking-widest text-red-500 uppercase mb-2">06 Visítanos</p>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">Tráelo al taller</h2>
          <p class="text-neutral-400 text-sm mb-8 leading-relaxed">Mándanos un mensaje por WhatsApp con los detalles de tu auto y te contestamos con una orientación inicial. O si prefieres, llega directamente a nuestras instalaciones en Celaya.</p>

          <div class="flex flex-col sm:flex-row gap-4 mb-6">
            <a href="https://wa.me/524612066573" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-[#ef4444] text-white hover:bg-red-600 transition-all text-sm shadow-lg shadow-red-500/20">
              Abrir WhatsApp
            </a>
            <a href="https://maps.google.com/?q=Av.+Tecnol%C3%B3gico,+Col.+Para%C3%ADso,+38017+Celaya,+Gto." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold bg-neutral-900 border border-white/10 text-white hover:bg-neutral-800 transition-all text-sm">
              Cómo llegar (Google Maps)
            </a>
          </div>

          <p class="text-[11px] text-neutral-500">LUN-VIE 9:00-19:00 &bull; SÁB 9:00-13:00 &bull; DOMINGO CERRADO</p>
        </div>

        <div class="lg:col-span-6">
          <div class="card-dark p-6 rounded-2xl space-y-4 text-xs">
            <div>
              <p class="text-neutral-500 uppercase font-bold tracking-wider text-[10px] mb-1">Dirección Física</p>
              <p class="text-white font-medium">Av. Tecnológico, Col. Paraíso, 38017 Celaya, Gto.</p>
            </div>
            <div>
              <p class="text-neutral-500 uppercase font-bold tracking-wider text-[10px] mb-1">WhatsApp de Atención</p>
              <a href="tel:4612066573" class="text-red-400 font-bold text-sm hover:underline">461 206 6573</a>
            </div>
            <div>
              <p class="text-neutral-500 uppercase font-bold tracking-wider text-[10px] mb-1">Correo Electrónico</p>
              <p class="text-neutral-300">juancarlos10556@gmail.com</p>
            </div>
            <div>
              <p class="text-neutral-500 uppercase font-bold tracking-wider text-[10px] mb-1">Página de Facebook</p>
              <a href="https://facebook.com/9150290241758211" target="_blank" rel="noopener noreferrer" class="text-neutral-300 hover:text-white underline">facebook.com/AutoTecnicaCelaya</a>
            </div>

            <div class="border-t border-white/10 pt-4 mt-4">
              <p class="text-neutral-500 uppercase font-bold tracking-wider text-[10px] mb-2">Horario Semanal</p>
              <div class="flex justify-between py-1 border-b border-white/5 text-neutral-300">
                <span>Lunes a Viernes</span>
                <span class="font-bold text-white">9:00 a 19:00</span>
              </div>
              <div class="flex justify-between py-1 border-b border-white/5 text-neutral-300">
                <span>Sábado</span>
                <span class="font-bold text-white">9:00 a 13:00</span>
              </div>
              <div class="flex justify-between py-1 text-neutral-300">
                <span>Domingo</span>
                <span class="text-red-400 font-bold">Cerrado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-12 border-t border-white/10 bg-[#0c0c0e]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <p class="text-white font-black tracking-tight uppercase text-sm">Auto Técnica</p>
        <p class="text-neutral-500 text-xs">AUTOMOTRIZ &bull; CELAYA</p>
      </div>

      <div class="flex flex-wrap gap-6 text-xs text-neutral-400">
        <a href="#servicios" class="hover:text-white transition-colors">Servicios</a>
        <a href="#metodo" class="hover:text-white transition-colors">Método</a>
        <a href="#nosotros" class="hover:text-white transition-colors">Nosotros</a>
        <a href="#confianza" class="hover:text-white transition-colors">Confianza</a>
        <a href="#clientes" class="hover:text-white transition-colors">Clientes</a>
        <a href="#contacto" class="hover:text-white transition-colors">Visítanos</a>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[11px] text-neutral-500">
      <p>&copy; 2024 Auto Técnica Automotriz &bull; Celaya, Guanajuato. Todos los derechos reservados.</p>
      <p>Sitio web profesional de alto rendimiento</p>
    </div>
  </footer>

  <!-- Botón flotante WhatsApp -->
  <a href="https://wa.me/524612066573?text=Hola,%20me%20gustar%C3%ADa%20agendar%20un%20diagn%C3%B3stico%20para%20mi%20auto" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 bg-[#ef4444] text-white p-4 rounded-full shadow-2xl hover:bg-red-600 transition-all hover:scale-110 active:scale-95 flex items-center justify-center" aria-label="Contactar por WhatsApp">
    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  </a>

</body>
</html>
```

---

## 📄 Archivo 2: `vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

---

## 📄 Archivo 3: `netlify.toml`

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
```

---

## 📄 Archivo 4: `robots.txt`

```text
User-agent: *
Allow: /

Sitemap: https://autotecnica.vercel.app/sitemap.xml
```

---

## 📦 Instrucciones para armar tu `.zip` y subirlo

1. Crea una carpeta llamada `auto-tecnica-web`.
2. Adentro crea la carpeta `images` y guarda las 8 imágenes con sus nombres indicados arriba.
3. Coloca `index.html` (con las rutas relativas `images/...`), `vercel.json`, `netlify.toml` y `robots.txt`.
4. Comprime la carpeta `auto-tecnica-web` en un archivo `.zip`.
5. Arrástralo a **[app.netlify.com/drop](https://app.netlify.com/drop)** o Vercel. ¡Tu sitio se publicará al instante con todas las imágenes cargando localmente sin depender de servidores externos!
