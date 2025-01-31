type ODValidDeclarationType = "class"|"interface"|"type"|"variable"|"enum"|"other"
type ODValidMemberType = "constructor"|"property"|"method"|"enumerable"|"other"
type ODValidElementType = "unknown"|"primitive"|"array"|"union"|"intersection"|"reference"|"internal"|"external"|"typeParam"|"function"|"literal"|"keyof"|"readonly"|"unique"|"conditional"|"index"|"mapped"|"optional"|"predicate"|"query"|"rest"|"tuple"|"template"

type ODValidType = ODValidDeclarationType|ODValidMemberType|ODValidElementType

interface ODStructure<Type extends ODValidType> {
    type:Type
}
interface ODDeclarationStructure<Children extends object> extends ODStructure<ODValidDeclarationType> {
    name:string,
    comment:string|null,
    constant:boolean,
    source:string|null,
    children:Children[],
    typeParams:{name:string,type:ODValidElementStructure}[]|null
}
interface ODMemberStructure<Details extends ODValidElementStructure|null> extends ODStructure<ODValidMemberType> {
    name:string,
    comment:string|null,
    source:string|null,
    details:Details
}

//DECLARATION STRUCTURES
interface ODClassStructure extends ODDeclarationStructure<ODPropertyStructure|ODMethodStructure|ODConstructorStructure|ODOtherMemberStructure> {}
interface ODInterfaceStructure extends ODDeclarationStructure<ODPropertyStructure|ODMethodStructure|ODOtherMemberStructure> {}
interface ODTypeStructure extends ODDeclarationStructure<ODValidElementStructure> {}
interface ODVariableStructure extends ODDeclarationStructure<ODValidElementStructure> {}
interface ODEnumStructure extends ODDeclarationStructure<ODEnumerableStructure|ODOtherMemberStructure> {}
interface ODOtherStructure extends ODDeclarationStructure<object> {}

//MEMBER STRUCTURES
interface ODConstructorStructure extends ODMemberStructure<ODFunctionStructure> {}
interface ODPropertyStructure extends ODMemberStructure<ODValidElementStructure> {}
interface ODMethodStructure extends ODMemberStructure<ODFunctionStructure> {}
interface ODEnumerableStructure extends ODMemberStructure<ODValidElementStructure> {}
interface ODOtherMemberStructure extends ODMemberStructure<null> {}

//ELEMENT STRUCTURES
interface ODUnknownStructure extends ODStructure<"unknown"> {}
interface ODPrimitiveStructure extends ODStructure<"primitive"> {
    name:string
}
interface ODArrayStructure extends ODStructure<"array"> {
    child:ODValidElementStructure
}
interface ODUnionStructure extends ODStructure<"union"> {
    children:ODValidElementStructure[]
}
interface ODIntersectionStructure extends ODStructure<"intersection"> {
    children:ODValidElementStructure[]
}
interface ODReferenceStructure extends ODStructure<"reference"> {
    name:string
    target:ODValidDeclarationType
    typeArguments: ODValidElementStructure[]|null
}
interface ODInternalStructure extends ODStructure<"internal"> {
    name:string,
    typeArguments: ODValidElementStructure[]|null
}
interface ODExternalStructure extends ODStructure<"external"> {
    name:string,
    package:string,
    typeArguments: ODValidElementStructure[]|null
}
interface ODTypeParamStructure extends ODStructure<"typeParam"> {
    name:string,
    typeArguments: ODValidElementStructure[]|null
}
interface ODFunctionStructure extends ODStructure<"function"> {
    inherited:boolean,
    comment:string|null,
    parameters:{name:string,details:ODValidElementType}[],
    returns:ODValidElementType
}
interface ODLiteralStructure extends ODStructure<"literal"> {
    name:string
}
interface ODKeyOfStructure extends ODStructure<"keyof"> {
    child:ODValidElementType
}
interface ODReadonlyStructure extends ODStructure<"readonly"> {
    child:ODValidElementType
}
interface ODUniqueStructure extends ODStructure<"unique"> {
    child:ODValidElementType
}
interface ODConditionalStructure extends ODStructure<"conditional"> {
    checker:ODValidElementType,
    extends:ODValidElementType,
    trueValue:ODValidElementType,
    falseValue:ODValidElementType
}
interface ODIndexStructure extends ODStructure<"index"> {
    index:ODValidElementType,
    object:ODValidElementType
}
interface ODMappedStructure extends ODStructure<"mapped"> {
    parameterName:string,
    parameter:ODValidElementType,
    template:ODValidElementType
}
interface ODOptionalStructure extends ODStructure<"optional"> {
    child:ODValidElementType
}
interface ODPredicateStructure extends ODStructure<"predicate"> {
    name:string,
    target:ODValidElementType
}
interface ODQueryStructure extends ODStructure<"query"> {
    target:ODValidElementType
}
interface ODRestStructure extends ODStructure<"rest"> {
    child:ODValidElementType
}
interface ODTupleStructure extends ODStructure<"tuple"> {
    children:ODValidElementType[]
}
interface ODTemplateStructure extends ODStructure<"template"> {
    head:string,
    tails:{element:ODValidElementType,text:string}[]
}

//ALL STRUCTURES
type ODValidDeclarationStructure = (
    ODClassStructure|
    ODInterfaceStructure|
    ODTypeStructure|
    ODVariableStructure|
    ODEnumStructure|
    ODOtherStructure
)
type ODValidMemberStructure = (
    ODConstructorStructure|
    ODPropertyStructure|
    ODMethodStructure|
    ODEnumerableStructure|
    ODOtherMemberStructure
)
type ODValidElementStructure = (
    ODUnknownStructure|
    ODPrimitiveStructure|
    ODArrayStructure|
    ODUnionStructure|
    ODIntersectionStructure|
    ODReferenceStructure|
    ODInternalStructure|
    ODExternalStructure|
    ODTypeParamStructure|
    ODFunctionStructure|
    ODLiteralStructure|
    ODKeyOfStructure|
    ODReadonlyStructure|
    ODUniqueStructure|
    ODConditionalStructure| 
    ODIndexStructure|
    ODMappedStructure|
    ODOptionalStructure|
    ODPredicateStructure|
    ODQueryStructure|
    ODRestStructure|
    ODTupleStructure|
    ODTemplateStructure
)
type ODValidStructure = ODValidDeclarationStructure|ODValidMemberStructure|ODValidElementStructure