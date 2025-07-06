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
      <CardHeader className="flex flex-col items-center">
        <div className="w-full relative aspect-[3/2] mb-4 overflow-hidden rounded-xl border shadow-sm">
          <Image
            src={certification.image || "/placeholder.svg"}
            alt={`${certification.name} certificate`}
            fill
            className="object-fit"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
        <div className="w-full text-center">
          <h3 className="text-xl font-semibold">{certification.name}</h3>
          <p className="text-primary font-medium">{certification.issuer}</p>
          <div className="flex justify-center items-center gap-2 mt-2 text-muted-foreground text-sm">
            <Calendar className="h-4 w-4" />
            <span>Issued: {certification.issueDate}</span>
          </div>
          {certification.expiryDate && (
            <div className="flex justify-center items-center gap-2 mt-1 text-muted-foreground text-sm">
              <Calendar className="h-4 w-4" />
              <span>Expires: {certification.expiryDate}</span>
              {isExpired && (
                <Badge variant="destructive" className="text-xs ml-1">
                  Expired
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="text-center">
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
