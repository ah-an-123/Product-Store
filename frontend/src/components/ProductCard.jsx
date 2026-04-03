import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  Button,
  CloseButton,
  Dialog,
  Portal,
  VStack,
  Input
} from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import { useProductStore } from "../../store/product";
const ProductCard = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const textColor = useColorModeValue("gray.800", "white");
  const { deleteProduct, updateProduct } = useProductStore();
  const [updatedProduct, setUpdatedProduct] = useState(product);


  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  // Delete Product Function
  const handleProductDeletion = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  // Update Product Function
  const handleUpdateProduct = async () => {
    const { success, message } = await updateProduct(product._id, updatedProduct);
    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
    setIsOpen(false)
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={"350px"}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>
        <HStack spaceX={2}>
          <Dialog.Root
            open={isOpen}
            onOpenChange={(e) => setIsOpen(e.open)}
            size={{ mdDown: "full", md: "lg" }}
          >
            <Dialog.Trigger asChild>
              <FiEdit
                color="blue"
                size={22}
                style={{ cursor: "pointer" }}
                onClick={() => setIsOpen(true)}
              />
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Update Product</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <VStack spaceY={6} p={10}>
                      <Input
                        placeholder="Product Name"
                        name="name"
                        borderColor="gray.200"
                        value={updatedProduct.name}
                        onChange={(e) =>
                          setUpdatedProduct({
                            ...updatedProduct,
                            name: e.target.value
                          })
                        }
                      />
                      <Input
                        placeholder="Product Price"
                        name="price"
                        borderColor="gray.200"
                        value={updatedProduct.price}
                        onChange={(e) =>
                          setUpdatedProduct({
                            ...updatedProduct,
                            price: e.target.value
                          })
                        }
                      />
                      <Input
                        placeholder="Image URL"
                        name="image"
                        borderColor="gray.200"
                        value={updatedProduct.image}
                        onChange={(e) =>
                          setUpdatedProduct({
                            ...updatedProduct,
                            image: e.target.value
                          })
                        }
                      />
                    </VStack>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Dialog.ActionTrigger>
                    <Button onClick={handleUpdateProduct}>Update</Button>
                  </Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>

          <FiTrash2
            color="red"
            size={22}
            onClick={() => handleProductDeletion(product._id)}
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
