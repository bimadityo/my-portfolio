import CertificationCard from "@/components/certification-card"
import { certifications } from "@/lib/data"

export const metadata = {
  title: "Certifications - Bima Adityo Kurniawan",
  description: "Professional certifications and achievements of Bima Adityo Kurniawan"
}

export default function CertificationsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Certifications
          </h1>
          <p className="text-xl text-muted-foreground">
            Professional certifcations that validate my expertise and commitment to continous learning
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification) => (
              <CertificationCard key={certification.id} certification={certification} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}