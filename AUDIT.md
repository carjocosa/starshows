# AUDITORÍA — Starshows Sistema Completo (Productora de Eventos)

**Rol:** Auditor experto en productoras de conciertos | **Fecha:** 31 Aug 2026 | **Deploy base:** starshows-selfhosted (Next.js + NestJS + Directus self-hosted)

## Resumen Ejecutivo
Base actual: **45% completo**. Frontend validado y backend transaccional con fecha+ciudad y USD están. Faltan bloques críticos para operar como productora (no solo vender entradas): auspicio, historial SEO, pagos reales, validación en puerta y analítica.

---

## 1. FRONTEND PÚBLICO (Next.js)
| Funcionalidad | Estado | Riesgo | Nota auditor |
|---|---|---|---|
| Home SISTEMA STAR / EN ÓRBITA / CONSTELACIÓN (Poppinson+animaciones) | ✅ Hecho | — | Validado en http://localhost:3032 y 3033 |
| Ficha de evento con fecha+ciudad, venue, portada, descripción | ✅ Hecho | — | API prisma incluye date+city |
| Line-up artistas con Spotify/Instagram | ⚠️ Parcial | Alto | Schema tiene relación EventArtist, falta UI de artistas en ficha |
| Mapa venue + aforo | ⚠️ Parcial | Medio | Venue tiene mapUrl/capacity, falta embed Google Maps |
| Galería fotos/video por evento | ❌ Falta | Medio | Necesario para productora (historial visual) |
| FAQ / Horarios / Restricciones por evento | ❌ Falta | Medio | |
| Filtros por ciudad/fecha/género + búsqueda | ⚠️ Parcial | Alto | Event API filtra por city/status, falta género y búsqueda texto |
| Auspiciantes (ALIADOS) bloque por evento + página Aliados | ❌ Falta | Alto | Para productora es core — retorno para marcas |
| Nosotros / Historia / Contacto / Cotizar show | ❌ Falta | Alto | Sin esto parece ticketera, no productora |
| Blog/Prensa con acreditaciones | ❌ Falta | Bajo |  |

## 2. TICKETING & PAGOS
| Funcionalidad | Estado | Riesgo | Nota |
|---|---|---|---|
| Tipos de entrada con nombre/precio USD/capos/beneficios | ✅ Hecho | — | Prisma TicketType + UI editable |
| Control aforo transaccional (sin sobreventa) | ✅ Hecho | — | OrdersService con transaction + sold increment |
| Cupones / códigos descuento | ❌ Falta | Medio | |
| Preventa / Early bird con fechas | ❌ Falta | Medio | |
| Pagos Kushki / PayPhone / PayPal + SRI facturación | ❌ Falta | **CRÍTICO** | API marca PAGADO sin pasarela real |
| Carrito, checkout, email confirmación con QR | ⚠️ Parcial | Crítico | QR generado (nanoid), falta email y PDF |
| Reembolsos / cambios / transferencia de entrada | ❌ Falta | Medio | |

## 3. QR & OPERACIÓN PUERTA
| Funcionalidad | Estado | Riesgo |
|---|---|---|
| QR dinámico por orden | ✅ Hecho | — |
| Validación idempotente (no re-uso) | ✅ Hecho | — |
| PWA validador offline para puerta | ❌ Falta | **CRÍTICO** | Sin esto no opera en coliseo sin señal |
| Dashboard validación en tiempo real | ❌ Falta | Medio |

## 4. CMS ADMIN (Directus self-hosted)
| Funcionalidad | Estado |
|---|---|
| CRUD Event (fecha+ciudad editable, duplicar, programar) | ✅ Hecho |
| CRUD Venue (nombre, ciudad libre, aforo, mapa) | ✅ Hecho |
| CRUD TicketType (precio USD inline) | ✅ Hecho |
| Ciudad libre (agregar MANTA/LOJA/etc) | ✅ Hecho |
| CRUD Artist + TicketType + Order | ✅ Hecho (preview admin-full.html) |
| Media library S3 (MinIO) | ✅ Hecho (docker) |
| Auspiciantes CRUD + ordenar por evento | ❌ Falta |
| SEO fields (title/description/OG) + preview | ❌ Falta |
| Roles Admin/Contenido/Aliados + auditoría | ⚠️ Parcial (Directus soporta, falta configurar) |
| Versionado / historial / borrador | ✅ Directus nativo |

## 5. SEO & PERFORMANCE
| Funcionalidad | Estado | Riesgo |
|---|---|---|
| Schema.org Event + sitemap.xml + robots.txt | ❌ Falta | Alto | Sin schema no aparece en Google Eventos |
| OG/Twitter cards + image optimization Next.js | ❌ Falta | Medio |
| CDN / Caching (Caddy + Next) | ⚠️ Parcial | Medio |

## 6. ANALÍTICA & GROWTH
| Funcionalidad | Estado |
|---|---|
| GA4 + Meta Pixel + Search Console | ❌ Falta |
| Newsletter / CRM (Brevo) + automatización preventa | ❌ Falta |
| WhatsApp API recordatorio | ❌ Falta |

## 7. SEGURIDAD & INFRA (self-hosted)
| Funcionalidad | Estado |
|---|---|
| TLS Caddy automático | ✅ Hecho |
| Backups diarios pg_dump cron | ⚠️ Parcial (script documentado, no activo) |
| Rate limiting / anti-bot en checkout | ❌ Falta |
| Logs + Grafana + alertas | ❌ Falta |

## 8. LEGAL
| Funcionalidad | Estado |
|---|---|
| Términos, Privacidad, Política reembolso | ❌ Falta | Obligatorio antes de vender |

---

## DIAGNÓSTICO DEPLOY BASE
**¿Está listo para producción? NO.** Puede mostrar cartelera y crear eventos con ciudad+fecha y precios USD, y generar QR. No puede cobrar real, validar en puerta sin internet, ni mostrarse como productora (sin Nosotros/Aliados/Historial SEO).

## ROADMAP PARA CIERRE
**Sprint 1 (Crítico, 1-2 sem):** Pasarela Kushki/PayPhone + email QR + Schema Event + Términos + PWA validador offline
**Sprint 2 (Core productora, 1 sem):** Aliados CRUD + Nosotros/Historia + Galería + Mapa venue + Filtros género/búsqueda
**Sprint 3 (Growth):** GA4/Pixel + Newsletter + Cupones/Preventa
