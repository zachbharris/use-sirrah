import SideNavigation from '@/components/SideNavigation'

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <SideNavigation />
      {children}
    </div>
  )
}
