import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
} from '@chakra-ui/react';
import {useRouter} from "next/router";

const Home = ()  =>{
    const router = useRouter();

    return (
        <Container maxW='5xl'>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 8 }}
                py={{ base: 10, md: 20 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    Create your projects{' '}
                    <Text as={'span'} color={'blue.400'}>
                        with our components
                    </Text>
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                    To facilitate the creation of projects, we carry out the development of
                    screens that can be standard and facilitate the execution time.
                    The CLI Labs is a simplified form of dev autonomy.
                </Text>
                <Stack spacing={6} direction={'row'}>
                    <Button
                        rounded={'full'}
                        px={10}
                        color="black"
                        bg={'blue.400'}
                        _hover={{ bg: 'blue.500' }}
                        onClick={()=>{ router.push('/login')}}>
                        Login
                    </Button>
                    <Button
                        rounded={'full'}
                        px={10}
                        color="black"
                        bg={'white'}
                        _hover={{ bg: 'gray.200' }}
                        onClick={()=>{router.push('/registre')}}>
                        Registre
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
}
export default Home;
