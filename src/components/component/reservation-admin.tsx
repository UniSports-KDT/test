/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/9yqGs7tantp
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ReservationAdmin() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-bold">UniSport</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="font-medium hover:underline" prefetch={false}>
            홈
          </Link>
          <Link href="#" className="font-medium hover:underline" prefetch={false}>
            시설 관리
          </Link>
          <Link href="#" className="font-medium hover:underline" prefetch={false}>
            예약 관리
          </Link>
          <Link href="#" className="font-medium hover:underline" prefetch={false}>
            사용자 관리
          </Link>
          <Link href="#" className="font-medium hover:underline" prefetch={false}>
            공지 관리
          </Link>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <img
                src="/placeholder.svg"
                width={36}
                height={36}
                alt="Avatar"
                className="rounded-full"
                style={{ aspectRatio: "36/36", objectFit: "cover" }}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>관리자</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>설정</DropdownMenuItem>
            <DropdownMenuItem>로그아웃</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-1 py-8 px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">john@example.com</div>
                </div>
                <Badge variant="outline" className="text-xs">
                  대기 중
                </Badge>
              </div>
              <div className="mt-4">
                <div>농구 코트</div>
                <div className="text-sm text-muted-foreground">2023-06-01, 10:00 AM - 12:00 PM</div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm">
                  승인
                </Button>
                <Button variant="outline" size="sm" className="text-red-500">
                  거절
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Jane Smith</div>
                  <div className="text-sm text-muted-foreground">jane@example.com</div>
                </div>
                <Badge variant="outline" className="text-xs">
                  대기 중
                </Badge>
              </div>
              <div className="mt-4">
                <div>수영장</div>
                <div className="text-sm text-muted-foreground">2023-06-05, 3:00 PM - 5:00 PM</div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm">
                  승인
                </Button>
                <Button variant="outline" size="sm" className="text-red-500">
                  거절
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Michael Johnson</div>
                  <div className="text-sm text-muted-foreground">michael@example.com</div>
                </div>
                <Badge variant="outline" className="text-xs">
                  대기 중
                </Badge>
              </div>
              <div className="mt-4">
                <div>테니스 코트</div>
                <div className="text-sm text-muted-foreground">2023-06-10, 2:00 PM - 4:00 PM</div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm">
                  승인
                </Button>
                <Button variant="outline" size="sm" className="text-red-500">
                  거절
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-bold">UniSport 소개</h3>
            <p>
              UniSport는 스포츠 시설과 서비스를 제공하는 선도적인 기업입니다. 모든 수준의 개인과 팀을 위한 다양한 시설과
              활동을 제공하고 있습니다.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">문의하기</h3>
            <p>
              전화: +1 (123) 456-7890
              <br />
              이메일: info@unisport.com
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">법적 정보</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:underline" prefetch={false}>
                이용 약관
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                개인정보 보호 정책
              </Link>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:underline" prefetch={false}>
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                <InstagramIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
