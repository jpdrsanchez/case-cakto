export const MiniCheckoutWrapperLayout = (
  props: Readonly<React.PropsWithChildren>
) => {
  return (
    <div className="flex h-screen w-full overflow-auto px-6 py-4">
      <div className="m-auto w-full max-w-md grid gap-4">{props.children}</div>
    </div>
  )
}
