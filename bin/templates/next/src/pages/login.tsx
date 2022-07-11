import {Flex , Heading , VStack, Box} from "@chakra-ui/react";
import InputTemplete from "../components/Input";
import ButtonTamplete from "../components/Button";

const Login = () =>{
    return(
        <Flex
            align="center"
            justify="center"
        >
            <Box
                borderRadius="lg"
                m={{ base: 5, md: 8, lg: 8}}
                p={{ base: 5, lg: 10 }}>
                <VStack spacing={{ base: 4, md: 8, lg: 5 }}>
                    <Heading
                        noOfLines={1}
                        fontSize={{
                            base: '3xl',
                            md: '4xl',
                        }}>
                        Your login screen
                    </Heading>
                    <Box
                        bg={'gray.700'}
                        borderRadius="lg"
                        p={8}
                        color={'whiteAlpha.900'}
                        shadow="base">
                        <VStack spacing={5}>
                            <InputTemplete
                                title='E-mail'
                                name='email'
                                type='text'
                                placeholder='what is your email?'
                            />
                            <InputTemplete
                                title='Password'
                                name='password'
                                type='password'
                                placeholder='what is your password?' />
                            <ButtonTamplete name='Send' />
                        </VStack>
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}
export default Login;