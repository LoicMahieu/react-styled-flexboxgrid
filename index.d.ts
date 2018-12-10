declare module "react-styled-flexboxgrid" {

  import { StyledComponent } from "styled-components";

  namespace ReactStyledFlexboxgrid {

    interface ITheme {
      /**
       * rem
       */
      gridSize?: number;
      /**
       * rem
       */
      gutterWidth?: number;
      /**
       * rem
       */
      outerMargin?: number;
      mediaQuery?: string;
      container?: {
        /**
         * rem
         */
        sm?: number;
        /**
         * rem
         */
        md?: number;
        /**
         * rem
         */
        lg?: number;
      };
      breakpoints?: {
        /**
         * em
         */
        xs?: number;
        /**
         * em
         */
        sm?: number;
        /**
         * em
         */
        md?: number;
        /**
         * em
         */
        lg?: number;
      };
    }

    interface IGridProps {
      fluid?: boolean;
    }

    interface IRowProps {
      reverse?: boolean;
      start?: "xs" | "sm" | "md" | "lg";
      center?: "xs" | "sm" | "md" | "lg";
      end?: "xs" | "sm" | "md" | "lg";
      top?: "xs" | "sm" | "md" | "lg";
      middle?: "xs" | "sm" | "md" | "lg";
      bottom?: "xs" | "sm" | "md" | "lg";
      around?: "xs" | "sm" | "md" | "lg";
      between?: "xs" | "sm" | "md" | "lg";
      first?: "xs" | "sm" | "md" | "lg";
      last?: "xs" | "sm" | "md" | "lg";
      children?: React.ReactNode;
    }

    interface IColProps {
      reverse?: boolean;
      xs?: boolean | number;
      sm?: boolean | number;
      md?: boolean | number;
      lg?: boolean | number;
      xsOffset?: number;
      smOffset?: number;
      mdOffset?: number;
      lgOffset?: number;
    }

  }

  export type ITheme = ReactStyledFlexboxgrid.ITheme;
  export const Grid: StyledComponent<"div", any, ReactStyledFlexboxgrid.IGridProps, never>;
  export const Row: StyledComponent<"div", any, ReactStyledFlexboxgrid.IRowProps, never>;
  export const Col: StyledComponent<"div", any, ReactStyledFlexboxgrid.IColProps, never>;
}
