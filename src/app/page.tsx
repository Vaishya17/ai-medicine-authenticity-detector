"use client"

import Link from "next/link";
import { Shield, Upload, Database, CheckCircle, AlertTriangle, Eye, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold">MediVerify</h1>
            </div>
            <nav className="flex items-center gap-4">
              <Link href="/database">
                <Button variant="ghost" size="sm">
                  <Database className="h-4 w-4 mr-2" />
                  Database
                </Button>
              </Link>
              <Link href="/authenticate">
                <Button size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Verify Now
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <Badge variant="secondary" className="mb-4">
            AI-Powered Medicine Authentication
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Detect Counterfeit <br />
            <span className="text-primary">Medicines Instantly</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced image analysis powered by deep learning to identify fake medicines
            and protect your health from dangerous counterfeits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/authenticate">
              <Button size="lg" className="w-full sm:w-auto">
                <Upload className="mr-2 h-5 w-5" />
                Upload & Verify Medicine
              </Button>
            </Link>
            <Link href="/database">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Database className="mr-2 h-5 w-5" />
                View Medicine Database
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto rounded-full bg-green-100 dark:bg-green-900/20 w-12 h-12 flex items-center justify-center mb-2">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-3xl">95%+</CardTitle>
              <CardDescription>Accuracy Rate</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto rounded-full bg-blue-100 dark:bg-blue-900/20 w-12 h-12 flex items-center justify-center mb-2">
                <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-3xl">6</CardTitle>
              <CardDescription>Features Analyzed</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto rounded-full bg-purple-100 dark:bg-purple-900/20 w-12 h-12 flex items-center justify-center mb-2">
                <Smartphone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-3xl">Instant</CardTitle>
              <CardDescription>Analysis Results</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* How It Works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our AI-powered system uses advanced computer vision to detect counterfeit medicines in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>1. Upload Image</CardTitle>
                <CardDescription>
                  Take a clear photo of your medicine strip, tablet, or packaging. You can upload from your device or use your camera directly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>2. AI Analysis</CardTitle>
                <CardDescription>
                  Our deep learning model analyzes color, shape, size, text quality, QR codes, and packaging against verified authentic samples.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>3. Get Results</CardTitle>
                <CardDescription>
                  Receive instant authenticity status with confidence score, highlighted discrepancies, and detailed safety recommendations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Features Analyzed */}
        <section className="mb-16">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-purple-50/50 dark:from-primary/10 dark:to-purple-900/10">
            <CardHeader>
              <CardTitle className="text-2xl">Features We Analyze</CardTitle>
              <CardDescription>
                Our CNN-based model examines multiple visual characteristics to detect counterfeits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded bg-primary/10 p-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Color Profile</h4>
                    <p className="text-sm text-muted-foreground">Detects color deviations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded bg-primary/10 p-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Shape & Size</h4>
                    <p className="text-sm text-muted-foreground">Measures dimensions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded bg-primary/10 p-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Text Quality</h4>
                    <p className="text-sm text-muted-foreground">Analyzes embossing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded bg-primary/10 p-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">QR Codes</h4>
                    <p className="text-sm text-muted-foreground">Verifies authenticity</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded bg-primary/10 p-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Packaging</h4>
                    <p className="text-sm text-muted-foreground">Checks print quality</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded bg-primary/10 p-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Batch Numbers</h4>
                    <p className="text-sm text-muted-foreground">Validates records</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Warning Section */}
        <section className="mb-16">
          <Card className="border-orange-200 dark:border-orange-900 bg-orange-50/50 dark:bg-orange-950/20">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-orange-100 dark:bg-orange-900/30 p-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <CardTitle className="text-xl">Why Medicine Authentication Matters</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Counterfeit medicines are a global crisis affecting millions:
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>10% of medicines in developing countries are estimated to be counterfeit</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Fake medicines can contain wrong ingredients, incorrect dosages, or dangerous substances</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Patients may not respond to treatment or experience severe adverse effects</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Antimicrobial resistance can develop when fake antibiotics contain substandard ingredients</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="py-12 text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Protect Yourself and Your Family</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't take chances with your health. Verify your medicines in seconds with our AI-powered detection system.
              </p>
              <Link href="/authenticate">
                <Button size="lg" className="text-lg px-8">
                  <Upload className="mr-2 h-5 w-5" />
                  Verify Medicine Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold">MediVerify</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              AI-powered counterfeit medicine detection system. For demonstration purposes.
            </p>
            <div className="flex gap-4">
              <Link href="/authenticate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Verify
              </Link>
              <Link href="/database" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Database
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}