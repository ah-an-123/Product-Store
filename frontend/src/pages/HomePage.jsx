import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useProductStore } from '../../store/product'
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spaceX={4} spaceY={4}>
        <Text
          fontSize="25px"
          fontWeight={"bold"}
          bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
          bgClip="text"
          textAlign="center"
        >
          Current Products
        </Text>

        <SimpleGrid
          columns={{
            base: 2,
            md: 2,
            lg: 3
          }}
          gap={4}
          w={"full"}
        >
          {
            products.map((product) => {
              return <ProductCard key={product._id} product={product} />
            })
          }

        </SimpleGrid>

        {
          products.length === 0 && (
            <Text
              fontSize='md'
              textAlign='center'
              fontWeight='bold'
              color='gray.500'>
              No products found 😕{" "}
              <br />
              <Link to="/create">
                <Text
                  as="span"
                  color="blue.500"
                  _hover={{ textDecoration: "underline" }}
                >
                  Create a product
                </Text>
              </Link>
            </Text>
          )
        }

      </VStack>
    </Container>
  )
}
