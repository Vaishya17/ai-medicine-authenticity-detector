import { AnalysisResult } from "@/components/AnalysisResults"

// Simulated medicine database
const medicineDatabase = [
  {
    id: "med-001",
    name: "Paracetamol 500mg",
    manufacturer: "PharmaCorp Ltd.",
    batchNumber: "PCM-2024-001",
    features: {
      color: "white",
      shape: "round",
      size: "standard",
      textPresent: true,
      qrCodePresent: true,
      packagingQuality: "high"
    }
  },
  {
    id: "med-002",
    name: "Ibuprofen 400mg",
    manufacturer: "HealthMed Inc.",
    batchNumber: "IBU-2024-045",
    features: {
      color: "orange",
      shape: "oval",
      size: "medium",
      textPresent: true,
      qrCodePresent: true,
      packagingQuality: "high"
    }
  },
  {
    id: "med-003",
    name: "Amoxicillin 250mg",
    manufacturer: "BioPharm Solutions",
    batchNumber: "AMX-2024-122",
    features: {
      color: "pink",
      shape: "capsule",
      size: "large",
      textPresent: true,
      qrCodePresent: true,
      packagingQuality: "high"
    }
  }
]

export async function analyzeMedicineImage(
  imageFile: File,
  imagePreview: string
): Promise<AnalysisResult> {
  // Simulate AI analysis with a delay
  await new Promise(resolve => setTimeout(resolve, 3000))

  // Simulate random analysis results with realistic variations
  const randomConfidence = Math.floor(Math.random() * 40) + 60 // 60-100
  const isAuthentic = randomConfidence > 75
  
  // Randomly select a matched medicine from database
  const matchedMedicine = medicineDatabase[Math.floor(Math.random() * medicineDatabase.length)]

  // Generate feature analysis with some variation
  const features = {
    color: {
      match: Math.random() > 0.3,
      score: Math.floor(Math.random() * 30) + 70,
      details: Math.random() > 0.3 
        ? "Color profile matches authentic sample within acceptable variance"
        : "Slight color deviation detected. May indicate different dye batch or counterfeit."
    },
    shape: {
      match: Math.random() > 0.25,
      score: Math.floor(Math.random() * 25) + 75,
      details: Math.random() > 0.25
        ? "Tablet shape and dimensions match reference specifications"
        : "Shape irregularities detected. Edges appear less uniform than authentic samples."
    },
    size: {
      match: Math.random() > 0.2,
      score: Math.floor(Math.random() * 20) + 80,
      details: Math.random() > 0.2
        ? "Size measurements are within tolerance range of authentic medicine"
        : "Size variance exceeds acceptable limits by 5-8%. Possible manufacturing defect."
    },
    text: {
      match: Math.random() > 0.35,
      score: Math.floor(Math.random() * 35) + 65,
      details: Math.random() > 0.35
        ? "Embossed text is clear, properly aligned, and matches reference font"
        : "Text quality is degraded. Font weight and spacing differ from authentic samples."
    },
    qrCode: {
      match: Math.random() > 0.4,
      score: Math.floor(Math.random() * 40) + 60,
      details: Math.random() > 0.4
        ? "QR code is scannable and links to verified pharmaceutical database"
        : "QR code missing, damaged, or does not resolve to official registry."
    },
    packaging: {
      match: Math.random() > 0.3,
      score: Math.floor(Math.random() * 30) + 70,
      details: Math.random() > 0.3
        ? "Packaging material, print quality, and seal integrity meet standards"
        : "Packaging shows signs of poor print quality or material inconsistencies."
    }
  }

  // Generate discrepancies based on feature mismatches
  const discrepancies: AnalysisResult["discrepancies"] = []
  
  if (!features.color.match) {
    discrepancies.push({
      type: "Color Mismatch",
      severity: "medium",
      description: "The tablet color deviates from the expected shade for authentic products",
      location: { x: 25, y: 30, width: 50, height: 40 }
    })
  }

  if (!features.text.match) {
    discrepancies.push({
      type: "Text Quality",
      severity: "high",
      description: "Embossed text appears blurry or incorrectly formatted",
      location: { x: 35, y: 40, width: 30, height: 20 }
    })
  }

  if (!features.qrCode.match) {
    discrepancies.push({
      type: "QR Code Issue",
      severity: "high",
      description: "QR code is missing, unreadable, or doesn't link to verified database",
      location: { x: 70, y: 15, width: 15, height: 15 }
    })
  }

  if (!features.packaging.match) {
    discrepancies.push({
      type: "Packaging Quality",
      severity: "medium",
      description: "Print quality or material consistency below expected standards",
    })
  }

  // Generate recommendations based on results
  const recommendations: string[] = []
  
  if (isAuthentic && randomConfidence > 85) {
    recommendations.push(
      "This medicine appears to be authentic based on our analysis.",
      "Store the medicine in a cool, dry place away from direct sunlight.",
      "Check the expiration date before use.",
      "Follow the dosage instructions provided by your healthcare provider."
    )
  } else if (randomConfidence > 70) {
    recommendations.push(
      "Some minor discrepancies were detected. Exercise caution.",
      "Verify the medicine with your pharmacist or healthcare provider before use.",
      "Check if the packaging seal was intact when you received it.",
      "Compare with a known authentic sample if available.",
      "Report suspicious medicines to local health authorities."
    )
  } else {
    recommendations.push(
      "⚠️ CRITICAL: This medicine shows significant signs of being counterfeit. DO NOT USE.",
      "Immediately report this to local health authorities and pharmaceutical regulators.",
      "Do not dispose of the medicine - keep it as evidence for authorities.",
      "Contact the manufacturer directly using verified contact information.",
      "Visit an authorized pharmacy or healthcare facility for genuine medicine.",
      "File a complaint with your country's drug regulatory authority."
    )
  }

  return {
    authentic: isAuthentic,
    confidence: randomConfidence,
    features,
    discrepancies,
    recommendations,
    matchedMedicine: {
      name: matchedMedicine.name,
      manufacturer: matchedMedicine.manufacturer,
      batchNumber: matchedMedicine.batchNumber
    }
  }
}

export function getMedicineDatabase() {
  return medicineDatabase
}
