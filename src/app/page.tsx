'use client'
import { theme } from '@/styles'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <div>Ola mundo</div>
    </ChakraProvider>
  )
}
