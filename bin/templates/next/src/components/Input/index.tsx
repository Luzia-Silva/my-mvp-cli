import {
    Flex ,
    Input ,
    FormControl ,
    FormLabel ,
    InputGroup,
} from '@chakra-ui/react'

export type InputProps = {
   title: string;
   placeholder?: string;
   type: string;
   name: string;
}
const InputTemplete = ({title, placeholder, type, name}: InputProps) => (
    <Flex>
        <FormControl isRequired>
            <FormLabel>{title}</FormLabel>
            <InputGroup>
                <Input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                />
            </InputGroup>
        </FormControl>
    </Flex>
);
export default InputTemplete