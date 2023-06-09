import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux/"
import store from "./store"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const persistor = persistStore(store)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      // useErrorBoundary: true,
      // enabled: true,
      cacheTime: 10 * 60 * 1000,
      staleTime: 10 * 60 * 1000,
    },
    mutations: {
      // useErrorBoundary: true,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
