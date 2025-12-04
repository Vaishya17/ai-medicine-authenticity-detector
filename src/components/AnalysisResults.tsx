"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, XCircle, AlertTriangle, Shield, Eye, Palette, Type, QrCode, Package } from "lucide-react"
import { cn } from "@/lib/utils"

export interface AnalysisResult {
  authentic: boolean
  confidence: number
  features: {
    color: { match: boolean; score: number; details: string }
    shape: { match: boolean; score: number; details: string }
    size: { match: boolean; score: number; details: string }
    text: { match: boolean; score: number; details: string }
    qrCode: { match: boolean; score: number; details: string }
    packaging: { match: boolean; score: number; details: string }
  }
  discrepancies: Array<{
    type: string
    severity: "high" | "medium" | "low"
    description: string
    location?: { x: number; y: number; width: number; height: number }
  }>
  recommendations: string[]
  matchedMedicine?: {
    name: string
    manufacturer: string
    batchNumber: string
  }
}

interface AnalysisResultsProps {
  result: AnalysisResult
  imageUrl: string
  className?: string
}

export default function AnalysisResults({ result, imageUrl, className }: AnalysisResultsProps) {
  const getStatusColor = () => {
    if (result.authentic && result.confidence > 80) return "text-green-600 dark:text-green-400"
    if (result.confidence > 50) return "text-yellow-600 dark:text-yellow-400"
    return "text-red-600 dark:text-red-400"
  }

  const getStatusIcon = () => {
    if (result.authentic && result.confidence > 80) return <CheckCircle2 className="h-12 w-12" />
    if (result.confidence > 50) return <AlertTriangle className="h-12 w-12" />
    return <XCircle className="h-12 w-12" />
  }

  const getStatusText = () => {
    if (result.authentic && result.confidence > 80) return "Likely Authentic"
    if (result.confidence > 50) return "Suspicious - Further Verification Needed"
    return "Likely Counterfeit"
  }

  const featureIcons = {
    color: Palette,
    shape: Eye,
    size: Package,
    text: Type,
    qrCode: QrCode,
    packaging: Package,
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Status Card */}
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={cn("rounded-full p-3 bg-opacity-10", getStatusColor())}>
                {getStatusIcon()}
              </div>
              <div>
                <CardTitle className="text-2xl">{getStatusText()}</CardTitle>
                <CardDescription>Confidence Score: {result.confidence}%</CardDescription>
              </div>
            </div>
            <Badge
              variant={result.authentic && result.confidence > 80 ? "default" : "destructive"}
              className="text-lg px-4 py-2"
            >
              {result.confidence}%
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={result.confidence} className="h-3" />
        </CardContent>
      </Card>

      {/* Image with Discrepancies */}
      {result.discrepancies.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Detected Discrepancies
            </CardTitle>
            <CardDescription>
              {result.discrepancies.length} potential issue(s) found
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <img src={imageUrl} alt="Analysis" className="w-full rounded-lg" />
              {result.discrepancies.map((discrepancy, index) =>
                discrepancy.location ? (
                  <div
                    key={index}
                    className={cn(
                      "absolute border-4 rounded",
                      discrepancy.severity === "high" && "border-red-500",
                      discrepancy.severity === "medium" && "border-yellow-500",
                      discrepancy.severity === "low" && "border-orange-500"
                    )}
                    style={{
                      left: `${discrepancy.location.x}%`,
                      top: `${discrepancy.location.y}%`,
                      width: `${discrepancy.location.width}%`,
                      height: `${discrepancy.location.height}%`,
                    }}
                  >
                    <div className="absolute -top-6 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {discrepancy.type}
                    </div>
                  </div>
                ) : null
              )}
            </div>
            <div className="mt-4 space-y-2">
              {result.discrepancies.map((discrepancy, index) => (
                <Alert key={index} variant={discrepancy.severity === "high" ? "destructive" : "default"}>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle className="capitalize">{discrepancy.type} - {discrepancy.severity} Severity</AlertTitle>
                  <AlertDescription>{discrepancy.description}</AlertDescription>
                </Alert>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Feature Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Feature Analysis
          </CardTitle>
          <CardDescription>Detailed comparison with authentic samples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(result.features).map(([key, feature]) => {
            const Icon = featureIcons[key as keyof typeof featureIcons]
            return (
              <div key={key} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span className="font-medium capitalize">{key}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{feature.score}%</span>
                    {feature.match ? (
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                </div>
                <Progress value={feature.score} className="h-2" />
                <p className="text-sm text-muted-foreground">{feature.details}</p>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Matched Medicine Info */}
      {result.matchedMedicine && (
        <Card>
          <CardHeader>
            <CardTitle>Matched Reference Medicine</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-sm text-muted-foreground">Name:</span>
                <p className="font-medium">{result.matchedMedicine.name}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Manufacturer:</span>
                <p className="font-medium">{result.matchedMedicine.manufacturer}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Batch Number:</span>
                <p className="font-medium">{result.matchedMedicine.batchNumber}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Safety Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {result.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="text-sm">{rec}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
