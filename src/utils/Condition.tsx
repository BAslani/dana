// import type { PropsWithChildren, ReactNode, ReactElement } from 'react'
// import React from 'react'

// type WhenProps = {
//   isTrue: boolean
//   children: ReactNode
// }

// type FallProps = {
//   children: ReactNode
// }

// type ConditionProps = {
//   children: ReactNode
// }

// const Condition: React.FC<ConditionProps> & {
//   When: React.FC<WhenProps>
//   Fall: React.FC<FallProps>
// } = ({ children }) => {
//   let result: ReactNode | null = null

//   React.Children.forEach(children, (child) => {
//     if (!result && React.isValidElement(child)) {
//       const element = child as ReactElement<any> // 👈 cast to ReactElement
//       if (element.type === Condition.When && element.props.isTrue) {
//         result = element
//       } else if (element.type === Condition.Fall) {
//         result = element
//       }
//     }
//   })

//   return result || null
// }

// Condition.When = ({
//   isTrue,
//   children,
// }: PropsWithChildren<{ isTrue: boolean }>) => {
//   return isTrue ? children : null
// }

// Condition.Fall = ({ children }) => {
//   return children
// }

// export default Condition
