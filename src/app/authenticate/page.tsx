"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ImageUploader from "@/components/ImageUploader"
import AnalysisResults, { AnalysisResult } from "@/components/AnalysisResults"
import { analyzeMedicineImage } from "@/lib/medicineAnalysis"
import { ArrowLeft, Loader2, Shield } from "lucide-react"
import Link from "next/link"

export default function AuthenticatePage() {
  const [selectedImage, setSelectedImage] = useState<{ file: File; preview: string } | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)

  const handleImageSelected = (file: File, preview: string) => {
    setSelectedImage({ file, preview })
    setResult(null)
  }

  const handleAnalyze = async () => {
    if (!selectedImage) return

    setAnalyzing(true)
    try {
      const analysisResult = await analyzeMedicineImage(
        selectedImage.file,
        selectedImage.preview
      )
      setResult(analysisResult)
    } catch (error) {
      console.error("Analysis error:", error)
      alert("Failed to analyze image. Please try again.")
    } finally {
      setAnalyzing(false)
    }
  }

  const handleReset = () => {
    setSelectedImage(null)
    setResult(null)
    setAnalyzing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">MediVerify</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {!result ? (
          <div className="space-y-8">
            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Authenticate Medicine</CardTitle>
                <CardDescription className="text-base">
                  Upload a clear image of your medicine strip, tablet, or packaging to verify its authenticity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
                  <h3 className="font-semibold text-sm mb-2">📸 Tips for best results:</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Ensure good lighting - avoid shadows and glare</li>
                    <li>• Capture the entire medicine strip or tablet clearly</li>
                    <li>• Include any text, QR codes, or batch numbers visible</li>
                    <li>• Hold the camera steady and avoid blurry images</li>
                    <li>• Capture packaging details if available</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Upload Section */}
            <Card>
              <CardContent className="pt-6">
                <ImageUploader onImageSelected={handleImageSelected} />
              </CardContent>
            </Card>

            {/* Analyze Button */}
            {selectedImage && !analyzing && (
              <div className="flex justify-center">
                <Button size="lg" onClick={handleAnalyze} className="w-full sm:w-auto">
                  <Shield className="mr-2 h-5 w-5" />
                  Analyze Medicine
                </Button>
              </div>
            )}

            {/* Loading State */}
            {analyzing && (
              <Card>
                <CardContent className="py-12">
                  <div className="flex flex-col items-center justify-center gap-4">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-2">Analyzing Medicine...</h3>
                      <p className="text-sm text-muted-foreground">
                        Our AI is examining color, shape, text, QR codes, and packaging quality
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Analysis Results</h2>
              <Button onClick={handleReset} variant="outline">
                Analyze Another Medicine
              </Button>
            </div>
            <AnalysisResults result={result} imageUrl={selectedImage!.preview} />
          </div>
        )}
      </main>
    </div>
  )
}
