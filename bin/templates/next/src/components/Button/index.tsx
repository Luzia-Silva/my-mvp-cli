import {Button} from "@chakra-ui/react";

export  type Button = {
    name: string;
}
const ButtonTamplete = ({name}:Button)=>{
    return(
        <Button
            colorScheme="blue"
            w='100%'
            bg="blue.400"
            color="white"
            _hover={{
                bg: 'blue.500',
            }}
        >
            {name}
        </Button>
    )
}
export default ButtonTamplete;