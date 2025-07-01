import * as React from "react"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 " + (className ? className : "")}
      {...props}
    />
  )
)
Card.displayName = "Card"

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={"p-4 " + (className ? className : "")}
      {...props}
    />
  )
)
CardContent.displayName = "CardContent" 