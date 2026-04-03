import { Box, Container, Heading, Input, VStack, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useColorModeValue } from "../components/ui/color-mode"
import { useProductStore } from '../../store/product'
import { toast } from 'react-toastify';
export default function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  })
  const { createProduct } = useProductStore()
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct)
    if (!success) {
      toast.error(message);
    }
    else {

      toast.success(message)
    }
    setNewProduct({
      name: "",
      price: "",
      image: ""
    })
  }

  return (
    <Container maxW="60%">
      <VStack spaceX={8} spaceY={8} >
        <Heading
          as="h1"
          textAlign="center"
          mb={8}
          fontSize="2xl"
        >
          Create New Product
        </Heading>

        <Box
          w="full"
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded="lg"
          shadow="md"
        >
          <VStack spaceY={6} p={10}>
            <Input
              placeholder="Product Name"
              name="name"
              borderColor="gray.200"
              value={newProduct.name}
              cursor={"pointer"}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Product Price"
              name="price"
              cursor={"pointer"}
              borderColor="gray.200"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              cursor={"pointer"}
              borderColor="gray.200"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button bg="lightskyblue" color="black" w="full"
              onClick={handleAddProduct}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}
