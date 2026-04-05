import { type NextRequest } from 'next/server';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: 'Nieprawidłowy format danych. Wymagany JSON.' },
      { status: 400 }
    );
  }

  if (
    typeof body !== 'object' ||
    body === null ||
    !('email' in body)
  ) {
    return Response.json(
      { error: 'Pole "email" jest wymagane.' },
      { status: 400 }
    );
  }

  const { email, package: selectedPackage } = body as {
    email: unknown;
    package?: unknown;
  };

  if (typeof email !== 'string' || !email.trim()) {
    return Response.json(
      { error: 'Adres e-mail jest wymagany.' },
      { status: 400 }
    );
  }

  const trimmedEmail = email.trim().toLowerCase();

  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return Response.json(
      { error: 'Podaj prawidłowy adres e-mail.' },
      { status: 400 }
    );
  }

  const pkg =
    typeof selectedPackage === 'string' && selectedPackage.trim()
      ? selectedPackage.trim()
      : null;

  // Log the waitlist entry (in production, persist to a database)
  console.log('[MuzoFlow Waitlist]', {
    email: trimmedEmail,
    package: pkg,
    timestamp: new Date().toISOString(),
  });

  return Response.json(
    {
      success: true,
      message: 'Pomyślnie dodano do waitlisty.',
    },
    { status: 201 }
  );
}
