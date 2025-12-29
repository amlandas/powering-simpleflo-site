import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.redirect(
    "https://rag-playground-web-908840126213.us-west1.run.app/playground"
  )
}
