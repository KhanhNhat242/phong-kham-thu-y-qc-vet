'use client'

import { ConfigProvider, App } from 'antd'
import viVN from 'antd/locale/vi_VN'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'
import type { ReactNode } from 'react'
import { antdTheme } from '@/lib/theme'

dayjs.locale('vi')

export function AntdProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider theme={antdTheme} locale={viVN}>
      <App>{children}</App>
    </ConfigProvider>
  )
}
