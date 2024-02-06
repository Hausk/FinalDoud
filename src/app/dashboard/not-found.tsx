 export default function NotFound() {
  return (
    <div className='w-full h-full col-span-3 lg:col-span-4 lg:border-l flex'>
      <div className="m-auto flex w-full justify-center">
        <h1 className="next-error-h1 text-2xl inline mr-[20px] pr-[23px] align-top border-r-2">404</h1>
        <h2 className="text-sm m-0 align-middle my-auto">La page n&apos;existe pas</h2>
      </div>
    </div>
  )
}