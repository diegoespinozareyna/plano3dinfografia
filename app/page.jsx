export default function Home() {
  return (
    <div className="page">

      {/* HEADER */}
      <div className="header">
        <div>
          <h1>Sistema Web de Venta de Lotes de Terreno</h1>
          <div className="sub">Plataforma integral para inmobiliarias y desarrolladoras</div>
        </div>
      </div>

      {/* HERO con Plano 3D embebido */}
      <div className="hero">
        <div className="eyebrow">Reserva · Pagos · Cobranzas · Reportes</div>
        <h2>Todo tu proyecto, <span>en tiempo real</span></h2>
        <p>Una sola plataforma para reservar, vender y cobrar lotes. Verificación automática de pagos por Yape, Plin, transferencias y depósitos. Visualización en vivo del estado de cada lote sobre el plano 3D del proyecto.</p>

        <div className="embed-wrapper">
          <iframe
            src="https://proyectosmunoz.com/paracas/plano3d"
            title="Plano 3D — Parques de Paracas"
            loading="lazy"
            allow="fullscreen"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="embed-caption">Plano interactivo de Parques de Paracas — vista en vivo del sistema</div>

        <div className="legend">
          <div className="legend-item"><div className="legend-dot" style={{ background: '#22C55E' }}></div>Vendido</div>
          <div className="legend-item"><div className="legend-dot" style={{ background: '#FBBF24' }}></div>Reservado</div>
          <div className="legend-item"><div className="legend-dot" style={{ background: '#EF4444' }}></div>Con mora</div>
          <div className="legend-item"><div className="legend-dot" style={{ background: '#8B5CF6' }}></div>Bloqueado</div>
          <div className="legend-item"><div className="legend-dot" style={{ background: '#64748B' }}></div>Disponible</div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="section-eyebrow">10 Funcionalidades Clave</div>
        <h3 className="section-title">Lo que hace el sistema por ti</h3>
        <p className="section-sub">Diseñado para administración, finanzas, ventas y cobranzas. Todo en un mismo lugar.</p>

        <div className="grid">

          {/* 1 — Reserva tiempo real (azul) */}
          <div className="card" style={{ '--accent': '#3B82F6' }}>
            <div className="card-icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><circle cx="12" cy="14" r="3"/><polyline points="12,13 12,14.5 13.2,15.5"/></svg>
            </div>
            <div className="card-num">01</div>
            <div className="card-body">
              <div className="card-title">Reserva y Pintado en Tiempo Real</div>
              <div className="card-desc">Bloqueo instantáneo del lote y verificación automática de vouchers de Yape, Plin, transferencias y depósitos para administración y finanzas.</div>
            </div>
          </div>

          {/* 2 — Ampliaciones (verde) */}
          <div className="card" style={{ '--accent': '#10B981' }}>
            <div className="card-icon">
              <svg viewBox="0 0 24 24"><rect x="2" y="11" width="20" height="9" rx="1.5"/><circle cx="12" cy="15.5" r="2"/><polyline points="8,7 12,3 16,7"/><line x1="12" y1="3" x2="12" y2="11"/></svg>
            </div>
            <div className="card-num">02</div>
            <div className="card-body">
              <div className="card-title">Ampliaciones para Lote al Contado</div>
              <div className="card-desc">Bloqueo automático del lote al detectar S/ 10K en vouchers verificados. Venta automática al completar el valor total (ej. S/ 100K).</div>
            </div>
          </div>

          {/* 3 — Financiado (indigo) */}
          <div className="card" style={{ '--accent': '#6366F1' }}>
            <div className="card-icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="8,14 10,16 14,12"/><line x1="16" y1="18" x2="18" y2="18"/></svg>
            </div>
            <div className="card-num">03</div>
            <div className="card-body">
              <div className="card-title">Lote Financiado a Tu Medida</div>
              <div className="card-desc">Inicial mínima de S/ 10K y cronograma de pagos a 12, 24 o 36 meses según el requerimiento del cliente.</div>
            </div>
          </div>

          {/* 4 — Plano cobranzas (naranja) */}
          <div className="card" style={{ '--accent': '#F97316' }}>
            <div className="card-icon">
              <svg viewBox="0 0 24 24"><polygon points="3,7 9,4 15,7 21,4 21,17 15,20 9,17 3,20"/><line x1="9" y1="4" x2="9" y2="17"/><line x1="15" y1="7" x2="15" y2="20"/></svg>
            </div>
            <div className="card-num">04</div>
            <div className="card-body">
              <div className="card-title">Plano Comercial y de Cobranzas</div>
              <div className="card-desc">Pagos al día pintan el lote en verde. Los atrasos generan moras detectadas automáticamente, con un plano separado para seguimiento de cobranzas.</div>
            </div>
          </div>

          {/* 5 — Reportes PDF (rosa) */}
          <div className="card" style={{ '--accent': '#EC4899' }}>
            <div className="card-icon">
              <svg viewBox="0 0 24 24"><path d="M14,2 L20,8 L20,22 L4,22 L4,2 Z"/><polyline points="14,2 14,8 20,8"/><line x1="8" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="13" y2="18"/></svg>
            </div>
            <div className="card-num">05</div>
            <div className="card-body">
              <div className="card-title">Reportes PDF a la Medida</div>
              <div className="card-desc">Reportes de reservas, ampliaciones (contado) y cuotas (financiado) filtrados por rango de fechas o por DNI del cliente.</div>
            </div>
          </div>

          {/* 6 — Búsqueda (cyan) */}
          <div className="card" style={{ '--accent': '#06B6D4' }}>
            <div className="card-icon">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            </div>
            <div className="card-num">06</div>
            <div className="card-body">
              <div className="card-title">Búsqueda de Vouchers</div>
              <div className="card-desc">Localización inmediata de comprobantes de depósito para procesos de devolución o desistimiento del cliente.</div>
            </div>
          </div>

          {/* 7 — Verificación automática (violeta) */}
          <div className="card" style={{ '--accent': '#8B5CF6' }}>
            <div className="card-icon">
              <svg viewBox="0 0 24 24"><path d="M12,2 L4,5 L4,11 C4,16 7.5,20 12,22 C16.5,20 20,16 20,11 L20,5 Z"/><polyline points="9,12 11,14 15,10"/></svg>
            </div>
            <div className="card-num">07</div>
            <div className="card-body">
              <div className="card-title">Verificación Automática de Pagos</div>
              <div className="card-desc">El sistema valida vouchers por número de operación único y por titularidad de la inmobiliaria. Finanzas ya no revisa voucher por voucher.</div>
            </div>
          </div>

          {/* 8 — Asientos visitas (teal) */}
          <div className="card" style={{ '--accent': '#14B8A6' }}>
            <div className="card-icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"/><line x1="3" y1="14" x2="21" y2="14"/><circle cx="7" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><line x1="7" y1="10" x2="9" y2="10"/><line x1="15" y1="10" x2="17" y2="10"/></svg>
            </div>
            <div className="card-num">08</div>
            <div className="card-body">
              <div className="card-title">Reserva de Asientos para Visitas</div>
              <div className="card-desc">Cupos para asesores e invitados que viajarán al proyecto. Mejora la logística y el cálculo de unidades vehiculares a contratar.</div>
            </div>
          </div>

          {/* 9 — Liberación automática (ámbar) */}
          <div className="card" style={{ '--accent': '#F59E0B' }}>
            <div className="card-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><polyline points="12,8 12,13 15.5,14.5"/><polyline points="20,5 17,2 14,5"/><path d="M17,2 L17,7"/></svg>
            </div>
            <div className="card-num">09</div>
            <div className="card-body">
              <div className="card-title">Liberación Automática del Lote</div>
              <div className="card-desc">El sistema cuenta 7 días de reserva por defecto. Si el cliente no aporta ampliaciones ni inicial, el lote se libera automáticamente.</div>
            </div>
          </div>

          {/* 10 — Antifraude (rojo) */}
          <div className="card" style={{ '--accent': '#EF4444' }}>
            <div className="card-icon">
              <svg viewBox="0 0 24 24"><path d="M12,2 L4,5 L4,11 C4,16 7.5,20 12,22 C16.5,20 20,16 20,11 L20,5 Z"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>
            </div>
            <div className="card-num">10</div>
            <div className="card-body">
              <div className="card-title">Antifraude de Vouchers</div>
              <div className="card-desc">Si un voucher fue adulterado, el sistema lo detecta y no permite subirlo. Protección directa contra pagos falsos.</div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <div className="cta-text">
          <h3>Y tus clientes también reservan en línea</h3>
          <p>Desde el celular o la computadora, el cliente ve los lotes disponibles, reserva su lote y sube su voucher sin pisar la oficina.</p>
        </div>
        <div className="cta-icon">
          <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12,2 C14.5,5 16,8.5 16,12 C16,15.5 14.5,19 12,22 C9.5,19 8,15.5 8,12 C8,8.5 9.5,5 12,2 Z"/>
          </svg>
        </div>
      </div>

      <div className="foot">
        Sistema integral de gestión inmobiliaria · Reservas · Pagos · Cobranzas · Reportes
      </div>

    </div>
  );
}
