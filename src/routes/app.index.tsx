import { createFileRoute } from '@tanstack/react-router'
import { ActivityIcon, ZapIcon } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const Route = createFileRoute('/app/')({ component: AppIndex })

function AppIndex() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-muted-foreground">
          Here’s what’s happening in your app.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <ZapIcon className="size-8 text-primary" />
            <CardTitle>Quick actions</CardTitle>
            <CardDescription>
              Shortcuts and common tasks. Configure in settings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No actions configured yet. Add your first shortcut to get started.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <ActivityIcon className="size-8 text-primary" />
            <CardTitle>Recent activity</CardTitle>
            <CardDescription>Your latest updates and events.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Activity will appear here as you use the app.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
