import { Route, Routes } from 'react-router-dom'
import { Layout } from './layout'
import { CheckoutPage } from './pages/checkoutPage'
import { HomePage } from './pages/homePage'
import { NoPage } from './pages/noPage'
import { SuccessPage } from './pages/successPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="success" element={<SuccessPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}
