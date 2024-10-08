/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/xECmneOBVP8
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
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function FacilityCreate() {
  return (
    <div className="flex flex-col h-screen">
      {/* <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between md:px-8">
        <Link href="#" prefetch={false}>
          <LogInIcon className="h-8 w-auto" />
        </Link>
        <nav className="flex items-center space-x-4 md:space-x-6">
          <Link href="#" prefetch={false}>
            홈
          </Link>
          <Link href="#" prefetch={false}>
            시설 관리
          </Link>
          <Link href="#" prefetch={false}>
            예약 관리
          </Link>
          <Link href="#" prefetch={false}>
            사용자 관리
          </Link>
          <Link href="#" prefetch={false}>
            공지사항 관리
          </Link>
        </nav>
        <div className="relative">
          <Button variant="ghost" size="icon">
            <img
              src="/placeholder.svg"
              alt="Admin profile"
              width={32}
              height={32}
              className="rounded-full"
              style={{ aspectRatio: "32/32", objectFit: "cover" }}
            />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoveVerticalIcon className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>프로필 설정</DropdownMenuItem>
              <DropdownMenuItem>로그아웃</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header> */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">새로운 시설 등록</h1>
        <form className="space-y-6">
          <div>
            <Label htmlFor="name">시설 이름</Label>
            <Input id="name" placeholder="시설 이름 입력" />
          </div>
          <div>
            <Label htmlFor="description">시설 설명</Label>
            <Textarea id="description" rows={3} placeholder="시설 설명 입력" />
          </div>
          <div>
            <Label htmlFor="location">위치</Label>
            <Input id="location" placeholder="위치 입력" />
          </div>
          <div>
            <Label htmlFor="hours">운영 시간</Label>
            <div className="grid grid-cols-2 gap-4">
              <Input id="available-hours-start" type="time" defaultValue="08:00" />
              <Input id="available-hours-end" type="time" defaultValue="22:00" />
            </div>
          </div>
          <div>
            <Label htmlFor="price">요금</Label>
            <Input id="price" type="number" placeholder="요금 입력" />
          </div>
          <div>
            <Label>시설 사진</Label>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <PlusIcon className="h-5 w-5" />
                <span className="sr-only">사진 추가</span>
              </Button>
              <div className="flex space-x-2">
                <div className="relative">
                  <img
                    src="/placeholder.svg"
                    alt="Facility image"
                    width={80}
                    height={80}
                    className="rounded"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }}
                  />
                  <Button variant="ghost" size="icon" className="absolute top-1 right-1 text-red-500">
                    <TrashIcon className="h-5 w-5" />
                    <span className="sr-only">삭제</span>
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src="/placeholder.svg"
                    alt="Facility image"
                    width={80}
                    height={80}
                    className="rounded"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }}
                  />
                  <Button variant="ghost" size="icon" className="absolute top-1 right-1 text-red-500">
                    <TrashIcon className="h-5 w-5" />
                    <span className="sr-only">삭제</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <Label>예약 가능 시간대</Label>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              <Button variant="outline">06:00 - 08:00</Button>
              <Button variant="outline">08:00 - 10:00</Button>
              <Button variant="outline">10:00 - 12:00</Button>
              <Button variant="outline">12:00 - 14:00</Button>
              <Button variant="outline">14:00 - 16:00</Button>
              <Button variant="outline">16:00 - 18:00</Button>
              <Button variant="outline">18:00 - 20:00</Button>
              <Button variant="outline">20:00 - 22:00</Button>
            </div>
          </div> */}
          <div className="flex justify-end">
            <Button type="submit">등록 완료</Button>
          </div>
        </form>
      </main>
      
      {/* <footer className="bg-muted text-muted-foreground py-6 px-8 flex justify-between">
        <div className="space-y-2">
          <p>UniSport 소개</p>
          <p>연락처: 123-456-7890</p>
        </div>
        <div className="space-x-4">
          <Link href="#" prefetch={false}>
            이용 약관
          </Link>
          <Link href="#" prefetch={false}>
            개인정보 처리방침
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="#" aria-label="Facebook" prefetch={false}>
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Twitter" prefetch={false}>
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Instagram" prefetch={false}>
            <InstagramIcon className="h-6 w-6" />
          </Link>
        </div>
      </footer> */}
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


function LogInIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}


function MoveVerticalIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="8 18 12 22 16 18" />
      <polyline points="8 6 12 2 16 6" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  )
}


function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
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
