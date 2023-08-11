import { Button, Flex, Text, ThemePanel } from '@radix-ui/themes'

export default function Home() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes &rsquo;)</Text>
      <Button>Let&rsquo;s go</Button>
      <ThemePanel />
    </Flex>
  )
}
