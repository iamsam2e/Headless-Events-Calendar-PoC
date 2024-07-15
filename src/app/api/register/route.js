import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { eventId, eventTitle, name, phone, email } = await request.json();

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  //Sending email, phone and name
  try {
    await transporter.sendMail({
      from: `"Your Website" <${process.env.EMAIL_USER}>`,
      to: process.env.SITE_OWNER_EMAIL,
      subject: `New Registration for ${eventTitle}`,
      text: `A new user has registered for ${eventTitle} (ID: ${eventId}).\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`,
      html: `
        <p>A new user has registered for <strong>${eventTitle}</strong> (ID: ${eventId}).</p>
        <p>Name: ${name}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
      `,
    });

    return NextResponse.json(
      { message: "Registration successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "Registration failed" },
      { status: 500 }
    );
  }
}
