import { BrowserRouter } from 'react-router-dom'
import { Component, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './components/layout/Layout'
import { AppRoutes } from './routes/AppRoutes'
import './styles.css'

type BoundaryState = { hasError: boolean; name: string; message: string }
class PortfolioErrorBoundary extends Component<{ children: ReactNode }, BoundaryState> {
  state: BoundaryState = { hasError: false, name: '', message: '' }
  static getDerivedStateFromError(error: unknown): BoundaryState { const value = error instanceof Error ? error : new Error(String(error)); return { hasError: true, name: value.name, message: value.message } }
  render() { if (this.state.hasError) return <div style={{ color: '#111', background: '#fff', minHeight: '100vh', padding: '2rem', fontFamily: 'Arial, sans-serif' }}><h1>The portfolio could not render.</h1><p><strong>{this.state.name}</strong>: {this.state.message}</p><p>Please report this diagnostic message to the developer.</p></div>; return this.props.children }
}

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Portfolio root element #root was not found.')
createRoot(rootElement).render(<PortfolioErrorBoundary><BrowserRouter><Layout><AppRoutes /></Layout></BrowserRouter></PortfolioErrorBoundary>)
