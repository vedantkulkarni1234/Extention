import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { extensionId, price, name } = await req.json();

    // Since all extensions are now free, we don't need Stripe checkout
    // Just return a success response with download information
    return NextResponse.json({
      success: true,
      message: 'Extension is free - download available',
      extensionId,
      extensionName: name,
      downloadUrl: `/extensions/${extensionId}/download`
    });
  } catch (error) {
    console.error('CHECKOUT_ERROR', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}