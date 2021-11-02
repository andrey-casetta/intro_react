import styled, { keyframes } from 'styled-components'

const appearFromRight = keyframes`
from {
  opacity: 0;
  transform: translateX(-50px);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`
const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(50px);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  color: #f4ede8;
`

export const ProductsContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: transparent;

  width: 700px;
  height: 900px;

  border-radius: 10px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 85px;
  justify-content: space-between;

  background-color: #ff9000;
  color: #f4ede8;
  font-size: 32px;
  border-radius: 10px;

  padding: 20px;

  font-weight: 500;
`
export const HeaderButton = styled.button`
  border: 0;
  font-weight: 500;
  font-size: 32px;
  cursor: pointer;
  background-color: transparent;
  color: #f4ede8;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
`

export const Product = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 150px;
  margin-top: 10px;
  border-radius: 4px;
  background-color: #3e3b47;
  animation: ${appearFromRight} 1s;
`

export const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
`

export const ProductInfo = styled.div`
  margin-left: 20px;
  flex: 1;
`
export const ProductName = styled.strong`
  font-weight: 500;
`
export const ProductDescriptionContainer = styled.div`
  margin: 4px;
  padding: 4px;
  background-color: #3e3b47;
  max-height: 80px;
  overflow-y: auto;
`
export const ProductDescriptionText = styled.span`
  font-weight: 300;
`

export const AddToCartContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  justify-content: space-evenly;
  height: 100%;
`
export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 32px;
`

export const CartHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #28262e;
  padding: 16px 32px;

  border: 1px solid #3e3b47;
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  margin-top: 10px;
  border-radius: 4px;
  background-color: #3e3b47;
  animation: ${appearFromLeft} 1s;
`

export const ProductsInCart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  background-color: #3e3b47;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 45px;
  border-radius: 4px;
  background-color: #3e3b47;
  border-bottom: 1px solid #f4ede8;
  animation: ${appearFromLeft} 1s;
`
export const ItemName = styled.strong``

export const EmptyCartMessage = styled.div`
  padding: 32px;
  font-size: 24px;
`

export const CartFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #28262e;
  padding: 16px 32px;

  border: 1px solid #3e3b47;
`

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 0;
  border-radius: 50%;

  margin: 8px;

  background-color: #cf3131;
  color: #fff;

  cursor: pointer;
`

export const CartButton = styled.button`
  width: 150px;
  height: 40px;

  text-align: center;
  font-size: 14px;
  border: 0;
  border-radius: 5px;
  color: #fff;
  background-color: #ff9000;

  margin: 5px;

  transition: all 0.2s linear;

  cursor: pointer;

  :hover {
    background-color: #f8f9fa;
    color: #90be6d;
  }
`
