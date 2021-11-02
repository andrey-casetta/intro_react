import { useEffect } from 'react'

const ToastNotification = (props) => {
  const { handleCloseToast } = props

  useEffect(() => {
    setTimeout(() => {
      handleCloseToast()
    }, 2000)
  }, [handleCloseToast])

  return <div style={{ fontSize: '16px' }}>Produto adicionado com sucesso!</div>
}

export default ToastNotification
