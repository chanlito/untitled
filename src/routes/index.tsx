import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRightIcon,
  LayersIcon,
  QuoteIcon,
  ShieldIcon,
  ZapIcon,
} from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-linear-to-b from-muted/40 to-background px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4">
            New
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Build something that ships
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A modern stack that stays out of your way. Fast, simple, and ready
            for your next idea.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/app" className={buttonVariants({ size: 'lg' })}>
              Get started
            </Link>
            <Link
              to="/admin"
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
            >
              Admin
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Why this stack
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            Everything you need, nothing you don’t.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <ZapIcon className="size-8 text-primary" />
                <CardTitle>Fast</CardTitle>
                <CardDescription>
                  Vite and React 19. Instant HMR and lean bundles so you iterate
                  without waiting.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <ShieldIcon className="size-8 text-primary" />
                <CardTitle>Simple</CardTitle>
                <CardDescription>
                  File-based routing and clear conventions. Less config, more
                  building.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <LayersIcon className="size-8 text-primary" />
                <CardTitle>Flexible</CardTitle>
                <CardDescription>
                  Full-stack when you need it. Add server functions and API
                  routes as you grow.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <QuoteIcon className="size-8 text-primary" />
                <CardTitle>Type-safe</CardTitle>
                <CardDescription>
                  End-to-end TypeScript. Routes, params, and data loading with
                  full inference.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y bg-muted/30 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge variant="outline">Trusted by teams</Badge>
            <Badge variant="outline">Used in production</Badge>
            <Badge variant="outline">Open source</Badge>
          </div>
          <Card className="mt-8">
            <CardContent className="pt-6">
              <p className="text-center italic text-muted-foreground">
                “We cut our build time in half and finally have types that
                actually match the URL. Game changer.”
              </p>
              <p className="mt-2 text-center text-sm font-medium">
                — Dev team, Acme Inc.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="flex-1 px-6 py-20">
        <Separator className="mx-auto mb-12 max-w-2xl" />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ready to try it?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Jump into the app or open the admin area.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link to="/app" className={buttonVariants()}>
              Open app
              <ArrowRightIcon className="ml-2 size-4" />
            </Link>
            <Link to="/admin" className={buttonVariants({ variant: 'ghost' })}>
              Admin
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
