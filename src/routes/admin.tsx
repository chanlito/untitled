import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/admin')({ component: AdminLayout })

function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b bg-muted/50">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Admin</span>
            <Badge variant="secondary" className="text-xs">
              Admin
            </Badge>
          </div>
          <nav className="flex items-center gap-2">
            <Link
              to="/admin"
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              Dashboard
            </Link>
            <Link
              to="/app"
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              App
            </Link>
            <Link
              to="/"
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              Landing
            </Link>
          </nav>
        </div>
        <Separator />
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6">
        <Outlet />
      </main>
    </div>
  )
}
