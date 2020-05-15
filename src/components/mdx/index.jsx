import React from "react"
import { MDXProvider } from "@mdx-js/react"

export const components = {}

export const WrapRootElement = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
