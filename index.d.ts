declare module '@samuelcastro/react-styled-flexboxgrid' {
  interface ThemeProps<T> {
    theme: T;
  }

  type ThemedStyledProps<P, T> = P & ThemeProps<T>;

  type AnyIfEmpty<T extends object> = keyof T extends never ? any : T;

  type FalseyValue = undefined | null | false;
  type Interpolation<P> =
    | InterpolationValue
    | InterpolationFunction<P>
    | FlattenInterpolation<P>;

  // cannot be made a self-referential interface, breaks WithPropNested
  // see https://github.com/microsoft/TypeScript/issues/34796
  type FlattenInterpolation<P> = ReadonlyArray<Interpolation<P>>;

  type InterpolationValue =
    | string
    | number
    | FalseyValue
    | Keyframes
    | StyledComponentInterpolation
    | CSSObject;

  type SimpleInterpolation = InterpolationValue | FlattenSimpleInterpolation;

  type FlattenSimpleInterpolation = ReadonlyArray<SimpleInterpolation>;

  type InterpolationFunction<P> = (props: P) => Interpolation<P>;

  type Attrs<P, A extends Partial<P>, T> =
    | ((props: ThemedStyledProps<P, T>) => A)
    | A;

  interface BaseThemedCssFunction<T extends object> {
    (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation;
    (
      first:
        | TemplateStringsArray
        | CSSObject
        | InterpolationFunction<ThemedStyledProps<{}, T>>,
      ...interpolations: Interpolation<ThemedStyledProps<{}, T>>[]
    ): FlattenInterpolation<ThemedStyledProps<{}, T>>;
    <P extends object>(
      first:
        | TemplateStringsArray
        | CSSObject
        | InterpolationFunction<ThemedStyledProps<P, T>>,
      ...interpolations: Interpolation<ThemedStyledProps<P, T>>[]
    ): FlattenInterpolation<ThemedStyledProps<P, T>>;
  }

  type ThemedCssFunction<T extends object> = BaseThemedCssFunction<
    AnyIfEmpty<T>
  >;

  type DefaultTheme = {};

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

    interface IGridProps extends HTMLDivElement {
      fluid?: boolean;
    }

    interface IRowProps extends HTMLDivElement {
      reverse?: boolean;
      start?: 'xs' | 'sm' | 'md' | 'lg';
      center?: 'xs' | 'sm' | 'md' | 'lg';
      end?: 'xs' | 'sm' | 'md' | 'lg';
      top?: 'xs' | 'sm' | 'md' | 'lg';
      middle?: 'xs' | 'sm' | 'md' | 'lg';
      bottom?: 'xs' | 'sm' | 'md' | 'lg';
      around?: 'xs' | 'sm' | 'md' | 'lg';
      between?: 'xs' | 'sm' | 'md' | 'lg';
      first?: 'xs' | 'sm' | 'md' | 'lg';
      last?: 'xs' | 'sm' | 'md' | 'lg';
      children?: React.ReactNode;
    }

    interface IColProps extends HTMLDivElement {
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
  export const Grid: ReactStyledFlexboxgrid.IGridProps;
  export const Row: ReactStyledFlexboxgrid.IRowProps;
  export const Col: ReactStyledFlexboxgrid.IColProps;

  export const config: (
    props: any
  ) => {
    media: {
      xs: ThemedCssFunction<DefaultTheme>;
      sm: ThemedCssFunction<DefaultTheme>;
      md: ThemedCssFunction<DefaultTheme>;
      lg: ThemedCssFunction<DefaultTheme>;
    };
  };
}
