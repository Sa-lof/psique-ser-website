// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Configura la API Key de SendGrid desde las variables de entorno
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request): Promise<Response> {
  try {
    const { nombre, correo, mensaje } = await request.json();

    const emailText = `Nuevo mensaje de contacto de ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`;
    const emailHtml = `
      <div style="text-align: left;">
        <h3>Nuevo mensaje de contacto de ${nombre}</h3>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      </div>
    `;

    const msg = {
      to: 'psique_ser@outlook.com',  // Destinatario
      from: 'email-service@amoxtli.tech',        // Remitente (debe estar verificado en SendGrid)
      subject: 'Contacto desde el sitio web',
      text: emailText,
      html: emailHtml,
    };

    await sgMail.send(msg);
    console.log('Email sent');
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error sending email' },
      { status: 500 }
    );
  }
}
