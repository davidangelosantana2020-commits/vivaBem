import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { hasError, error } = this.state as State;
    if (hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-surface px-6">
          <div className="max-w-md w-full p-12 bg-white rounded-[3rem] editorial-shadow border border-outline-variant/10 text-center space-y-6">
            <h2 className="text-3xl font-serif italic text-primary">Ops! Algo deu errado.</h2>
            <p className="text-on-surface-variant font-light leading-relaxed">
              Pedimos desculpas pelo inconveniente. Por favor, tente recarregar a página ou entre em contato conosco via WhatsApp.
            </p>
            {error && (
              <pre className="text-[10px] text-red-500 bg-red-50 p-4 rounded-xl overflow-auto text-left">
                {error.message}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              className="btn-primary w-full"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return (this as any).props.children;
  }
}
