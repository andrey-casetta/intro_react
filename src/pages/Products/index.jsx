import React, { useState } from 'react'
import {
  Container,
  ProductsContent,
  Header,
  Content,
  Product,
  ProductInfo,
  CartButton,
  ProductImage,
  ProductDescriptionContainer,
  ProductDescriptionText,
  ProductName,
  AddToCartContainer,
  HeaderButton,
  Item,
  ItemName,
  Cart,
  EmptyCartMessage,
  CartHeader,
  CartContainer,
  ProductsInCart,
  CartFooter,
  RemoveItemButton,
} from './styles'

import ProductsList from './data'
import ToastNotification from '../../components/ToastNotification'

const Products = () => {
  const [showCart, setShowCart] = useState(false)
  const [myCart, setMyCart] = useState([])
  const [cartSum, setCartSum] = useState(0)
  const [showToast, setShowToast] = useState(false)

  function handleAddItemToCart(product) {
    const productInCartIndex = myCart.findIndex(
      (item) => item.id === product.id
    )
    if (productInCartIndex < 0) setMyCart([...myCart, product])
    else myCart[productInCartIndex].quantity++

    updateCartSum(product.value, 'sum')
    setShowToast(true)
  }

  function handleRemoveItem(product) {
    const productInCartIndex = myCart.findIndex(
      (item) => item.id === product.id
    )

    if (myCart[productInCartIndex].quantity === 1) {
      myCart.splice(productInCartIndex, 1)
    } else {
      myCart[productInCartIndex].quantity--
    }
    updateCartSum(product.value, 'sub')
  }

  function updateCartSum(itemValue, type) {
    if (type === 'sum') setCartSum(cartSum + itemValue)
    else setCartSum(cartSum - itemValue)
  }

  return (
    <Container>
      <ProductsContent>
        <Header>
          <HeaderButton
            onClick={() => setShowCart(false)}
            children={'Produtos'}
          />
          {showToast && (
            <ToastNotification handleCloseToast={() => setShowToast(false)} />
          )}
          <HeaderButton
            onClick={() => setShowCart(true)}
            children={'Ver Carrinho'}
          />
        </Header>
        <Content>
          {!showCart ? (
            ProductsList.map((product) => (
              <Product key={product.id}>
                <ProductImage src={product.img} alt='product' />
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductDescriptionContainer>
                    <ProductDescriptionText>
                      {product.description}
                    </ProductDescriptionText>
                  </ProductDescriptionContainer>
                </ProductInfo>
                <AddToCartContainer>
                  <CartButton onClick={() => handleAddItemToCart(product)}>
                    + CARRINHO
                  </CartButton>
                  <span>R$ {product.value},00</span>
                </AddToCartContainer>
              </Product>
            ))
          ) : myCart.length > 0 ? (
            <CartContainer>
              <CartHeader>
                <strong>Produto</strong>
                <strong>Quantidade</strong>
              </CartHeader>
              <ProductsInCart>
                {myCart.map((item) => (
                  <Cart key={item.id}>
                    <RemoveItemButton onClick={() => handleRemoveItem(item)}>
                      -
                    </RemoveItemButton>
                    <Item>
                      <ItemName>{item.name}</ItemName>
                      <ItemName>{item.quantity}</ItemName>
                    </Item>
                  </Cart>
                ))}
              </ProductsInCart>
              <CartFooter>
                <strong>Total</strong>
                <strong>R$ {cartSum},00</strong>
              </CartFooter>
            </CartContainer>
          ) : (
            <EmptyCartMessage>Carrinho vazio :(</EmptyCartMessage>
          )}
        </Content>
      </ProductsContent>
    </Container>
  )
}

export default Products
