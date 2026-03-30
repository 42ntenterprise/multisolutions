function getSheetOrThrow(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    throw new Error('No existe la hoja: ' + sheetName);
  }
  return sheet;
}

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const params = (e && e.parameter) || {};
  const recordType = params.record_type || 'lead';

  if (recordType === 'support') {
    const sheet = getSheetOrThrow(ss, params.sheet_name || 'Soporte 42NT');
    sheet.appendRow([
      params.timestamp || '',
      params.pagina || '',
      params.nombre || '',
      params.empresa || '',
      params.email || '',
      params.whatsapp || '',
      params.cliente_status || '',
      params.proyecto || '',
      params.tipo_soporte || '',
      params.impacto || '',
      params.urgency || '',
      params.descripcion || '',
      params.origen_cta || '',
      params.form_inicio_ts || '',
      params.form_inicio_origen || '',
      params.utm_source || '',
      params.utm_medium || '',
      params.utm_campaign || '',
      params.referrer || '',
      params.user_agent || '',
    ]);
  } else {
    const sheet = getSheetOrThrow(ss, params.sheet_name || 'Solicitud 42NT');
    sheet.appendRow([
      params.timestamp || '',
      params.nombre || '',
      params.cargo_rol || '',
      params.nombre_cargo || '',
      params.empresa || '',
      params.empresa_detectada || '',
      params.email || '',
      params.whatsapp || '',
      params.industria || '',
      params.tamano_empresa || '',
      params.necesidad || '',
      params.fuente_datos || '',
      params.numero_fuentes || '',
      params.urgencia || '',
      params.descripcion || '',
      params.origen_cta || '',
      params.caso_interes || '',
      params.demo_contexto || '',
      params.form_inicio_ts || '',
      params.form_inicio_origen || '',
      params.lead_score || '',
      params.lead_label || '',
      params.utm_source || '',
      params.utm_medium || '',
      params.utm_campaign || '',
      params.referrer || '',
      params.user_agent || '',
      params.pagina || '',
    ]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
