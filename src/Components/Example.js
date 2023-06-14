import { useMediaQuery } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'



export default function Example() {
    const [isLargerThan1280] = useMediaQuery('(min-width: 480px)')
  
    return (
      <Text>
        {isLargerThan1280 ? 'larger than 480px' : 'smaller than 480px'}
      </Text>
    )
  }



