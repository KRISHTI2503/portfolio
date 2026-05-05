import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Portfolio error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#030712] px-6 text-center">
          <div>
            <p className="text-teal-400 font-mono text-sm mb-3">// error</p>
            <h1 className="text-white text-2xl font-bold mb-4">Something went wrong.</h1>
            <p className="text-slate-400 mb-6">Please refresh the page to continue.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
