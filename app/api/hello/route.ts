import { NextResponse } from 'next/server';

export async function GET() {
  // This is just a temporary API route to test the connection
  return NextResponse.json({ message: 'Hello from Next.js!' });
}