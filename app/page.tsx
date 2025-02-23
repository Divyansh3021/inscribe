"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Code2, FileCode2, Github, Terminal } from "lucide-react";
import ScreenshotsSection from '@/components/ui/ScreenshotsSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(167,98%,50%)] to-[hsl(262,83%,58%)]">
              Inscribe
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your code documentation workflow with AI-powered automation.
              Generate comprehensive documentation in seconds.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2 glow-effect bg-primary hover:bg-primary/90">
                <FileCode2 className="w-5 h-5" />
                Install Extension
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary/20 hover:bg-primary/10">
                <Github className="w-5 h-5" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(167,98%,50%)] to-[hsl(262,83%,58%)]">
            Powerful Documentation Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-primary/20 bg-secondary/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Terminal className="w-5 h-5" />
                  Smart Generation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI-powered documentation generation that understands your code
                  context and creates meaningful documentation automatically.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-primary/20 bg-secondary/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <BookOpen className="w-5 h-5" />
                  Multiple Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose from various documentation templates including API docs,
                  README files, and system architecture documentation.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-primary/20 bg-secondary/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Code2 className="w-5 h-5" />
                  GitHub Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seamless GitHub integration for version control of your
                  documentation with automatic syncing and commit messages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(167,98%,50%)] to-[hsl(262,83%,58%)]">
            Documentation Types
          </h2>
          <Tabs defaultValue="standard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-secondary/50">
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
              <TabsTrigger value="readme">README</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
            </TabsList>
            <TabsContent value="standard" className="mt-6">
              <Card className="border border-primary/20 bg-secondary/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-primary">Standard Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Basic file-level documentation</li>
                    <li>Summary and purpose</li>
                    <li>Key components and dependencies</li>
                    <li>Code highlights and usage examples</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="api" className="mt-6">
              <Card className="border border-primary/20 bg-secondary/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-primary">API Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Endpoint documentation</li>
                    <li>Authentication details</li>
                    <li>Request/response formats</li>
                    <li>Error handling</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="readme" className="mt-6">
              <Card className="border border-primary/20 bg-secondary/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-primary">README Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Project overview</li>
                    <li>Installation instructions</li>
                    <li>Usage examples</li>
                    <li>Contributing guidelines</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="architecture" className="mt-6">
              <Card className="border border-primary/20 bg-secondary/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-primary">System Architecture Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>System overview and scope</li>
                    <li>Component diagrams</li>
                    <li>Data flow</li>
                    <li>Infrastructure details</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ScreenshotsSection />

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to transform your documentation workflow?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Install Inscribe today and experience the power of AI-driven
            documentation generation.
          </p>
          <Button size="lg" className="gap-2 glow-effect bg-primary hover:bg-primary/90">
            <FileCode2 className="w-5 h-5" />
            Get Started with Inscribe
          </Button>
        </div>
      </section>
    </main>
  );
}