import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('Contact form submission received:', formData);

    // In a real application, you would process the form data here,
    // e.g., send an email, save to a database, etc.

    return NextResponse.json({ message: 'Message received successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json({ error: 'Failed to process message.' }, { status: 500 });
  }
} 