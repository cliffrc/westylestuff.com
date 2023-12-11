# Copy / Paste goodness

## Initial Pastes

### @/src/lib/utils.ts: clsx and tailwind-merge

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

```sh
$ pnpm i clsx tailwind-merge
```

### @/src/app/layout.tsx

```jsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "min-h-screen font-sans antialiased grainy",
          inter.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
```

# <<<<<<< HEAD

### /page.tsx

```tsx
<div className="relative isolate">
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  >
    <div
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    />
  </div>
</div>
```

> > > > > > > clean-work

### @/app/components/Navbar.tsx

```tsx
const Navbar = () => {
  return (
<<<<<<< HEAD
    <header className="z-[999] relative mt-16 sm:mt-10">
      <div className="w-full h-[3.25rem] fixed top-0 rounded-none border border-black/40 bg-white/50 backdrop-blur-sm sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full left-1/2 -translate-x-1/2 "></div>
      <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-1 font-medium text-sm text-zinc-500/90 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navLinks.map((navlink) => (
            <li
              key={navlink.hash}
              className="h-3/4 flex items-center justify-center relative
=======
    <header className="relative z-[999] mt-16 sm:mt-10">
      <div className="fixed left-1/2 top-0 h-[3.25rem] w-full -translate-x-1/2 rounded-none border border-black/40 bg-white/50 backdrop-blur-sm sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full "></div>
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-1 text-sm font-medium text-zinc-500/90 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navLinks.map((navlink) => (
            <li
              key={navlink.hash}
              className="relative flex h-3/4 items-center justify-center
>>>>>>> clean-work
            "
            >
              <Link
                className={cn(
<<<<<<< HEAD
                  "flex w-full items-center justify-centerp-3 hover:text-zinc-950 transition dark:text-zinc-500 dark:hover:gray-300"
=======
                  "dark:hover:gray-300 flex w-full items-center justify-center p-3 transition hover:text-zinc-950 dark:text-zinc-500",
>>>>>>> clean-work
                )}
                href={navlink.hash}
              >
                {navlink.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
```

### @/.../[section] - with text

```tsx
const About = () => {
  return (
    <section
<<<<<<< HEAD
      className="mt-12 sm:scroll-mt-[4.7rem]  flex flex-col items-center"
=======
      className="mt-12 flex  flex-col items-center sm:scroll-mt-[4.7rem]"
>>>>>>> clean-work
      id="about"
    >
      <PenLine className="h-12 w-12 text-zinc-600/50" />
      <SectionHeader>About H2 subtitle</SectionHeader>
      <p className="max-w-prose">text goes here </p>
    </section>
  );
};
```

### @/.../[section] - with feature cards

```tsx
const Skills = () => {
  return (
    <section
<<<<<<< HEAD
      className="mt-12 sm:scroll-mt-[4.7rem]  flex flex-col items-center"
=======
      className="mt-12 flex  flex-col items-center sm:scroll-mt-[4.7rem]"
>>>>>>> clean-work
      id="skills"
    >
      <Layers3 className="h-12 w-12 text-zinc-600/50" />

      <SectionHeader>My skills</SectionHeader>

      <div className="m-auto max-w-md  items-center rounded-xl bg-zinc-300/10 p-4 text-center">
        <h4 className="m-auto mb-3 w-fit rounded-full border-2 border-zinc-600/50 px-3 text-xl font-medium text-zinc-800   dark:text-white/60">
          Technical Skills
        </h4>

        <ul className="mt-2 flex flex-wrap justify-center gap-2 text-sm  text-zinc-800">
          {techSkillsData.map((skill, index) => (
            <li
              className="rounded-xl border-zinc-400/50 bg-gray-400/40 px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:hover:text-yellow-200 dark:hover:underline dark:hover:underline-offset-8"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <ActivityIcon className="my-3 h-6 w-6 -rotate-[10deg] text-4xl font-semibold text-zinc-600/50  dark:text-white/60" />
      <div className="m-auto max-w-md  items-center rounded-xl bg-zinc-300/10 p-4 text-center">
        <h4 className="m-auto mb-3 w-fit rounded-full border-2 border-zinc-600/50 px-3 text-xl font-medium text-zinc-800   underline decoration-1 underline-offset-4 dark:text-white/60">
          Business and Marketing Skills
        </h4>
        <ul className="mt-2 flex flex-wrap justify-center gap-2 text-sm  text-zinc-800">
          {businessSkillsData.map((skill, index) => (
            <li
              className="rounded-xl border-zinc-400/50 bg-gray-400/40 px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:hover:text-yellow-200 dark:hover:underline dark:hover:underline-offset-8"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <ActivityIcon className="my-3 h-6 w-6 -rotate-[10deg] text-4xl font-semibold text-zinc-600/50  dark:text-white/60" />
      <div className="m-auto max-w-md  items-center rounded-xl bg-zinc-300/10 p-4 text-center">
        <h4 className="m-auto mb-3 w-fit rounded-full border-2 border-zinc-600/50 px-3 text-xl font-medium text-zinc-800   dark:text-white/60">
          Personal Qualities
        </h4>
        <ul className="mt-2 flex flex-wrap justify-center gap-2 text-sm capitalize  text-zinc-800">
          {personalSkillsData.map((skill, index) => (
            <li
              className="rounded-xl border-zinc-400/50 bg-gray-400/40 px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:hover:text-yellow-200 dark:hover:underline dark:hover:underline-offset-8"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
```

### @/.../[section] - with tiny gallery

```tsx
const Projects = () => {
  return (
    <section
      className="mt-12 flex  flex-col items-center sm:scroll-mt-[4.7rem]"
      id="projects"
    >
      <Clapperboard className="h-12 w-12 text-zinc-600/50" />
      <SectionHeader>Projects</SectionHeader>
      <div>
        <ul>
          <li>10strata, with PapyInChat</li>
          <li>We Style Stuff</li>
          <li>Luiard Press</li>
        </ul>
      </div>
    </section>
  );
};
```

### @/.../[section] - with form

```tsx
const Contact = () => {
  return (
    <section
      className="mt-12 flex  flex-col items-center sm:scroll-mt-[4.7rem]"
      id="contact"
    >
      <HeartPulse className="h-12 w-12 text-zinc-600/50" />
      <SectionHeader>Contact</SectionHeader>
      <p>FIXME up with a form please</p>
    </section>
  );
};
```

### @/.../[section] - footer

```tsx
const Footer = () => {
  return (
    <footer className="mb-10 w-full px-4 text-gray-500">
      <div className="border-1 w-screen border border-zinc-500 sm:w-[36rem]">
        <small className="mb-2 block text-xs">
          &copy; {lightFormat(new Date(), "yyyy")} {metadata.creator}. All
          rights reserved.
        </small>
        <p className="text-xs">
          {/** Add this to metadata in layout and use metadata object to pull in code. Do same with date*/}
          built with TailwindCSS, Next.js (App Router and Server Actions), TypeScript,
          Vercel hosting
        </p>
      </div>
      {/** FIX formatting here */}

      <div className="relative">
        <ActivityIcon className="absolute -top-1 right-1/2 translate-x-1/2 -rotate-[10deg] text-4xl font-semibold text-zinc-600/70 " />
        <ul className="w-0.8 mt-3 flex items-center justify-between gap-4 rounded-3xl border border-teal-800/50 bg-teal-300/40 p-4 text-zinc-600/70 shadow-lg shadow-black/[0.1] backdrop-blur-[0.5rem]">
          <li className=" font-semibold hover:text-zinc-800">
            <a href="https://instagram.com/cliffrcNL">
              <Instagram />
            </a>
          </li>
          <li className=" font-semibold hover:text-zinc-800">
            <a href="https://youtube.com/10strata">
              <Youtube />
            </a>
          </li>
          <li className=" font-semibold hover:text-zinc-800">
            <a href="https://twitter.com/10strata">
              <Twitter />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
```

### @/public: Project Image EXAMPLE

![Project Image](https://raw.githubusercontent.com/joschan21/quill/master/public/thumbnail.png)

### @/app/layout.tsx Metadata

New metadata

```tsx
export const metadata = {
  title: {
    template: "%s | cliff",
    default: "Cliff", // a default is required when creating a template
  },
  description:
    "A founder + software engineer intern at 10strata who loves learning the marketing ropes",
  keywords: ["Next.js", "React", "Tailwindcss", "web development"],
  generator: "Next.js",
  applicationName: "cliffrc.nl",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Cliff", url: "https://cliffrc.nl" }],
  creator: "Cliff Cunnington",
  publisher: "Cliff Cunnington Enterprise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
```

```ts
// Opengraph layout
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
```

### Clippath = @/app/page.tsx

```css
polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)

```

### @/app/page.tsx: Background Image

```css
.grainy {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vz08vT09vT8+vzs7uxH16TeAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAuFJREFUOI0Vk+3NLiEIRG1B8ClAYAsQ2AIEt4D9ePtv5Xp/mZgYJ2fOFJKEfInkVWY2aglmQFkimRTV7MblYyVqD7HXyhKsSuPX12MeDhRHLtGvRG+P+B/S0Vu4OswR9tmvwNPyhdCDbVayJGads/WiUWcjCvCnruTBNHS9gmX2VzVbk7ZvB1gb1hkWFGl+A/n+/FowcO34U/XvKqZ/fHY+6vgRfU92XrOBUbGeeDfQmjWjdrK+frc6FdGReQhfSF5JvR29O2QrfNw1huTwlgsyXLo0u+5So82sgv7tsFZR2nxB6lXiquHrfD8nfYZ9SeT0LiuvSoVrxGY16pCNRZKqvwWsn5OHypPBELzohMCaRaa0ceTHYqe7X/gfJEEtKFbJpWoNqO+aS1cuTykGPpK5Ga48m6L3NefTr013KqYBQu929iP1oQ/7UwSR+i3zqruUmT84qmhzLpxyj7pr9kg7LKvqaXxZmdpn+6o8sHqSqojy02gU3U8q9PnpidiaLks0mbMYz+q2uVXsoBQ8bfURULYxRgZVYCHMv9F4OA7qxT2NPPpvGQ/sTDH2yznKh7E2AcErfcNsaIoN1izzbJiaY63x4QjUFdBSvDCvugPpu5xDny0jzEeuUQbcP1aGT9V90uixngTRLYNEIIZ6yOF1H8tm7rj2JxiefsVy53zGVy3ag5uuPsdufYOzYxLRxngKe7nhx3VAq54pmz/DK9/Q3aDam2Yt3hNXB4HuU87jKNd/CKZn77Qdn5QkXPfqSkhk7hGOXXB+7v09KbBbqdvxGqa0AqfK/atIrL2WXdAgXAJ43Wtwe/aIoacXezeGPMlhDOHDbSfHnaXsL2QzbT82GRwZuezdwcoWzx5pnOnGMUdHuiY7lhdyWzWiHnucLZQxYStMJbtcydHaQ6vtMbe0AcDbxG+QG14AL94xry4297xpy9Cpf1OoxZ740gHDfrK+gtsy0xabwJmfgtCeii79B6aj0SJeLbd7AAAAAElFTkSuQmCC);
}
```

### src/lib/data.ts

```ts
export const navLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
```

### src/db/index.ts: Prisma Instantiation

```ts
import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
```

### PdfRenderer Imports - src/components/PdfRenderer.tsx

```tsx
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
```

### Scrollbar CSS - src/app/globals.css

```css
.scrollbar-w-2::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 0.5;
  background-color: #00000015;
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 0.5;
  background-color: #13131374;
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 7px;
}
```

### Pinecone Client Instantiation - src/lib/pinecone.ts

```ts
import { PineconeClient } from "@pinecone-database/pinecone";

export const getPineconeClient = async () => {
  const client = new PineconeClient();

  await client.init({
    apiKey: process.env.PINECONE_API_KEY!,
    environment: "us-east1-gcp",
  });

  return client;
};
```

### OpenAI Messages - src/app/api/message/route.ts

```ts

messages: [
      {
        role: 'system',
        content:
          'Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format.',
      },
      {
        role: 'user',
        content: `Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format. \nIf you don't know the answer, just say that you don't know, don't try to make up an answer.

  \n----------------\n

  PREVIOUS CONVERSATION:
  ${formattedPrevMessages.map((message) => {
    if (message.role === 'user') return `User: ${message.content}\n`
    return `Assistant: ${message.content}\n`
  })}

  \n----------------\n

  CONTEXT:
  ${results.map((r) => r.pageContent).join('\n\n')}

  USER INPUT: ${message}`,
      },
    ],

```

### Logo Icon - src/components/Icons.tsx

```tsx
<svg {...props} viewBox="0 0 24 24">
  <path d="m6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zm10.06-5.035 1 .999c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5h-1.998c1-6 3-20 18-20-1 2.997-1.998 4.996-2.997 5.997z" />
</svg>
```

### Pricing Options - src/app/pricing/page.tsx

```ts
const pricingItems = [
  {
    plan: "Free",
    tagline: "For small side projects.",
    quota: 10,
    features: [
      {
        text: "5 pages per PDF",
        footnote: "The maximum amount of pages per PDF-file.",
      },
      {
        text: "4MB file size limit",
        footnote: "The maximum file size of a single PDF file.",
      },
      {
        text: "Mobile-friendly interface",
      },
      {
        text: "Higher-quality responses",
        footnote: "Better algorithmic responses for enhanced content quality",
        negative: true,
      },
      {
        text: "Priority support",
        negative: true,
      },
    ],
  },
  {
    plan: "Pro",
    tagline: "For larger projects with higher needs.",
    quota: PLANS.find((p) => p.slug === "pro")!.quota,
    features: [
      {
        text: "25 pages per PDF",
        footnote: "The maximum amount of pages per PDF-file.",
      },
      {
        text: "16MB file size limit",
        footnote: "The maximum file size of a single PDF file.",
      },
      {
        text: "Mobile-friendly interface",
      },
      {
        text: "Higher-quality responses",
        footnote: "Better algorithmic responses for enhanced content quality",
      },
      {
        text: "Priority support",
      },
    ],
  },
];
```

### Receiving Current Stripe Subscription Plan - src/lib/stripe.ts

```ts
import { PLANS } from "@/config/stripe";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2023-08-16",
  typescript: true,
});

export async function getUserSubscriptionPlan() {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user.id) {
    return {
      ...PLANS[0],
      isSubscribed: false,
      isCanceled: false,
      stripeCurrentPeriodEnd: null,
    };
  }

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    return {
      ...PLANS[0],
      isSubscribed: false,
      isCanceled: false,
      stripeCurrentPeriodEnd: null,
    };
  }

  const isSubscribed = Boolean(
    dbUser.stripePriceId &&
      dbUser.stripeCurrentPeriodEnd && // 86400000 = 1 day
      dbUser.stripeCurrentPeriodEnd.getTime() + 86_400_000 > Date.now(),
  );

  const plan = isSubscribed
    ? PLANS.find((plan) => plan.price.priceIds.test === dbUser.stripePriceId)
    : null;

  let isCanceled = false;
  if (isSubscribed && dbUser.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      dbUser.stripeSubscriptionId,
    );
    isCanceled = stripePlan.cancel_at_period_end;
  }

  return {
    ...plan,
    stripeSubscriptionId: dbUser.stripeSubscriptionId,
    stripeCurrentPeriodEnd: dbUser.stripeCurrentPeriodEnd,
    stripeCustomerId: dbUser.stripeCustomerId,
    isSubscribed,
    isCanceled,
  };
}
```

### Stripe Webhook Boilerplate - src/app/api/webhooks/stripe/route.ts

```ts
import { db } from "@/db";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import type Stripe from "stripe";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get("Stripe-Signature") ?? "";

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || "",
    );
  } catch (err) {
    return new Response(
      `Webhook Error: ${err instanceof Error ? err.message : "Unknown Error"}`,
      { status: 400 },
    );
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (!session?.metadata?.userId) {
    return new Response(null, {
      status: 200,
    });
  }

  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string,
    );
  }

  if (event.type === "invoice.payment_succeeded") {
    // Retrieve the subscription details from Stripe.
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string,
    );
  }

  return new Response(null, { status: 200 });
}
```
