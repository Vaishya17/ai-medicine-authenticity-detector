"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Search, Package, ArrowLeft } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const medicineDatabase = [
  {
    id: "med-001",
    name: "Paracetamol 500mg",
    manufacturer: "PharmaCorp Ltd.",
    batchNumber: "PCM-2024-001",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
    features: {
      color: "White",
      shape: "Round tablet",
      size: "10mm diameter",
      text: "P500 embossed on one side",
      qrCode: "Present on strip",
      packaging: "Silver blister pack, 10 tablets"
    },
    certifications: ["FDA Approved", "WHO Certified", "GMP Compliant"]
  },
  {
    id: "med-002",
    name: "Ibuprofen 400mg",
    manufacturer: "HealthMed Inc.",
    batchNumber: "IBU-2024-045",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop",
    features: {
      color: "Orange-red",
      shape: "Oval tablet",
      size: "15mm x 8mm",
      text: "IBU400 on one side",
      qrCode: "Present on packaging",
      packaging: "Red/white blister, 15 tablets"
    },
    certifications: ["FDA Approved", "EU CE Mark", "ISO Certified"]
  },
  {
    id: "med-003",
    name: "Amoxicillin 250mg",
    manufacturer: "BioPharm Solutions",
    batchNumber: "AMX-2024-122",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
    features: {
      color: "Pink/White capsule",
      shape: "Capsule",
      size: "20mm length",
      text: "AMX250 printed",
      qrCode: "QR on bottle label",
      packaging: "Sealed bottle, 21 capsules"
    },
    certifications: ["FDA Approved", "WHO Prequalified", "GMP Compliant"]
  },
  {
    id: "med-004",
    name: "Aspirin 100mg",
    manufacturer: "CardioHealth Pharma",
    batchNumber: "ASP-2024-089",
    image: "https://images.unsplash.com/photo-1550572017-4ec3c6e2f2f7?w=400&h=300&fit=crop",
    features: {
      color: "White",
      shape: "Round, thin tablet",
      size: "8mm diameter",
      text: "ASP100 and logo",
      qrCode: "On packaging",
      packaging: "White blister, 30 tablets"
    },
    certifications: ["FDA Approved", "USP Verified", "ISO 9001"]
  },
  {
    id: "med-005",
    name: "Omeprazole 20mg",
    manufacturer: "GastroMed Corp.",
    batchNumber: "OMP-2024-156",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop",
    features: {
      color: "Pink/Purple capsule",
      shape: "Delayed-release capsule",
      size: "18mm length",
      text: "OM20 on capsule",
      qrCode: "On box and strip",
      packaging: "Purple blister, 14 capsules"
    },
    certifications: ["FDA Approved", "EMA Approved", "GMP Certified"]
  },
  {
    id: "med-006",
    name: "Metformin 500mg",
    manufacturer: "DiabetesCare Pharma",
    batchNumber: "MET-2024-203",
    image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&h=300&fit=crop",
    features: {
      color: "White",
      shape: "Oval tablet",
      size: "15mm x 7mm",
      text: "MET500 embossed",
      qrCode: "Present on packaging",
      packaging: "White blister, 60 tablets"
    },
    certifications: ["FDA Approved", "WHO Listed", "ISO 13485"]
  }
]

export default function DatabasePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMedicines = medicineDatabase.filter(med =>
    med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    med.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    med.batchNumber.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-2">
              <Package className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">Medicine Database</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Title and Search */}
        <div className="mb-8 space-y-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Verified Medicine Database</h1>
            <p className="text-muted-foreground text-lg">
              Reference database of authenticated medicines with detailed characteristics
            </p>
          </div>

          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by medicine name, manufacturer, or batch number..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Database Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicines.map((medicine) => (
            <Card key={medicine.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-green-500 text-white">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{medicine.name}</CardTitle>
                <CardDescription>
                  <div className="space-y-1">
                    <p className="font-medium">{medicine.manufacturer}</p>
                    <p className="text-xs">Batch: {medicine.batchNumber}</p>
                  </div>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Visual Features:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-muted-foreground">Color:</span>
                      <p className="font-medium">{medicine.features.color}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Shape:</span>
                      <p className="font-medium">{medicine.features.shape}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Size:</span>
                      <p className="font-medium">{medicine.features.size}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Text:</span>
                      <p className="font-medium">{medicine.features.text}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">QR Code:</span>
                      <p className="font-medium">{medicine.features.qrCode}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">Packaging:</span>
                      <p className="font-medium">{medicine.features.packaging}</p>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Certifications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {medicine.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMedicines.length === 0 && (
          <Card className="py-12">
            <CardContent>
              <div className="text-center text-muted-foreground">
                <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No medicines found matching your search.</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Info Footer */}
        <Card className="mt-12 border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex gap-4 items-start">
              <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-semibold">About This Database</h3>
                <p className="text-sm text-muted-foreground">
                  This database contains verified reference images and characteristics of authentic medicines. 
                  Our AI system uses this data to compare uploaded images and detect potential counterfeits. 
                  All medicines listed here have been verified by pharmaceutical regulatory authorities.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This is a demonstration database. In a production system, this would 
                  connect to official pharmaceutical registries and regulatory databases.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
