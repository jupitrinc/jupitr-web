import { ScrollAnimationProps } from "./ScrollAnimation.types"

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
}) => (
  <div className="w-full inline-flex flex-nowrap overflow-hidden sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-5 animate-infinite-scroll">
      {children}
    </ul>
    <ul
      className="flex items-center justify-center md:justify-start [&_li]:mx-5 animate-infinite-scroll"
      aria-hidden="true"
    >
      {children}
    </ul>
  </div>
)

export const ScrollAnimationItem: React.FC<ScrollAnimationProps> = ({
  children,
}) => <li>{children}</li>
