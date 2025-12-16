import DashboardLayout from '@/components/layouts/DashboardLayout'
import React from 'react'
import AgeVerificationModal from '../../../../components/organism/dialog'

export default function DashboardRootLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardLayout>
            {children}
            <AgeVerificationModal />
        </DashboardLayout>
    )
}
