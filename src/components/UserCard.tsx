interface UserCardProps {
  children: React.ReactNode
}

export default function UserCard({ children }: UserCardProps) {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow'>
      <div className='px-4 py-5 sm:p-6'>{children}</div>
    </div>
  )
}
