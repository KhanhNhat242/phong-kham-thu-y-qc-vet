import type { ThemeConfig } from 'antd'

/**
 * Theme antd — giá trị PHẢI khớp với CSS variables trong app/globals.css (CLAUDE.md mục 5).
 */
export const brandColors = {
  primary: '#0B3D91',
  primaryDark: '#082B66',
  primaryLight: '#E8F0FB',
  accent: '#E31E24',
  surface: '#F6F9FD',
  ink: '#0F172A',
  muted: '#536279',
  line: '#DBE5F3',
} as const

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: brandColors.primary,
    colorLink: brandColors.primary,
    colorError: brandColors.accent,
    colorText: brandColors.ink,
    colorTextSecondary: brandColors.muted,
    colorBorder: brandColors.line,
    // Accessible & Ethical: placeholder đạt ~4.5:1 trên nền trắng
    colorTextPlaceholder: '#68758A',
    colorTextDescription: brandColors.muted,
    borderRadius: 12,
    borderRadiusLG: 16,
    motionDurationMid: '0.2s',
    controlOutlineWidth: 3,
    controlHeight: 46,
    fontSize: 16,
    fontFamily: 'var(--font-be-vietnam), system-ui, sans-serif',
  },
  components: {
    Form: { labelFontSize: 15, itemMarginBottom: 18, verticalLabelPadding: '0 0 6px' },
    Drawer: { colorBgElevated: '#ffffff' },
  },
}
