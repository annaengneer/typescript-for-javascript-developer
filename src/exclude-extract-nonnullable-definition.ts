export {};

type MyExclude = DebugType;
type DebugType = () => void;
type SomeType = string | number | DebugType;
type FunctionType = Exclude<SomeType, string | number>;
type NunFunctionType = MyExclude;

type TypeExcludingFunction = Exclude<SomeType, Function>;

type FunctionTypeByExtract = Extract<SomeType, DebugType>;
type NonFunctiontypeByExtract = Extract<SomeType, string | number>;
type FunctionTypeExtratingFunction = Extract<SomeType, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
