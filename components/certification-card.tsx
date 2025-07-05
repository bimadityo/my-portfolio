import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ExternalLink, Calendar } from "lucide-react"
import type { Certification } from "@/lib/types"

interface CertificationCardProps {
  certification: Certification
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  const isExpired = certification.expiryDate && new Date(certification.expiryDate) < new Date()

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Image
            src={certification.image || "/placeholder.svg"}
            alt={`${certification.name} certificate`}
            width={64}
            height={64}
            className="rounded-lg border"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{certification.name}</h3>
            <p className="text-primary font-medium">{certification.issuer}</p>
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Issued: {certification.issueDate}</span>
            </div>
            {certification.expiryDate && (
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Expires: {certification.expiryDate}</span>
                {isExpired && (
                  <Badge variant="destructive" className="text-xs">
                    Expired
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{certification.description}</p>
        {certification.credentialId && (
          <p className="text-xs text-muted-foreground mb-4">Credential ID: {certification.credentialId}</p>
        )}
        {certification.verificationUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={certification.verificationUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Verify Certificate
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
