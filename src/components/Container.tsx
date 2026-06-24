import React from 'react'

type TChildren={
  children:React.ReactNode
}
const Container = ({children}:TChildren) => {
  return (
    <div className='p-6 shadow-2xl rounded-2xl flex flex-col gap-8 '>{children}</div>
  )
}

export default Container