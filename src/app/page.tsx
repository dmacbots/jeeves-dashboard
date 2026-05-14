import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Bell, BookOpen, Calendar, ChevronRight, Clock, Globe, Mail, Newspaper, Settings, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src="/avatar.jpg" alt="Jeeves" />
              <AvatarFallback>JV</AvatarFallback>
            </Avatar>
            <span className="font-bold text-xl">Jeeves Dashboard</span>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#" className="transition-colors hover:text-foreground/80 text-foreground">
              Home
            </a>
            <a href="#" className="transition-colors hover:text-foreground/80 text-muted-foreground">
              News
            </a>
            <a href="#" className="transition-colors hover:text-foreground/80 text-muted-foreground">
              Learnings
            </a>
            <a href="#" className="transition-colors hover:text-foreground/80 text-muted-foreground">
              Settings
            </a>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Welcome to your personal dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your daily hub for news, learnings, and insights. Stay informed and keep learning.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Today's News */}
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Newspaper className="h-5 w-5" />
                    Today's News
                  </CardTitle>
                  <CardDescription>Your daily curated news digest</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex-shrink-0">
                        <Globe className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>Today</span>
                          <Clock className="h-3 w-3 ml-auto" />
                          <span>{9 + item}:00 AM</span>
                        </div>
                        <h3 className="font-semibold leading-tight">Breaking News Headline #{item} - Stay Updated with the Latest Developments</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          This is a preview of the news article. Click to read more about this important story and get all the details you need to stay informed.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Load More News
              </Button>
            </CardFooter>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Articles Read</span>
                  <span className="text-sm font-bold">42</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4 rounded-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Learning Hours</span>
                  <span className="text-sm font-bold">12.5</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/2 rounded-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Notes Taken</span>
                  <span className="text-sm font-bold">156</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-2/3 rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Daily Learnings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Daily Learnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="p-3 rounded-lg border bg-card">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Learning #{item}</span>
                      </div>
                      <h4 className="font-medium text-sm mb-1">Key Insight Title #{item}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        A brief summary of what was learned today. This helps track progress and retention.
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View All Learnings
              </Button>
            </CardFooter>
          </Card>

          {/* Newsletter Subscription */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Newsletter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to receive daily updates and curated content directly to your inbox.
              </p>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <Button className="w-full">Subscribe</Button>
              </div>
            </CardContent>
          </Card>

          {/* Activity Feed */}
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Activity Feed</CardTitle>
              <CardDescription>Your recent activity and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {item}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium leading-none">
                            Activity update #{item}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {item}h ago
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Something interesting happened here. This is part of your activity feed showing recent actions and updates.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © 2024 Jeeves Dashboard. Built with Next.js and shadcn/ui.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}