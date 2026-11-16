import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function Stroke({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function HeartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 21s-7.5-4.6-9.6-9.4C.9 8.2 3 4.5 6.6 4.5c2.1 0 3.6 1.1 5.4 3.1 1.8-2 3.3-3.1 5.4-3.1 3.6 0 5.7 3.7 4.2 7.1C19.5 16.4 12 21 12 21z" />
    </svg>
  )
}

export function StethoscopeIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M5 3v5a5 5 0 0 0 10 0V3" />
      <path d="M5 3h2M13 3h2" />
      <path d="M10 13v2a5 5 0 0 0 10 0v-2" />
      <circle cx="20" cy="11" r="2" />
    </Stroke>
  )
}

export function BloodIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M9 3h6" />
      <path d="M10 3v14a2 2 0 0 0 4 0V3" />
      <path d="M10 11h4" />
      <path d="M19 9.5c0 1.4-1 2.5-2 2.5s-2-1.1-2-2.5S17 6 17 6s2 2.1 2 3.5z" />
      <path d="M5 14h3M5 17h3" />
    </Stroke>
  )
}

export function UltrasoundIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7 13c1.2-3.5 2.8-5 5-5s3.8 1.5 5 5" />
      <path d="M10 13c.5-1.3 1.1-2 2-2s1.5.7 2 2" />
    </Stroke>
  )
}

export function SurgeryIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M14.5 4.5 19.5 9.5 9 20H4v-5z" />
      <path d="M12 7l5 5" />
      <path d="M4 15l5 5" />
    </Stroke>
  )
}

export function SpaIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M3 12h18v2a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6z" />
      <path d="M6 12V6a2.5 2.5 0 0 1 4.6-1.4" />
      <circle cx="14" cy="6" r="1.2" />
      <circle cx="17.5" cy="8.5" r="1" />
      <circle cx="14.5" cy="9.5" r=".8" />
      <path d="M7 20l-1 1.5M17 20l1 1.5" />
    </Stroke>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
    </svg>
  )
}

export function ZaloIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M24 4C12.4 4 3 12.1 3 22.1c0 5.7 3.1 10.8 7.9 14.1-.3 2.3-1.4 4.6-3.3 6.4 0 0 5.5-.1 9.5-3.1 2.2.6 4.5.9 6.9.9 11.6 0 21-8.1 21-18.2S35.6 4 24 4z"
      />
      <text
        x="24"
        y="27.5"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="12.5"
        fill="var(--qc-primary)"
      >
        Zalo
      </text>
    </svg>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21z" />
    </svg>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </Stroke>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Stroke>
  )
}

export function CalendarIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M9 15l2 2 4-4" />
    </Stroke>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </Stroke>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Stroke>
  )
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M15 5l-7 7 7 7" />
    </Stroke>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M9 5l7 7-7 7" />
    </Stroke>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Stroke>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Stroke>
  )
}

export function ExpandIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </Stroke>
  )
}

export function SendIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M21 3 10 14" />
      <path d="M21 3l-7 18-4-7-7-4z" />
    </Stroke>
  )
}

const serviceIcons = {
  stethoscope: StethoscopeIcon,
  blood: BloodIcon,
  ultrasound: UltrasoundIcon,
  surgery: SurgeryIcon,
  spa: SpaIcon,
} as const

export function ServiceIcon({
  name,
  ...props
}: IconProps & { name: keyof typeof serviceIcons }) {
  const Icon = serviceIcons[name]
  return <Icon {...props} />
}

export function CheckIcon(props: IconProps) {
  return (
    <Stroke strokeWidth={2.4} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </Stroke>
  )
}

export function SpinnerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
